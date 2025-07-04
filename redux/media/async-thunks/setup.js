import { createAsyncThunk } from "@reduxjs/toolkit";
import * as mediasoup from "mediasoup-client";

import socketStore from "@/utils/socket";
import checkDevices from "./check-devices";
import logger from "@/utils/logger";

const setup = createAsyncThunk("media/setup", async (_, thunkAPI) => {
  const state = thunkAPI.getState();

  const device = new mediasoup.Device();

  const rtpCapabilities = await socketStore.request("getRouterRtpCapabilities");

  rtpCapabilities.headerExtensions = rtpCapabilities.headerExtensions.filter(
    (ext) => ext.uri !== "urn:3gpp:video-orientation"
  );

  await device.load({ routerRtpCapabilities: rtpCapabilities });

  navigator.mediaDevices.ondevicechange = async () => {
    thunkAPI.dispatch(checkDevices());
  };

  thunkAPI.dispatch(checkDevices(device));

  logger.info("mediasoup device ready");

  const { uuid } = state.media;

  const producerTransportParams = await socketStore.request(
    "createProducerTransport",
    { uuid }
  );

  logger.info("producerTransportParams", producerTransportParams);

  const producerTransport = device.createSendTransport(producerTransportParams);

  logger.info("producer transport created");

  producerTransport.on(
    "connect",
    async ({ dtlsParameters }, callback, error) => {
      const currentState = thunkAPI.getState();
      const { key } = currentState.media;

      try {
        await socketStore.request("connectProducerTransport", {
          dtlsParameters,
          key,
          uuid,
        });
        callback();
      } catch (e) {
        error(e);
      }
    }
  );

  producerTransport.on("connectionstatechange", (connectionState) => {
    switch (connectionState) {
      case "connecting":
        logger.info("producer transport connecting");
        break;
      case "connected":
        logger.info("producer transport connected");
        break;
      case "failed":
        logger.info("producer transport failed");
        producerTransport.close();
        break;
      default:
        logger.info(`producer transport ${connectionState}`);
        break;
    }
  });

  producerTransport.on(
    "produce",
    async ({ appData, kind, rtpParameters }, callback, error) => {
      const { email, name } = state.user;
      const currentState = thunkAPI.getState();
      const { key } = currentState.media;

      try {
        const producer = await socketStore.request("produce", {
          appData,
          email,
          key,
          kind,
          name,
          rtpParameters,
          uuid,
        });
        const { id } = producer;
        logger.info(`producing ${kind}`);
        callback({ id });
      } catch (e) {
        error(e);
      }
    }
  );

  const consumerTransportParams = await socketStore.request(
    "createConsumerTransport",
    { uuid }
  );

  logger.info("consumerTransportParams", consumerTransportParams);

  const consumerTransport = device.createRecvTransport(consumerTransportParams);

  logger.info("consumer transport created");

  consumerTransport.on(
    "connect",
    async ({ dtlsParameters }, callback, error) => {
      const currentState = thunkAPI.getState();
      const { key } = currentState.media;

      try {
        await socketStore.request("connectConsumerTransport", {
          dtlsParameters,
          key,
          uuid,
        });
        callback();
      } catch (e) {
        error(e);
      }
    }
  );

  consumerTransport.on("connectionstatechange", (connectionState) => {
    switch (connectionState) {
      case "connecting":
        logger.info("consumer transport connecting");
        break;
      case "connected":
        logger.info("consumer transport connected");
        break;
      case "failed":
        logger.info("consumer transport failed");
        consumerTransport.close();
        break;
      default:
        logger.info(`consumer transport ${connectionState}`);
        break;
    }
  });

  return { consumerTransport, producerTransport };
});

export default setup;

import { createAsyncThunk } from "@reduxjs/toolkit";
import logger from "@/utils/logger";

const canProduce = async (type) => {
  try {
    let devices = await navigator.mediaDevices.enumerateDevices();
    devices = devices.filter(
      (device) =>
        device.kind &&
        device.kind.startsWith(type) &&
        device.kind.endsWith("input")
    );
    logger.info(
      `${type} devices: ${devices.map((device) => device.label).join(", ")}`
    );

    return devices.length > 0;
  } catch (e) {
    logger.error("can not enumerate devices");
    return false;
  }
};

const checkDevices = createAsyncThunk("media/check-devices", async (device) => {
  console.log("inside check devices");
  const audio = await canProduce("audio");
  const video = await canProduce("video");

  if (device) {
    return { audio, device, video };
  }

  return { audio, video };
});

export default checkDevices;

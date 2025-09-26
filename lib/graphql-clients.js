import { GraphQLClient } from "graphql-request";

const backendUrl = process.env.DIRECTUS_BACKEND_URL || "";
const frontendUrl = process.env.NEXT_PUBLIC_DIRECTUS_FRONTEND_URL
  ? `${process.env.NEXT_PUBLIC_DIRECTUS_FRONTEND_URL}/graphql`
  : "";
const apiKey = process.env.API_KEY || "";

export const backendClient = new GraphQLClient(backendUrl);
backendClient.setHeader("authorization", `Bearer ${apiKey}`);

export const frontendClient = new GraphQLClient(frontendUrl);
frontendClient.setHeader("authorization", `Bearer ${apiKey}`);

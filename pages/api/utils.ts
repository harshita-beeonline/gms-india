import { GraphQLClient } from "graphql-request";

export const backendClient = new GraphQLClient(
  process.env.DIRECTUS_BACKEND_URL || ""
);
backendClient.setHeader("authorization", `Bearer ${process.env.API_KEY || ""}`);

export const frontendClient = new GraphQLClient(
  `${process.env.NEXT_PUBLIC_DIRECTUS_FRONTEND_URL}/graphql` || ""
);
frontendClient.setHeader(
  "authorization",
  `Bearer ${process.env.API_KEY || ""}`
);
export const runtime = "experimental-edge";

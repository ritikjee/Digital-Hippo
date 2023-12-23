import dotenv from "dotenv";
import path from "path";
import payload from "payload";
import type { InitOptions } from "payload/config";

dotenv.config({
  path: path.resolve(__dirname, "../.env"),
});

interface Args {
  initOptions?: Partial<InitOptions>;
}

let cached = (global as any).payload;

if (!cached) {
  cached = (global as any).payload = {
    client: null,
    promise: null,
  };
}

export const getPayloadClient = async ({ initOptions }: Args = {}) => {
  console.log("working till here");
  if (!process.env.PAYLOAD_SECRET_KEY) {
    throw new Error("PAYLOAD_SECRET_KEY is not defined in .env file");
  }
  console.log("hello");
  if (cached.client) {
    return cached.client;
  }
  console.log("hello");
  if (!cached.promise) {
    cached.promise = payload.init({
      secret: process.env.PAYLOAD_SECRET_KEY,
      local: initOptions?.express ? false : true,
      ...(initOptions || {}),
    });
  }
  console.log("hello");

  try {
    cached.client = await cached.promise;
    console.log("hi there");
  } catch (error: unknown) {
    cached.promise = null;
    throw error;
  }

  return cached.client;
};

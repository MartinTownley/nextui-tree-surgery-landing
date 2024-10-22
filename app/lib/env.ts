import { cleanEnv, str } from "envalid";

// validating environment variables

const validEnv = cleanEnv(process.env, {
  IMGUR_CLIENT_ID: str(),
});

// console.log("IMGUR_CLIENT_ID:", validEnv.IMGUR_CLIENT_ID);

export default validEnv;

import { cleanEnv, str } from "envalid";

// validating environment variables

const validEnv = cleanEnv(process.env, {
  PEXELS_API_KEY: str(),
  IMGUR_CLIENT_ID: str(),
});

export default validEnv;

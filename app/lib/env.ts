import { cleanEnv, str } from "envalid";

// validating environment variables

const validEnv = cleanEnv(process.env, {
  IMGUR_CLIENT_ID: str(),
});

export default validEnv;

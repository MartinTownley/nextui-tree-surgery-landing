import { z as zod } from "zod";

const envSchema = zod.object({
  AWS_ACCESS_KEY_ID: zod.string().nonempty(),
  AWS_SECRET_ACCESS_KEY: zod.string().nonempty(),
  AWS_BUCKET_NAME: zod.string().nonempty(),
  AWS_BUCKET_REGION: zod.string().nonempty(),
});

export const zodEnv = envSchema.parse(process.env);

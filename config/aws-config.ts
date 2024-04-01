import AWS from "aws-sdk";
import { zodEnv } from "../app/lib/envSchema";

AWS.config.update({
  region: "eu-north-1",
  accessKeyId: zodEnv.AWS_ACCESS_KEY_ID,
  secretAccessKey: zodEnv.AWS_SECRET_ACCESS_KEY,
});

const s3 = new AWS.S3({
  apiVersion: "2006-03-01",
  params: { Bucket: zodEnv.AWS_BUCKET_NAME },
});

export { s3 };

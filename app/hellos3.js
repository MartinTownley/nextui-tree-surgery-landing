import { ListBucketsCommand, S3Client } from "@aws-sdk/client-s3";

import dotenv from "dotenv";

const TEST_ENV_VAR = process.env.TEST_ENV_VAR;
const {
  AWS_BUCKET_NAME,
  AWS_BUCKET_REGION,
  AWS_ACCESS_KEY_ID,
  AWS_SECRET_ACCESS_KEY,
} = process.env;

console.log("TEST_ENV_VAR:", TEST_ENV_VAR);
console.log("awsBucketName:", AWS_BUCKET_NAME);
console.log("awsBucketRegion:", AWS_BUCKET_REGION);
console.log("awsAccessKeyId:", AWS_ACCESS_KEY_ID);
console.log(
  "awsSecretAccessKey:",
  AWS_SECRET_ACCESS_KEY ? "******" : "Not Provided"
);

const s3 = new S3Client({
  credentials: {
    accessKeyId: AWS_ACCESS_KEY_ID,
    secretAccessKey: AWS_SECRET_ACCESS_KEY,
  },
  region: AWS_BUCKET_REGION,
});

export const hellos3 = async () => {
  const command = new ListBucketsCommand({});

  const { Buckets } = await s3.send(command);
  console.log("Buckets: ");
  console.log(Buckets?.map((bucket) => bucket.Name).join("\n")); // Added nullish coalescing operator
  return Buckets;
};

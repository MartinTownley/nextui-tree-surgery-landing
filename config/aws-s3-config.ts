"use server";
import { ListBucketsCommand, S3Client } from "@aws-sdk/client-s3";

const bucketRegion = process.env.AWS_BUCKET_REGION;
const s3 = new S3Client({ region: bucketRegion });

export async function listBuckets() {
  const command = new ListBucketsCommand({});

  try {
    const response = await s3.send(command);
    console.log("Buckets:", response.Buckets);
    return response.Buckets;
  } catch (error) {
    console.error(error);
  }
}

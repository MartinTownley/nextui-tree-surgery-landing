import { s3 } from "../../config/aws-config";

export default async function fetchImages() {
  try {
    const data = await s3
      .listObjects({
        Bucket: "sparrowhawk-bucket",
        Prefix: "album1/",
      })
      .promise();

    // listObjects includes the prefix itself as an object in the response, which will not point to an image. So use filter to deal with this.
    const imageUrls =
      data.Contents?.filter((image) => image.Key !== "album1/").map((image) => {
        return `https://sparrowhawk-bucket.s3.eu-north-1.amazonaws.com/${image.Key}`;
      }) || [];

    return imageUrls;
  } catch (err) {
    console.log("Error:", err);
  }
}

import { s3 } from "../../config/aws-config";
import probe from "probe-image-size";

export default async function fetchImages() {
  try {
    const data = await s3
      .listObjects({
        Bucket: "sparrowhawk-bucket",
        Prefix: "album1/",
      })
      .promise();

    const images =
      data.Contents?.filter((image) => image.Key !== "album1/").map(
        async (image) => {
          try {
            const imageUrl = `https://sparrowhawk-bucket.s3.eu-north-1.amazonaws.com/${image.Key}`;
            const dimensions = await probe(imageUrl);
            return {
              url: imageUrl,
              width: dimensions.width,
              height: dimensions.height,
            };
          } catch (err) {
            console.error(`Failed to probe image ${image.Key}:`, err);
            throw err;
          }
        }
      ) || [];

    return Promise.all(images);
  } catch (err) {
    console.log("Error:", err);
    throw new Error("Failed to fetch images");
  }
}

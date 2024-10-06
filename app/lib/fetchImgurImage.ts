import { ImgurImage } from "@/models/imgur-schemas";
import { ImgurImageSchema } from "@/models/imgur-schemas";
import validEnv from "./env";

export default async function fetchImgurImage(
  url: string
): Promise<ImgurImage | undefined> {
  try {
    const res = await fetch(url, {
      headers: {
        Authorization: validEnv.IMGUR_CLIENT_ID,
      },
    });

    if (!res.ok) throw new Error("Fetch Image error!\n");

    const responseJson = await res.json();

    const imageResult: ImgurImage = responseJson.data;

    const parsedImageResult = ImgurImageSchema.parse(imageResult);

    if (!parsedImageResult || !parsedImageResult.id)
      return Promise.resolve(undefined);

    return parsedImageResult;
  } catch (e) {
    if (e instanceof Error) {
      console.error("Fetch Imgur Image Error:", e.stack);
    }
  }
}

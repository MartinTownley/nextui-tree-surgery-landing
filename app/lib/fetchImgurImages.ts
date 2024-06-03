import { ImgurAlbumSchema, ImgurImage, ImgurAlbum } from "@/models/Imgur";
import validEnv from "./env";

export async function fetchImgurImages(
  url: string
): Promise<ImgurAlbum | undefined> {
  try {
    const res = await fetch(url, {
      headers: {
        Authorization: validEnv.IMGUR_CLIENT_ID,
      },
    });

    if (!res.ok) throw new Error("Fetch Album error!\n");

    const albumResult: ImgurAlbum = await res.json();

    // console.log("RESULTS:", albumResult);

    const parsedAlbumResult = ImgurAlbumSchema.parse(albumResult);

    if (parsedAlbumResult.data.length === 0) return undefined;

    return parsedAlbumResult;
  } catch (e) {
    if (e instanceof Error) {
      console.error("Fetch Imgur Images Error:", e.stack);
    }
  }
}

import { ImgurAlbumSchema, ImgurImage, ImgurAlbum } from "@/models/Imgur-image";
import validEnv from "./env";

export default async function fetchImgurAlbum(
  url: string
): Promise<ImgurAlbum | undefined> {
  // For public read-only and anonymous resources, such as getting image info, looking up user comments, etc. all you need to do is send an authorization header with your client_id in your requests
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

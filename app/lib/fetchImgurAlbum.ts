import { ImgurAlbumSchema, ImgurAlbum } from "@/models/imgur-schemas";
import validEnv from "./env";

export default async function fetchImgurAlbum(
  url: string
): Promise<ImgurAlbum | undefined> {
  // For public read-only and anonymous resources, such as getting image info, looking up user comments, etc. all you need to do is send an authorization header with your client_id in your requests
  try {
    const clientId = validEnv.IMGUR_CLIENT_ID;
    if (!clientId) {
      throw new Error("IMGUR_CLIENT_ID not found in env");
    }
    console.log(
      `Fetching album with url: ${url} with Client-ID: ${validEnv.IMGUR_CLIENT_ID}`
    );
    const res = await fetch(url, {
      headers: {
        Authorization: `Client-ID ${clientId}`,
      },
    });

    if (!res.ok) {
      console.error(`Fetch error: ${res.statusText}`);
      throw new Error("Fetch Album error!\n");
    }

    const albumResult: ImgurAlbum = await res.json();

    // console.log("RESULTS:", albumResult);

    const parsedAlbumResult = ImgurAlbumSchema.parse(albumResult);

    if (parsedAlbumResult.data.length === 0) return undefined;

    return parsedAlbumResult;
  } catch (e) {
    if (e instanceof Error) {
      console.error("Fetch Imgur Album Error:", e.stack);
    }
  }
}

import { ImgurImage } from "@/models/Images";
import { ImgurAlbum } from "@/models/Images";

import validEnv from "./env";

export async function fetchImgurImages(
  url: string
): Promise<ImgurAlbum | undefined> {
  try {
    console.log("try block");
    console.log("url in fetchImgurImages:", url);
    const res = await fetch(url, {
      headers: {
        Authorization: validEnv.IMGUR_CLIENT_ID,
      },
    });

    if (!res.ok) throw new Error("Fetch Images error!\n");

    const imagesResults: ImgurAlbum = await res.json();

    // console.log(imagesResults);

    return imagesResults;
  } catch (e) {
    if (e instanceof Error) {
      console.log("catch block");
      console.error(e.stack);
    }
  }
}

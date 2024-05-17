import type { ImagesResults } from "@/models/Images";
import { ImagesSchemaWithPhotos } from "@/models/Images";
import validEnv from "./env";

export async function fetchImages(
  url: string
): Promise<ImagesResults | undefined> {
  try {
    const res = await fetch(url, {
      headers: {
        Authorization: validEnv.PEXELS_API_KEY,
      },
    });

    if (!res.ok) throw new Error("Fetch Images errr!\n");
    const imagesResults: ImagesResults = await res.json();

    console.log(imagesResults);

    //parse the response
    const parsedImagesResults = ImagesSchemaWithPhotos.parse(imagesResults);

    if (parsedImagesResults.total_results === 0) return undefined;

    return parsedImagesResults;
  } catch (e) {
    // will show in terminal
    if (e instanceof Error) console.error(e.stack);
  }
}

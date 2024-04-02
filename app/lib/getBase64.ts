import { getPlaiceholder } from "plaiceholder";

async function getBase64(imageUrl: string) {
  try {
    const res = await fetch(imageUrl);

    if (!res.ok) {
      throw new Error(`Failed to fetch image: ${res.status} ${res.statusText}`);
    }

    const buffer = await res.arrayBuffer();

    const { base64 } = await getPlaiceholder(Buffer.from(buffer));

    return base64;
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.stack);
    }
  }
}

interface Image {
  url: string;
  width: number;
  height: number;
}

interface ImageWithBlur extends Image {
  blurredDataUrl: string;
}

export default async function addBlurredDataUrls(
  images: Image[]
): Promise<ImageWithBlur[]> {
  // Make all requests at once to avoid a waterfall of requests
  const base64Promises = images.map((image) => getBase64(image.url));
  // Resolve all requests in order
  const base64Results = await Promise.all(base64Promises);

  const photosWithBlur = images.map((image, index) => {
    return {
      ...image,
      blurredDataUrl: base64Results[index]!,
    };
  });

  return photosWithBlur;
}

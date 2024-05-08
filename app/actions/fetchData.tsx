"use server";
import fetchImages from "@/app/actions/fetchImages";
import addBlurredDataUrls from "@/app/lib/getBase64";
import { ImageWithBlur } from "@/app/lib/getBase64";

export async function fetchData(
  setPhotosWithBlur: React.Dispatch<React.SetStateAction<ImageWithBlur[]>>,
  setError: React.Dispatch<React.SetStateAction<string | null>>
) {
  const images = await fetchImages();
  if (images) {
    const photos = await addBlurredDataUrls(images);
    setPhotosWithBlur(photos);
  } else {
    setError("Failed to fetch images");
  }
}

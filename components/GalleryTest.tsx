"use client";
import { imgurClient } from "@/config/imgur-config";
import React, { useEffect, useState } from "react";

function GalleryTest() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  useEffect(() => {
    imgurClient.getImage("4B9vHd0").then((image) => {
      console.log("image:", image);
      setImageUrl(image.data.link);
    });
  }, []);

  return (
    <div>
      <h1>Bucket List:</h1>
      {imageUrl && <img src={imageUrl} alt="imgur image" />}
    </div>
  );
}

export default GalleryTest;

"use client";
import { imgurClient } from "@/config/imgur-config";
import React, { useEffect, useState, FC } from "react";
import AlbumData, { ImgurApiResponse } from "imgur";

const GalleryTest: FC = () => {
  return (
    <div>
      <h1>Images</h1>
      {/* {imageUrl && <img src={imageUrl} alt="imgur image" />} */}
    </div>
  );
};

export default GalleryTest;

"use client";

import useLightbox from "@/components/useLightbox";
import { slides } from "@/app/lightbox/data";

export default function LightboxPage() {
  const { openLightbox, renderLightbox } = useLightbox();

  return (
    <>
      <button type="button" onClick={openLightbox}>
        Open Lightbox
      </button>

      {renderLightbox({ slides })}
    </>
  );
}

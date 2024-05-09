"use client";
import { slides } from "@/app/lightbox/data";
import React from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import LightboxCompoent, {
  LightboxExternalProps,
} from "yet-another-react-lightbox";
export default function LightboxContainer() {
  const [open, setOpen] = React.useState(false);
  return (
    <div>
      <button onClick={() => setOpen(true)}> Open Lightbox</button>

      <Lightbox open={open} slides={slides} close={() => setOpen(false)} />
    </div>
  );
}

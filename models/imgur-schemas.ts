import { z as zod } from "zod";

export const ImgurImageSchema = zod.object({
  id: zod.string(),
  width: zod.number(),
  height: zod.number(),
  link: zod.string(),
});

export const ImgurAlbumSchema = zod.object({
  data: zod.array(ImgurImageSchema),
});

export type ImgurImage = zod.infer<typeof ImgurImageSchema>;
export type ImgurAlbum = zod.infer<typeof ImgurAlbumSchema>;
//----------------------------------------------

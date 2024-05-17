import { z as zod } from "zod";

// const BasicImageSchema = zod.object({
//     page: zod.number(),
//     per_page: zod.number(),
//     prev_page: zod.number().optional(),
//     next_page: zod.string().optional(),
//     total_results: zod.number(),
//   });

//   const PhotoSchema = zod.object({
//     id: zod.number(),
//     width: zod.number(),
//     height: zod.number(),
//     url: zod.string(),
//     src: zod.object({
//       large: zod.string(),
//     }),
//     alt: zod.string(),
//     blurredDataUrl: zod.string().optional(),
//   });

const ImgurImageSchema = zod.object({
  id: zod.string(),
  width: zod.number(),
  height: zod.number(),
  link: zod.string(),
});

const ImguarAlbumSchema = zod.object({
  id: zod.string(),
  title: zod.string().optional(),
  images_count: zod.number(),
  data: zod.array(ImgurImageSchema),
});

export type ImgurImage = zod.infer<typeof ImgurImageSchema>;
export type ImgurAlbum = zod.infer<typeof ImguarAlbumSchema>;
//----------------------------------------------

// export const ImagesSchemaWithPhotos = BasicImageSchema.extend({
//     photos: zod.array(PhotoSchema),
//   });

//   export type Photo = zod.infer<typeof PhotoSchema>;

//   export type ImagesResults = zod.infer<typeof ImagesSchemaWithPhotos>;

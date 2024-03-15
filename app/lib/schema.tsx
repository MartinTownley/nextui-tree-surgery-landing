import { z as zod } from "zod";

export const formDataSchema = zod.object({
  name: zod.string().min(1, "Name is required"),
  email: zod.string().email(),
  message: zod
    .string()
    .min(
      20,
      "Please give us some more detail so that we can better answer your query"
    ),
});

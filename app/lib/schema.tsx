import { z as zod } from "zod";

export const formDataSchema = zod.object({
  firstName: zod.string().trim().min(1, {
    message: "First Name is required.",
  }),
  email: zod.string().trim().email({
    message: "Invalid email address.",
  }),
  message: zod.string().min(20, {
    message: "Message must be at least 20 characters",
  }),
});

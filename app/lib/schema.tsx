import { z as zod } from "zod";

export const formDataSchema = zod.object({
  firstName: zod.string().trim().min(1, {
    message: "First Name is required.",
  }),
  lastName: zod.string().trim().optional(),
  email: zod.string().trim().email({
    message: "Invalid email address.",
  }),
  message: zod.string().min(20, {
    message: "Message must be at least 20 characters",
  }),
});

export const contactFormSchema = zod.object({
  firstName: zod.string().trim().min(1, "First Name is required."),
  secondName: zod.string().trim().optional(),
  email: zod.string().email({ message: "Invalid email address." }),
  message: zod.string().min(20, "Message must be at least 20 characters"),
});

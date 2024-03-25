import { z as zod } from "zod";

export const contactFormSchema = zod.object({
  name: zod.string().trim().min(1, "Name is required."),

  email: zod.string().email({ message: "Invalid email address." }),
  message: zod.string().min(20, "Message must be at least 20 characters"),
});

export const defaultFormValues = {
  name: "DefaultName",
  email: "default@email.com",
  message: "This is a default message",
};

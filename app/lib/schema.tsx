import { z as zod } from "zod";

export const contactFormSchema = zod.object({
  name: zod.string().trim().min(1, "Name is required."),

  email: zod.string().email({ message: "Invalid email address." }),
  message: zod.string().min(20, "Message must be at least 20 characters."),
  shouldSendCopy: zod.boolean(),
});

export const defaultFormValues = {
  name: "default name",
  email: "default@email.com",
  message: "this is a default message of the correct minimum length",
  shouldSendCopy: false,
};

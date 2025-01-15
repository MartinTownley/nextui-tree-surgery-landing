import { z as zod } from "zod";

export const contactFormSchema = zod.object({
  senderName: zod.string().trim().min(1, "Name is required."),

  senderEmailAddress: zod.string().email({ message: "Invalid email address." }),
  senderMessage: zod
    .string()
    .min(30, "Message must be at least 30 characters."),
  shouldSendCopy: zod.boolean(),
});

export const defaultFormValues = {
  // senderName: "default name",
  // senderEmailAddress: "default@email.com",
  // senderMessage: "this is a default message of the correct minimum length",
  shouldSendCopy: false,
};

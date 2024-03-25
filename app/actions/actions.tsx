"use server";

import nodemailer from "nodemailer";
import { revalidatePath } from "next/cache";
import { z as zod } from "zod";
import { contactFormSchema } from "@/app/lib/schema";

const { SMTP_SENDER, SMTP_RECIPIENT, SMTP_PASSWORD, SMTP_BAD_PASSWORD } =
  process.env;

type FieldInputs = zod.infer<typeof contactFormSchema>;

export type FormState = {
  message: string;
};

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: SMTP_SENDER,
    pass: SMTP_PASSWORD,
  },
});

const badTransporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: SMTP_SENDER,
    pass: SMTP_BAD_PASSWORD,
  },
});

export async function sendMessage(data: FieldInputs) {
  const parsedData = contactFormSchema.safeParse(data);

  // if (!parsedData.success) {
  //   return { success: false, error: parsedData.error.format() };
  // }

  const mailOptions: Object = {
    from: SMTP_SENDER,
    to: SMTP_RECIPIENT,
    subject: "New Inquiry from Sparrowhawk Trees contact form",
    text: `You have a new message from ${data.name}:
  
      Email: ${data.email}
      
      Message:
      ${data.message}
        `,
  };

  return transporter
    .sendMail(mailOptions)
    .then((result) => {
      return { success: true, data: result.response };
    })
    .catch((err) => {
      console.log("transporter error");
      // What should I put here?
      return { success: false, error: err };
    });
}

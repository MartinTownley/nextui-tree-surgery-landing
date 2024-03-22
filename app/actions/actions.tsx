"use server";

import nodemailer from "nodemailer";
import { revalidatePath } from "next/cache";
import { z as zod } from "zod";
import { formDataSchema } from "@/app/lib/schema";

const { SMTP_SENDER, SMTP_RECIPIENT, SMTP_PASSWORD } = process.env;

type FieldInputs = zod.infer<typeof formDataSchema>;

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

export async function sendMessage(data: FieldInputs) {
  // safely parse with zod
  // console.log("data:", data);
  const parsedData = formDataSchema.safeParse(data);
  // console.log("parsedData:", parsedData);

  // if (!parsedData.success) {
  //   return { success: false, error: parsedData.error.format() };
  // }

  const mailOptions: Object = {
    from: SMTP_SENDER,
    to: SMTP_RECIPIENT,
    subject: "New Inquiry from Sparrowhawk Trees contact form",
    text: `You have a new message from ${data.firstName}:
  
      Email: ${data.email}
      
      Message:
      ${data.message}
        `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    // console.log("message sent: %s:", info.response);
    return { success: true, data: info };
  } catch (err) {
    // console.log("message not sent", err);
    return { success: false, error: err };
  }
}

export async function sendEmail(data: FieldInputs) {
  console.log("onsubmitAction", data);

  const result = formDataSchema.safeParse(data);

  if (!result.success) {
    return { success: false, error: result.error.format() };
  }

  const info = await transporter.sendMail({
    from: SMTP_SENDER,
    to: SMTP_RECIPIENT,
    subject: "New Inquiry from Sparrowhawk Trees contact form",
    text: `You have a new message from ${data.firstName}:

    Email: ${data.email}
    
    Message:
    ${data.message}
      `,
  });

  console.log("Message sent: %s", info.messageId);

  return { success: true, data: result.data };
}

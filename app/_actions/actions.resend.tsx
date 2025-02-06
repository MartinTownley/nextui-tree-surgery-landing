"use server";
import { Resend } from "resend";
import { contactFormSchema } from "@/app/lib/schema";
import { z as zod } from "zod";

type FieldInputs = zod.infer<typeof contactFormSchema>;

const resendAPI = process.env.RESEND_API_KEY as string;

const resend = new Resend(resendAPI);

if (!process.env.RESEND_SENDER) {
  throw new Error("RESEND_SENDER environment variable is not set");
}

export async function sendMessage(data: FieldInputs) {
  const parsedData = contactFormSchema.safeParse(data);

  if (process.env.NODE_ENV === "development") {
    console.log("development mode");
  } else {
    console.log("production mode");
  }

  try {
    const response = await resend.emails.send({
      from: process.env.RESEND_SENDER as string,

      to: process.env.RESEND_RECIPIENT as string,
      subject: "New Inquiry from Sparrowhawk Trees contact form",
      text: `You have a new message from ${data.senderName}:
  
      Email: ${data.senderEmailAddress}
      
      Message:
      ${data.senderMessage}
        `,
    });

    return { success: true, data: response };
  } catch (err) {
    console.log("Resend error:", err);
    return { success: false, error: err };
  }
}

export async function sendCopy(data: FieldInputs) {
  try {
    const response = await resend.emails.send({
      from: process.env.RESEND_SENDER as string,
      to: [data.senderEmailAddress],
      subject: "Copy of your message to Sparrowhawk Trees",
      text: `You sent the following message to Sparrowhawk Trees:

      Message:
      ${data.senderMessage}`,
    });

    return { success: true, data: response };
  } catch (err) {
    console.log("Resend sendCopy error:", err);
    return { success: false, error: err };
  }
}

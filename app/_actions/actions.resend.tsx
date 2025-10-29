"use server";
import { Resend } from "resend";
import { contactFormSchema } from "@/app/lib/schema";
import { z as zod } from "zod";

type FieldInputs = zod.infer<typeof contactFormSchema>;

function getEmailConfig() {
  const resendApiKey = process.env.RESEND_API_KEY;
  const resendSender = process.env.RESEND_SENDER;
  const resendRecipient = process.env.RESEND_RECIPIENT;

  if (!resendApiKey || !resendSender || !resendRecipient) {
    throw new Error(
      "Missing required email environment variables. Check: RESEND_API_KEY, RESEND_SENDER, RESEND_RECIPIENT."
    );
  }

  return {
    resendApiKey,
    resendSender,
    resendRecipient,
  };
}

export async function sendMessage(data: FieldInputs) {
  // Validate all env variables
  const config = getEmailConfig();

  // Create Resend client with validated API key
  const resend = new Resend(config.resendApiKey);

  if (process.env.NODE_ENV === "development") {
    console.log("development mode");
  } else {
    console.log("production mode");
  }

  try {
    const response = await resend.emails.send({
      from: config.resendSender,

      to: config.resendRecipient,
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
  const config = getEmailConfig();
  const resend = new Resend(config.resendApiKey);

  try {
    const response = await resend.emails.send({
      from: config.resendSender,
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

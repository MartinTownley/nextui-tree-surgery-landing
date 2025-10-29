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

type ValidationResult =
  | {
      success: true;
      data: FieldInputs;
    }
  | { success: false; error: string; details: any };

function validateContactData(data: FieldInputs): ValidationResult {
  const parsedData = contactFormSchema.safeParse(data);

  if (!parsedData.success) {
    console.log("Validation error:", parsedData.error.format());
    return {
      success: false,
      error: "Invalid form data",
      details: parsedData.error.format(),
    };
  }
  return { success: true, data: parsedData.data };
}

export async function sendMessage(data: FieldInputs) {
  const validationResult = validateContactData(data);

  if (!validationResult.success) {
    return validationResult;
  }

  // Validate all env variables
  const config = getEmailConfig();

  // Create Resend client with validated API key
  const resend = new Resend(config.resendApiKey);

  if (process.env.NODE_ENV === "development") {
    console.log("Sending email in development mode");
  } else {
    console.log("production mode");
  }

  try {
    const response = await resend.emails.send({
      from: config.resendSender,

      to: config.resendRecipient,
      subject: "New Inquiry from Sparrowhawk Trees contact form",
      text: `You have a new message from ${validationResult.data.senderName}:
  
      Email: ${validationResult.data.senderEmailAddress}
      
      Message:
      ${validationResult.data.senderMessage}
        `,
    });

    return { success: true, data: response };
  } catch (err) {
    console.log("Resend error:", err);
    return { success: false, error: err };
  }
}

export async function sendCopy(data: FieldInputs) {
  const validationResult = validateContactData(data);

  if (!validationResult.success) {
    return validationResult;
  }

  const config = getEmailConfig();
  const resend = new Resend(config.resendApiKey);

  try {
    const response = await resend.emails.send({
      from: config.resendSender,
      to: [validationResult.data.senderEmailAddress],
      subject: "Copy of your message to Sparrowhawk Trees",
      text: `Thank you for contacting Sparrowhawk Trees.

This is a copy of the message you sent:

---
${validationResult.data.senderMessage}
---

We'll get back to you as soon as possible.

Please note: This email is automated. Please do not reply to this message. If you need to follow up or provide additional information, please use our contact form or email us directly.

Best regards,
The Sparrowhawk Trees Team`,
    });

    return { success: true, data: response };
  } catch (err) {
    console.log("Resend sendCopy error:", err);
    return { success: false, error: err };
  }
}

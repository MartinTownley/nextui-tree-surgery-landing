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

const transport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: SMTP_SENDER,
    pass: SMTP_PASSWORD,
  },
});

export async function sendEmail(data: FieldInputs) {
  console.log("onsubmitAction", data);

  const result = formDataSchema.safeParse(data);

  if (result.success) {
    return { success: true, data: result.data };
  }

  if (result.error) {
    return { success: false, error: result.error.format() };
  }

  //const formData = Object.fromEntries(data);
  // const parsed = formDataSchema.safeParse(formData);

  // console.log("parsed", parsed);

  // if (!parsed.success) {
  //   return {
  //     message: "Invalid form data",
  //   };
  // }

  // const mailOptions = {
  //   from: SMTP_SENDER,
  //   to: SMTP_RECIPIENT,
  //   subject: `New Inquiry from ${parsed.data.firstName} (${parsed.data.email})`,
  //   text: parsed.data.message,
  // };

  // const info = await transport.sendMail(mailOptions);

  //return { message: "success" };
}

export async function submitInquiry(prevState: any, formData: FormData) {
  console.log("formData", formData);

  const parsedData = formDataSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });
  // parsedData holds success, error and data, without throwing error.
  if (parsedData.success) {
    return { data: parsedData.data };
  }

  if (parsedData.error) {
    return { error: parsedData.error.format() };
  }
  // try {
  //   const result = FormDataSchema.safeParse({
  //     name: formData.get("name"),
  //     email: formData.get("email"),
  //     message: formData.get("message"),
  //   });

  //   if (!result.success) {
  //     return { error: result.error.format() };
  //   }

  //   const mailOptions = {
  //     from: SMTP_SENDER,
  //     to: SMTP_RECIPIENT,
  //     subject: `New Inquiry from ${result.data.name} (${result.data.email})`,
  //     text: result.data.message,
  //   };

  //   const info = await transport.sendMail(mailOptions);

  //   return { message: "success" };
  // } catch (err) {
  //   console.error("Error submitting inquiry:", err);
  //   return { error: "Failed to submit inquiry" };
  // }
}

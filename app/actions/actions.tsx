"use server";

import nodemailer from "nodemailer";
import { revalidatePath } from "next/cache";
import { z as zod } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
const { SMTP_SENDER, SMTP_RECIPIENT, SMTP_PASSWORD } = process.env;
import { formDataSchema } from "@/app/lib/schema";

const transport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: SMTP_SENDER,
    pass: SMTP_PASSWORD,
  },
});

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

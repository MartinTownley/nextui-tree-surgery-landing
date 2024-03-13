"use server";

import nodemailer from "nodemailer";

const { SMTP_EMAIL, SMTP_PASSWORD } = process.env;

const transport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: SMTP_EMAIL,
    pass: SMTP_PASSWORD,
  },
});

export async function submitInquiry(prevState: any, formData: FormData) {
  try {
    const mailOptions: Object = {
      from: SMTP_EMAIL,
      to: "martloaf.townley@gmail.com",
      subject: `New Inquiry from ${formData.get("name")}, Email: ${formData.get(
        "email"
      )}`,
      text: formData.get("message"),
    };

    const info = await transport.sendMail(mailOptions);

    return { message: "success" };
  } catch (err) {
    console.error(err);
    return { message: "err" };
  }
}

// export async function sendMessage(prevState: any, formData: FormData) {
//   console.log("FormData:", formData);
//   const name = formData.get("name") as string;

//   console.log("form name:", name);
//   // const smtpEmail = process.env.SMTP_EMAIL;

//   // const rawFormData = {
//   //   name: formData.get("name"),
//   //   email: formData.get("email"),
//   //   message: formData.get("message"),
//   // };

//   // if (smtpEmail) {
//   //   await sendMail({
//   //     from: customerEmail,
//   //     to: smtpEmail,
//   //     name: "Test Name",
//   //     subject: "Test Subject",
//   //     message: `<h1> Hello World4!</h1>`,
//   //   });
//   // } else {
//   //   console.error("SMTP_EMAIL is not defined in the environment variables.");
// }

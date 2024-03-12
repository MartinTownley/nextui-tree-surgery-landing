import nodemailer from "nodemailer";

export async function sendMail({
  from,
  to,
  name,
  subject,
  message,
}: {
  from: string;
  to: string;
  name: string;
  subject: string;
  message: string;
}) {
  //get SMTP email and password from .env file:
  const { SMTP_EMAIL, SMTP_PASSWORD } = process.env;
  console.log("SENDMAIL FUNCTION");
  //define a nodemailer transport
  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: SMTP_EMAIL,
      pass: SMTP_PASSWORD,
    },
  });

  try {
    const testResult = await transport.verify();
    console.log(testResult);
  } catch (err) {
    console.log(err);
    return;
  }

  const emailBody = `
  <h4>You have received a contact form inquiry. </h4>
  <p>Name: ${name}</p>
  <p>Email: ${from}</p>
  <p>Message: ${message}</p>`;

  try {
    const sendResult = await transport.sendMail({
      from,
      to,
      subject,
      html: emailBody,
    });
    console.log(sendResult);
  } catch (err) {
    console.log(err);
  }
}

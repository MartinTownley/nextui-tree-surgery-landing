import React from "react";
import { sendMail } from "@/app/lib/mail";
import { Button } from "@nextui-org/button";

const ContactForm = () => {
  const handleSubmit = async () => {
    "use server";
    console.log("Button clicked");
    const smtpEmail = process.env.SMTP_EMAIL;

    console.log("SMTP_EMAIL:", smtpEmail);

    if (smtpEmail) {
      await sendMail({
        to: "martinrtownley@gmail.com",
        name: "Test Name",
        subject: "Test Subject",
        body: `<h1> Hello World!</h1>`,
      });
    } else {
      console.error("SMTP_EMAIL is not defined in the environment variables.");
    }
  };
  return (
    <div>
      <form action={handleSubmit}>
        <button type="submit">Test/Send</button>
      </form>
    </div>
  );
};

export default ContactForm;

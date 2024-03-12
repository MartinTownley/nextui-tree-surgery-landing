"use server";

export async function sendMessage(prevState: any, formData: FormData) {
  console.log("FormData:", formData);
  const name = formData.get("name") as string;

  console.log("form name:", name);
  // const smtpEmail = process.env.SMTP_EMAIL;

  // const rawFormData = {
  //   name: formData.get("name"),
  //   email: formData.get("email"),
  //   message: formData.get("message"),
  // };

  // if (smtpEmail) {
  //   await sendMail({
  //     from: customerEmail,
  //     to: smtpEmail,
  //     name: "Test Name",
  //     subject: "Test Subject",
  //     message: `<h1> Hello World4!</h1>`,
  //   });
  // } else {
  //   console.error("SMTP_EMAIL is not defined in the environment variables.");
}

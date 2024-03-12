"use client";

import React from "react";
import { sendMail } from "@/app/lib/mail";
import { Button, Input, Textarea } from "@nextui-org/react";
import { SendButton } from "@/components/SendButton";
import { sendMessage } from "@/app/actions/actions";
// @ts-ignore
import { useFormState } from "react-dom";

const initialState = {
  message: null,
};

const ContactForm = () => {
  //const formAction = async (formData: FormData) => {};
  const [formState, formAction] = useFormState(sendMessage, initialState);

  return (
    <div className="container mx-auto">
      <form action={formAction} className="flex flex-col mx-auto max-w-xs">
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
          <Input type="text" label="Name" name="name" />
        </div>

        <div>
          <Input type="email" label="Email" name="email" />
        </div>

        <div>
          <Textarea
            label="Your message"
            placeholder="Enter your message"
            className="max-w-xs"
          />
        </div>
        <div>
          <SendButton />
        </div>
        {/* <button type="submit">Test/Send</button> */}
      </form>
    </div>
  );
};

export default ContactForm;

"use client";

import React from "react";
import { sendMail } from "@/app/lib/mail";
import { Button, Input, Textarea } from "@nextui-org/react";
import { SubmitButton } from "@/components/SubmitButton";
import { submitInquiry } from "@/app/actions/actions";
// @ts-ignore
import { useFormState } from "react-dom";
import { useRef } from "react";

const initialState = {
  message: null,
};

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const [formState, formAction] = useFormState(submitInquiry, initialState);

  return (
    <div className="container mx-auto mt-8">
      <form
        ref={formRef}
        action={formAction}
        className="flex flex-col mx-auto max-w-xs"
      >
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4 mb-4">
          <Input type="text" label="Name" name="name" />
        </div>

        <div className="mb-4">
          <Input type="email" label="Email" name="email" />
        </div>

        <div className="mb-4">
          <Textarea
            label="Your message"
            placeholder="Enter your message"
            className="max-w-xs"
            name="message"
          />
        </div>
        <div className="mb-4">
          <SubmitButton />
        </div>
        {/* <button type="submit">Test/Send</button> */}
      </form>
    </div>
  );
};

export default ContactForm;

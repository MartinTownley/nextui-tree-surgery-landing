"use client";

import React from "react";
import { sendMail } from "@/app/lib/mail";
import { Button, Input, Textarea } from "@nextui-org/react";
import { SubmitButton } from "@/components/SubmitButton";
import { submitInquiry } from "@/app/actions/actions";
// @ts-ignore
import { useFormState } from "react-dom";
import { useRef } from "react";
import { MdMail } from "react-icons/md";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const initialState = {
  message: null,
};

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const [state, formAction] = useFormState(submitInquiry, initialState);
  // prior to form submission, "state" will be the initial state. After form submission, "state" will be whatever you're returning from the server action.

  // destructure from state:
  const { data, error } = state;

  const nameErrorMsg = error?.name?._errors?.[0];
  const emailErrorMsg = error?.email?._errors?.[0];
  const messageErrorMsg = error?.message?._errors?.[0];

  return (
    <section className="container mx-auto mt-8 flex gap-8">
      <form
        ref={formRef}
        action={formAction}
        className="flex flex-col mx-auto max-w-xs"
      >
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4 mb-4">
          <Input
            // isRequired
            isClearable
            type="text"
            label="Name"
            name="name"
            defaultValue="TestName"
            errorMessage={nameErrorMsg}
          />
        </div>

        <div className="mb-4">
          <Input
            // isRequired
            isClearable
            type="email"
            label="Email"
            name="email"
            placeholder="name@email.com"
            defaultValue="test@mail.com"
            errorMessage={emailErrorMsg}
            isInvalid={false}
            startContent={
              <MdMail className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
            }
          />
        </div>

        <div className="mb-4">
          <Textarea
            // isRequired

            label="Your message"
            placeholder="Enter your message"
            defaultValue="This is a placeholder message. Not a real message."
            className="max-w-xs"
            name="message"
            errorMessage={messageErrorMsg}
          />
        </div>
        <div className="mb-4">
          <SubmitButton />
        </div>
        {/* <button type="submit">Test/Send</button> */}
      </form>

      <div className="flex-1 rounded-lg bg-cyan-600 p-8 text-white mx-auto overflow-y-auto">
        <pre>{JSON.stringify(state, null, 2)}</pre>
      </div>
    </section>
  );
};

export default ContactForm;

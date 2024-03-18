"use client";

import React from "react";
import { Button, Input, Textarea } from "@nextui-org/react";
import { SubmitButton } from "@/components/SubmitButton";
import { sendEmail } from "@/app/actions/actions";
// @ts-ignore
import { useFormState } from "react-dom";
import { useRef, useState } from "react";
import { MdMail } from "react-icons/md";
import { useForm, SubmitHandler } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { zodResolver } from "@hookform/resolvers/zod";
import { z as zod } from "zod";
import { formDataSchema } from "@/app/lib/schema";

const initialState = {
  message: null,
};

type FieldInputs = zod.infer<typeof formDataSchema>;

const ContactForm = () => {
  // const [state, formAction] = useFormState(onSubmitAction, initialState);
  const [data, setData] = useState<FieldInputs>();

  const form = useForm<FieldInputs>({
    resolver: zodResolver(formDataSchema),
    defaultValues: {
      firstName: "DefaultName",
      email: "default@email.com",
      message: "This is a default message",
    },
    mode: "onChange",
  });

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = form;

  const formRef = useRef<HTMLFormElement>(null);

  const processForm: SubmitHandler<FieldInputs> = async (data) => {
    const result = await sendEmail(data);

    if (!result) {
      console.log("something went wrong");
      return;
    }

    if (result.error) {
      // set local error state
      console.log(result.error);
    }

    reset();
    setData(result.data);
  };

  return (
    <section className="container mx-auto mt-8 flex gap-8">
      <form
        noValidate
        ref={formRef}
        //action={formAction}
        onSubmit={handleSubmit(processForm)}
        className="flex flex-col mx-auto max-w-xs"
      >
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4 mb-4">
          <Input
            {...register("firstName")}
            isRequired
            isClearable
            type="text"
            label="First Name"
            id="firstName"
            defaultValue="DefaultName"
            errorMessage={errors.firstName && errors.firstName.message}
          />
        </div>
        <div className="mb-4">
          <Input
            {...register("email")}
            isRequired
            isClearable
            type="email"
            label="Email"
            id="email"
            placeholder="name@email.com"
            defaultValue="default@mail.com"
            errorMessage={errors.email && errors.email.message}
            //errorMessage={errors.email?.message}
            // isInvalid={false}
            startContent={
              <MdMail className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
            }
          />
        </div>
        <div className="mb-4">
          <Textarea
            {...register("message")}
            isRequired
            label="Your message"
            placeholder="Enter your message"
            defaultValue="This is a default message. Not a real message."
            className="max-w-xs"
            id="message"
            errorMessage={errors.message && errors.message.message}
          />
        </div>
        <div className="mb-4">
          <SubmitButton />
        </div>
      </form>

      <DevTool control={control} />
      <div className="flex-1 rounded-lg bg-cyan-600 p-8 text-white mx-auto overflow-y-auto">
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </section>
  );
};

export default ContactForm;

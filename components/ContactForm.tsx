"use client";

import React from "react";
import { Button, Input, Textarea } from "@nextui-org/react";
import { SubmitButton } from "@/components/SubmitButton";
import { submitInquiry } from "@/app/actions/actions";
// @ts-ignore
import { useFormState } from "react-dom";
import { useRef } from "react";
import { MdMail } from "react-icons/md";
import { useForm, SubmitHandler } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { zodResolver } from "@hookform/resolvers/zod";
import { z as zod } from "zod";
import { formDataSchema } from "@/app/lib/schema";

const initialState = {
  message: null,
};

type FormFields = zod.infer<typeof formDataSchema>;

//type FormSchema = zod.output<typeof formDataSchema>;

const ContactForm = () => {
  const form = useForm<FormFields>();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormFields>({
    defaultValues: {
      firstName: "DefaultName",
      email: "default@email.com",
      message: "This is a default message",
    },
    resolver: zodResolver(formDataSchema),
  });

  //const { register, control, handleSubmit } = form;

  const myOnSubmit: SubmitHandler<FormFields> = (data: FormFields) => {
    console.log("form submitted", data);
  };

  //const formRef = useRef<HTMLFormElement>(null);

  //const [state, formAction] = useFormState(submitInquiry, initialState);
  // prior to form submission, "state" will be the initial state. After form submission, "state" will be whatever you're returning from the server action.

  // destructure from state:
  // const { data, error } = state;

  //const nameErrorMsg = error?.name?._errors;
  //const emailErrorMsg = error?.email?._errors;
  //const messageErrorMsg = error?.message?._errors;

  return (
    <section className="container mx-auto mt-8 flex gap-8">
      <form
        noValidate
        onSubmit={handleSubmit(myOnSubmit)}
        //ref={formRef}
        //action={formAction}
        className="flex flex-col mx-auto max-w-xs"
      >
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4 mb-4">
          <Input
            {...register("firstName")}
            // isRequired
            isClearable
            type="text"
            label="First Name"
            id="firstName"
            // defaultValue=
            errorMessage={errors.firstName && errors.firstName.message}
          />
          {/* {errors.firstName && (
            <div className="text-red-500">{errors.firstName.message}</div>
          )} */}
        </div>
        <div className="mb-4">
          <Input
            {...register("email")}
            // isRequired
            isClearable
            type="email"
            label="Email"
            id="email"
            placeholder="name@email.com"
            //defaultValue="test@mail.com"
            errorMessage={errors.email && errors.email.message}
            // isInvalid={false}
            startContent={
              <MdMail className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
            }
          />
        </div>
        <div className="mb-4">
          <Textarea
            {...register("message")}
            // isRequired
            label="Your message"
            placeholder="Enter your message"
            //defaultValue="This is a placeholder message. Not a real message."
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
      {/* <div className="flex-1 rounded-lg bg-cyan-600 p-8 text-white mx-auto overflow-y-auto">
        <pre>{JSON.stringify(state, null, 2)}</pre>
      </div> */}
    </section>
  );
};

export default ContactForm;

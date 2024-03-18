"use client";

import React, { useEffect, useRef, useState } from "react";
import { Button, Input, Textarea } from "@nextui-org/react";
import { SubmitButton } from "@/components/SubmitButton";
import { sendEmail } from "@/app/actions/actions";
// @ts-ignore
import { useFormState } from "react-dom";
import { MdMail } from "react-icons/md";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
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
  const [useDefaults, setUseDefaults] = useState(false);

  const form = useForm<FieldInputs>({
    resolver: zodResolver(formDataSchema),
    defaultValues: useDefaults
      ? {
          firstName: "DefaultName",
          lastName: "DefaultLastName",
          email: "default@email.com",
          message: "This is a default message",
        }
      : {},
    mode: "onTouched",
  });

  const {
    register,
    control,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting, isDirty, isSubmitSuccessful },
  } = form;

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      });
    }
  }),
    [isSubmitSuccessful, reset];

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

    //setData(result.data);
  };

  return (
    <section className="container mx-auto mt-8 flex gap-8">
      <form
        noValidate
        ref={formRef}
        //action={formAction}
        onSubmit={handleSubmit(processForm)}
        className="flex flex-col mx-auto max-w-lg"
      >
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4 mb-4">
          <div className="flex w-full  gap-4">
            <Controller
              control={control}
              name="firstName"
              render={({ field }) => (
                <Input
                  {...field}
                  isRequired
                  isClearable
                  onClear={() => field.onChange("")}
                  type="text"
                  label="First Name"
                  id="firstName"
                  placeholder="Enter your first name here"
                  errorMessage={errors.firstName && errors.firstName.message}
                />
              )}
            />
            <Controller
              control={control}
              name="lastName"
              render={({ field }) => (
                <Input
                  {...field}
                  // isRequired
                  isClearable
                  onClear={() => field.onChange("")}
                  type="text"
                  label="Last Name"
                  id="lastName"
                  placeholder="Enter your last name here"
                  errorMessage={errors.lastName && errors.lastName.message}
                />
              )}
            />
          </div>
        </div>
        <div className="mb-4">
          <Controller
            control={control}
            name="email"
            defaultValue=""
            render={({ field }) => (
              <Input
                {...field}
                isRequired
                isClearable
                onClear={() => field.onChange("")}
                type="email"
                label="Email"
                id="email"
                placeholder="name@email.com"
                errorMessage={errors.email && errors.email.message}
                //errorMessage={errors.email?.message}
                // isInvalid={false}
                startContent={
                  <MdMail className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                }
              />
            )}
          />
        </div>
        <div className="mb-4">
          <Controller
            control={control}
            name="message"
            render={({ field }) => (
              <Textarea
                {...field}
                isRequired
                label="Your message"
                placeholder="Enter your message here"
                id="message"
                errorMessage={errors.message && errors.message.message}
              />
            )}
          />
        </div>
        <div className="mb-4">
          <SubmitButton formState={form.formState} />
        </div>
      </form>

      <DevTool control={control} />
      <div className="flex-1 rounded-lg bg-cyan-600 p-8 text-white mx-auto overflow-y-auto">
        <pre>{JSON.stringify(data, null, 2)}</pre>
        <p>Hello</p>
      </div>
    </section>
  );
};

export default ContactForm;

"use client";

import React, { useEffect, useRef, useState } from "react";
import { Button, Input, Textarea } from "@nextui-org/react";
import { SubmitButton } from "@/components/SubmitButton";
import { sendEmail, sendMessage } from "@/app/actions/actions";
// @ts-ignore
import { useFormState } from "react-dom";
import { MdMail } from "react-icons/md";
import {
  useForm,
  SubmitHandler,
  FieldErrors,
  Controller,
} from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { zodResolver } from "@hookform/resolvers/zod";
import { z as zod } from "zod";
import { formDataSchema } from "@/app/lib/schema";
import { Toaster, toast } from "sonner";
import { error } from "console";

const initialState = {
  message: null,
};

type FieldInputs = zod.infer<typeof formDataSchema>;

const ContactForm = () => {
  const [formData, setFormData] = useState<FieldInputs>();
  const [useDefaults, setUseDefaults] = useState(true);
  const [serverSuccess, setServerSuccess] = useState(false);
  const toastDuration = 4000;

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

  // useEffect(() => {
  //   let timeoutId: NodeJS.Timeout;

  //   if (isSubmitSuccessful) {
  //     timeoutId = setTimeout(() => {
  //       reset({
  //         firstName: "",
  //         lastName: "",
  //         email: "",
  //         message: "",
  //       });
  //     }, toastDuration);

  //     const toastMsg = `Message sent successfully to ${formData?.email ?? ""}!`;

  //     toast.success(toastMsg, { duration: toastDuration });
  //   }

  //   return () => {
  //     if (timeoutId) {
  //       clearTimeout(timeoutId);
  //     }
  //   };
  // }),
  //   [isSubmitSuccessful, reset, formData];

  const formRef = useRef<HTMLFormElement>(null);

  const onSubmitHandler: SubmitHandler<FieldInputs> = async (data) => {
    try {
      const response = await sendMessage(data);

      if (!response.success) {
        toast.error(`Error: ${response.error}`, { duration: toastDuration });
        setServerSuccess(false);
        return;
      }

      // If successful, reset the form
      reset({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      });

      const toastMsg = `Message sent successfully to ${data.email}!`;
      toast.success(toastMsg, { duration: toastDuration });
      setServerSuccess(true);

      // setFormData(data);
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error(`Error: ${error}`, { duration: toastDuration });
      setServerSuccess(false);
    }
  };

  const onErrorHandler = (errors: FieldErrors<FieldInputs>) => {
    console.log("Error submitting form:", errors);
  };

  return (
    <section className="container mx-auto mt-8 flex gap-8">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-lg">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
          Contact Us
        </h2>
        <p className="mb-6 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
          Please send us a message using the form below, and we will respond as
          soon as we can!
        </p>
        <form
          noValidate
          // ref={formRef}
          //action={formAction}
          onSubmit={handleSubmit(onSubmitHandler, onErrorHandler)}
          className="flex flex-col mx-auto"
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
          <div className="flex justify-between mb-4">
            <SubmitButton formState={form.formState} />
            <Toaster richColors position="top-center" />
          </div>
        </form>
      </div>

      <DevTool control={control} />
      {/* <div className="flex-1 rounded-lg bg-cyan-600 p-8 text-white mx-auto overflow-y-auto">
        <pre>{JSON.stringify(formData, null, 2)}</pre>
        <p>Hello</p>
      </div> */}
    </section>
  );
};

export default ContactForm;

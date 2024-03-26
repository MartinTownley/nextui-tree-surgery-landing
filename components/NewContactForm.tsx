"use client";

import { sendMessage, sendCopy } from "@/app/actions/actions";
import { contactFormSchema, defaultFormValues } from "@/app/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { resolveMotionValue } from "framer-motion";
import React, { useEffect, useState } from "react";
import { FieldValues, useForm, FieldErrors, Controller } from "react-hook-form";
import { z as zod } from "zod";
import { toast } from "sonner";
import { DevTool } from "@hookform/devtools";
import { SentMessageInfo } from "nodemailer";
import { Button, Input, Textarea, Checkbox } from "@nextui-org/react";
type TContactFormSchema = zod.infer<typeof contactFormSchema>;

export default function NewContactForm() {
  // const form = useForm();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful, isValid },
    reset,
    control,
    watch,
  } = useForm<TContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: defaultFormValues,
    mode: "onTouched",
  });

  const onSubmitHandler = async (data: TContactFormSchema) => {
    const sendOperations = [sendMessage(data)];

    if (data.shouldSendCopy) {
      sendOperations.push(sendCopy(data));
    }

    Promise.all(sendOperations)
      .then((results) => {
        const allSuccessful = results.every((result) => result.success);
        if (allSuccessful) {
          toast.success("Message sent successfully", { duration: 4000 });
          reset({ name: "", email: "", message: "", shouldSendCopy: false });
        } else {
          toast.error("Error: Message not sent", { duration: 4000 });
        }
      })
      .catch((err) => {
        toast.error(`Error: ${err}`, { duration: 4000 });
      });

    return new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
  };

  return (
    <section
      id="contactForm"
      className="mx-auto max-w-lg px-4 py-4 sm:px-6 lg:px-8"
    >
      <header className="text-center sm:text-left">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
          Contact Us
        </h2>
        <p className="mb-6 font-light text-gray-500 dark:text-gray-400 sm:text-xl ">
          Please send us a message using the form below, and we will respond as
          soon as we can.
        </p>
        <form
          onSubmit={handleSubmit(onSubmitHandler)}
          className="space-y-6 border-t"
          noValidate
        >
          <div className="rounded-md shadow-sm space-y-4 mt-4">
            <div>
              <Controller
                name="name"
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    label="Name"
                    type="text"
                    placeholder="Enter your name here"
                    isClearable
                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                    errorMessage={errors.name?.message}
                  />
                )}
              />
            </div>
            <div>
              <Controller
                name="email"
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    label="Email"
                    type="email"
                    placeholder="Enter your email here"
                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                    errorMessage={errors.email?.message}
                  />
                )}
              />
            </div>
            <div>
              <Controller
                name="message"
                control={control}
                render={({ field }) => (
                  <Textarea
                    label="Message"
                    placeholder="Enter your message here"
                    errorMessage={errors.message?.message}
                    {...field}
                  />
                )}
              />
            </div>
            <div className="text-left">
              <Controller
                name="shouldSendCopy"
                control={control}
                render={({ field: props }) => (
                  <Checkbox
                    {...props}
                    color="secondary"
                    checked={props.value}
                    value={props.value ? "true" : "false"}
                    onChange={(e) => {
                      props.onChange(e.target.checked);
                    }}
                    size="sm"
                  >
                    Send a copy of this query to my email address
                  </Checkbox>
                )}
              />
            </div>
            <div>
              <Button
                type="submit"
                color="secondary"
                isDisabled={!isValid}
                isLoading={isSubmitting}
              >
                Submit
              </Button>
            </div>

            {/* <DevTool control={control} /> */}
          </div>
        </form>
      </header>
    </section>
  );
}

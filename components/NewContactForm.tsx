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

  useEffect(() => {
    console.log("isSubmitting:", isSubmitting);
  }, [isSubmitting]);

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
    <section className="container mx-auto mt-8 flex gap-8">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-lg">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
          Contact Us
        </h2>
        <p className="mb-6 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
          Please send us a message using the form below, and we will respond as
          soon as we can
        </p>
        <form
          onSubmit={handleSubmit(onSubmitHandler)}
          className="flex flex-col gap-y-2"
          noValidate
        >
          <div className="flex w-full flex-wrap md:flex-nowrap gap-4 mb-4">
            <Controller
              name="name"
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  label="Name"
                  type="text"
                  placeholder="Enter your name here"
                  value={value}
                  onBlur={onBlur}
                  onChange={onChange}
                  errorMessage={errors.name?.message}
                />
              )}
            />
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
            <Controller
              name="shouldSendCopy"
              control={control}
              render={({ field: props }) => (
                <Checkbox
                  {...props}
                  checked={props.value}
                  value={props.value ? "true" : "false"}
                  onChange={(e) => {
                    props.onChange(e.target.checked);
                  }}
                >
                  Send a copy of this query to my email address
                </Checkbox>
              )}
            />
            {/* <Controller
              name="shouldSendCopy"
              control={control}
              // defaultValue={true}
              render={({ field }) => (
                <Checkbox
                  {...field}
                  onChange={(e) => {
                    field.onChange(e);
                  }}
                  value={field.value ? "true" : "false"} // Update the value type to string
                  color="secondary"
                >
                  Send a copy of my query to my email address
                </Checkbox>
              )}
            /> */}

            <Button
              type="submit"
              color="secondary"
              isDisabled={!isValid}
              isLoading={isSubmitting}
            >
              Submit
            </Button>

            {/* <DevTool control={control} /> */}
          </div>
        </form>
      </div>
    </section>
  );
}

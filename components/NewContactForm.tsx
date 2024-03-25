"use client";

import { sendMessage } from "@/app/actions/actions";
import { contactFormSchema, defaultFormValues } from "@/app/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { resolveMotionValue } from "framer-motion";
import React, { useEffect, useState } from "react";
import { FieldValues, useForm, FieldErrors, Controller } from "react-hook-form";
import { z as zod } from "zod";
import { toast } from "sonner";
import { DevTool } from "@hookform/devtools";
import { SentMessageInfo } from "nodemailer";
import { Button, Input, Textarea } from "@nextui-org/react";
import { SubmitButton } from "./SubmitButton";

type TContactFormSchema = zod.infer<typeof contactFormSchema>;

export default function NewContactForm() {
  const form = useForm();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful, isValid },
    reset,
    control,
    watch,
  } = useForm<TContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
    // defaultValues: defaultFormValues,
    // defaultValues: {},
    mode: "onTouched",
  });

  useEffect(() => {
    console.log("isSubmitting:", isSubmitting);
  }, [isSubmitting]);

  const onSubmitHandler = async (data: TContactFormSchema) => {
    sendMessage(data)
      .then((result) => {
        if (result.success) {
          toast.success("Message sent successfully", { duration: 4000 });
          reset({
            name: "",
            email: "",
            message: "",
          });
        } else {
          toast.error("Error: Message not sent", { duration: 4000 });
        }
      })
      .catch((err) => {
        toast.error(` Error: ${err}`, { duration: 4000 });
      });

    return new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
    //reset();
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmitHandler)}
        className="flex flex-col gap-y-2"
        noValidate
      >
        <Controller
          name="name"
          control={control}
          // rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              // isRequired
              label="Name"
              type="text"
              placeholder="Enter your name here"
              value={value}
              onBlur={onBlur}
              onChange={onChange}
              className="px-4 py-2 rounded"
              errorMessage={errors.name?.message}
              // validationState={errors.name ? "invalid" : "valid"}
            />
          )}
        />
        <Controller
          name="email"
          control={control}
          // rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              // isRequired
              label="Email"
              type="email"
              placeholder="Enter your email here"
              value={value}
              onBlur={onBlur}
              onChange={onChange}
              className="px-4 py-2 rounded"
              errorMessage={errors.email?.message}
            />
          )}
        />
        <Controller
          name="message"
          control={control}
          // rules={{ required: true }}
          render={({ field }) => (
            <Textarea
              // isRequired
              label="Message"
              placeholder="Enter your message here"
              className="px-4 py-2 rounded"
              errorMessage={errors.message?.message}
              {...field}
            />
          )}
        />
        <Button
          type="submit"
          color="secondary"
          isDisabled={!isValid}
          isLoading={isSubmitting}
          // isDisabled={isLoading}
          // disabled={isSubmitting}
          // className="bg-blue-500 disabled:bg-gray-500 py-2 rounded"
        >
          Submit
        </Button>

        {/* <SubmitButton formState={form.formState} /> */}
        {/* <DevTool control={control} /> */}
      </form>
    </div>
  );
}

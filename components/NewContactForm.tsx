"use client";

import { sendMessage } from "@/app/actions/actions";
import { contactFormSchema, defaultFormValues } from "@/app/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { resolveMotionValue } from "framer-motion";
import React, { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { z as zod } from "zod";
import { toast } from "sonner";
import { DevTool } from "@hookform/devtools";
import { SentMessageInfo } from "nodemailer";

type TContactFormSchema = zod.infer<typeof contactFormSchema>;

export default function NewContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: defaultFormValues,
  });

  const onSubmitHandler = async (data: TContactFormSchema) => {
    sendMessage(data)
      .then((result) => {
        if (result.success) {
          toast.success("Message sent successfully", { duration: 4000 });
          reset();
        } else {
          toast.error("Error: Message not sent", { duration: 4000 });
        }
      })
      .catch((err) => {
        toast.error(` Error: ${err}`, { duration: 4000 });
      });

    // reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmitHandler)}
      className="flex flex-col gap-y-2"
    >
      <input
        {...register("name")}
        type="text"
        placeholder="First Name"
        className="px-4 py-2 rounded"
      />
      {errors.name && (
        <p className="text-red-500">{`${errors.name.message}`}</p>
      )}

      <input
        {...register("email")}
        type="email"
        placeholder="Email"
        className="px-4 py-2 rounded"
      />
      {errors.email && (
        <p className="text-red-500">{`${errors.email.message}`}</p>
      )}

      <textarea
        {...register("message")}
        placeholder="Message"
        className="px-4 py-2 rounded"
      />
      {errors.message && (
        <p className="text-red-500">{`${errors.message.message}`}</p>
      )}
      <button
        disabled={isSubmitting}
        type="submit"
        className="bg-blue-500 disabled:bg-gray-500 py-2 rounded"
      >
        Submit
      </button>
      {/* <DevTool control={control} /> */}
    </form>
  );
}

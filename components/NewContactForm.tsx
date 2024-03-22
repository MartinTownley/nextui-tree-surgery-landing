"use client";

import { sendMessage } from "@/app/actions/actions";
import { contactFormSchema, defaultFormValues } from "@/app/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { resolveMotionValue } from "framer-motion";
import React, { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { z as zod } from "zod";
import { toast } from "sonner";

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
    // console.log(data);
    // await new Promise((resolve) => setTimeout(resolve, 1000));
    const response = await sendMessage(data);

    console.log("response:", response.data);

    // 1. the parsed data is not successful so you get success: false and the parsed data error
    if (response.success) {
      const successMsg = `Message from ${data.firstName} sent successfully`;
      toast.success(successMsg, { duration: 4000 });
    } else {
      console.log("failed");
      const errorMsg = `Error: ${response.error}`;
      toast.error(errorMsg, { duration: 4000 });
    }
    // 2. if the parsed data is successful, it attempts to sendMail, for which you either get a success: true if that works, or a success false with the error if it doesn't

    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmitHandler)}
      className="flex flex-col gap-y-2"
    >
      <input
        {...register("firstName")}
        type="text"
        placeholder="First Name"
        className="px-4 py-2 rounded"
      />
      {errors.firstName && (
        <p className="text-red-500">{`${errors.firstName.message}`}</p>
      )}
      <input
        {...register("secondName")}
        type="text"
        placeholder="Second Name"
        className="px-4 py-2 rounded"
      />
      {errors.secondName && (
        <p className="text-red-500">{`${errors.secondName.message}`}</p>
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
    </form>
  );
}

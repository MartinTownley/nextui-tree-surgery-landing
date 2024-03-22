"use client";

import { contactFormSchema } from "@/app/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { resolveMotionValue } from "framer-motion";
import React, { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { z as zod } from "zod";

type TContactFormSchema = zod.infer<typeof contactFormSchema>;

export default function NewContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmitHandler = async (data: TContactFormSchema) => {
    console.log(data);
    await new Promise((resolve) => setTimeout(resolve, 1000));
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

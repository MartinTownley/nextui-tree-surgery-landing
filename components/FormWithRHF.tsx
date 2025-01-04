"use client";

import React from "react";
import { useForm } from "react-hook-form";
import type { FieldValues } from "react-hook-form";
import { contactFormSchema } from "@/app/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { z as zod } from "zod";
type TContactFormSchema = zod.infer<typeof contactFormSchema>;

export default function FormWithRHF() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmitHandler = async (data: TContactFormSchema) => {
    // TODO: send the email.

    await new Promise((resolve) => setTimeout(resolve, 1000));

    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmitHandler)}
      className="flex flex-col gap-y-2"
    >
      <input
        {...register("name")}
        type="text"
        className="text-black"
        placeholder="Name"
      />
      {errors.name && (
        <p className="text-red-500">{`${errors.name.message}`}</p>
      )}

      <input
        {...register("email")}
        type="email"
        className="text-black"
        placeholder="Email"
      />
      {errors.email && (
        <p className="text-red-500">{`${errors.email.message}`}</p>
      )}

      <textarea
        {...register("message")}
        className="text-black"
        placeholder="Message"
      />
      {errors.message && (
        <p className="text-red-500">{`${errors.message.message}`}</p>
      )}

      <button disabled={isSubmitting} type="submit" className="bg-blue-500">
        {" "}
        Submit
      </button>
    </form>
  );
}

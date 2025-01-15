"use client";

import React from "react";
import { useForm } from "react-hook-form";
import type { FieldErrors, FieldValues } from "react-hook-form";
import { contactFormSchema } from "@/app/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { isDirty, z as zod } from "zod";
import { DevTool } from "@hookform/devtools";

type TContactFormSchema = zod.infer<typeof contactFormSchema>;

export default function FormWithRHF() {
  const contactForm = useForm<TContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
  });

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isDirty, isValid },
  } = contactForm;

  console.log("isDirty:", isDirty, "isValid:", isValid);

  // const onSubmitHandler = async (data: TContactFormSchema) => {
  //   // TODO: send the email.

  //   await new Promise((resolve) => setTimeout(resolve, 1000));

  //   reset();
  // };
  const onSubmitHandler = (data: TContactFormSchema) => {
    console.log("Form submitted", data);
  };

  const onErrorHandler = (errors: FieldErrors) => {
    console.log("Form errors:", errors);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmitHandler, onErrorHandler)}
        noValidate
        className="flex flex-col gap-y-2 text-black"
      >
        <input
          type="text"
          // className="text-black"
          className="form-input"
          placeholder="Name"
          {...register("senderName")}
        />
        {errors.senderName && (
          <p className="text-red-500">{`${errors.senderName.message}`}</p>
        )}

        <input
          type="email"
          className="form-input"
          placeholder="Email"
          {...register("senderEmailAddress")}
        />
        {errors.senderEmailAddress && (
          <p className="text-red-500">{`${errors.senderEmailAddress.message}`}</p>
        )}

        <textarea
          className="form-textarea"
          placeholder="Message"
          {...register("senderMessage")}
        />
        {errors.senderMessage && (
          <p className="text-red-500">{`${errors.senderMessage.message}`}</p>
        )}

        <input
          type="checkbox"
          className="form-checkbox"
          {...register("shouldSendCopy")}
        />

        <button disabled={!isValid} type="submit" className="bg-blue-500">
          Submit
        </button>
      </form>
      <DevTool control={control} />
    </div>
  );
}

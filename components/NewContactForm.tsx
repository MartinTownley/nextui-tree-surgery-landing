"use client";

import { sendMessage, sendCopy } from "@/app/_actions/actions";
import { contactFormSchema, defaultFormValues } from "@/app/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { resolveMotionValue } from "framer-motion";
import clsx from "clsx";
import React from "react";
import { useForm, FieldErrors, Controller } from "react-hook-form";
import { z as zod } from "zod";
import { toast } from "sonner";
import { DevTool } from "@hookform/devtools";
import { SentMessageInfo } from "nodemailer";
import { Button, Input, Textarea, Checkbox } from "@heroui/react";
import { roboto_mono } from "@/config/fonts";
type TContactFormSchema = zod.infer<typeof contactFormSchema>;

export default function NewContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful, isValid },
    reset,
    control,
    watch,
    getValues,
    setValue,
  } = useForm<TContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: defaultFormValues,
    mode: "onTouched",
  });

  const setValueHandler = (fieldName: keyof TContactFormSchema) => {
    return () => {
      setValue(fieldName, "");
    };
  };

  const onSubmitHandler = async (data: TContactFormSchema) => {
    const sendOperations = [sendMessage(data)];

    if (data.shouldSendCopy) {
      sendOperations.push(sendCopy(data));
    }

    Promise.all(sendOperations)
      .then((results) => {
        const messageResult = results[0];
        const copyResult = results[1];

        if (messageResult.success) {
          toast.success("Message sent successfully", { duration: 5000 });
        } else {
          toast.error("Error: Message not sent", { duration: 5000 });
        }

        if (data.shouldSendCopy) {
          if (copyResult.success) {
            toast.success("Copy sent successfully", { duration: 5000 });
          } else {
            toast.error("Error: Copy not sent", { duration: 5000 });
          }
        }

        if (
          messageResult.success &&
          (!data.shouldSendCopy || copyResult.success)
        ) {
          reset({
            senderName: "",
            senderEmailAddress: "",
            senderMessage: "",
            shouldSendCopy: false,
          });
        }
      })
      .catch((err) => {
        // catch any errors during exec. of the promises in sendOperations
        console.error(`Error in sendOperations promises: ${err}`);
        toast.error(`An error occurred. Pleas try again later. ${err}`, {
          duration: 4000,
        });
      });

    return new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
  };

  return (
    (<section
      id="contactForm"
      className="mx-auto max-w-lg px-4 py-8 sm:px-6 lg:px-8"
    >
      <header className="text-center sm:text-center">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
          Contact Us
        </h2>
        <div className="mb-6 px-8 sm:px-0">
          <p className="font-light text-gray-500 dark:text-gray-400 sm:text-xl">
            Please send us a message using the form below, and we will respond
            as soon as we can.
          </p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmitHandler)}
          className="space-y-6 border-t"
          noValidate
        >
          <div
            className={clsx(
              "rounded-md shadow-sm space-y-4 mt-4",
              roboto_mono.className
            )}
          >
            <div>
              <Controller
                name="senderName"
                control={control}
                render={({ field: { onChange, onBlur, value, name } }) => (
                  <Input
                    variant="underlined"
                    size="md"
                    label="Name"
                    type="text"
                    placeholder="Enter your name here"
                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                    isRequired
                    isClearable
                    isInvalid={!!errors.senderName}
                    onClear={setValueHandler(name)}
                    errorMessage={errors.senderName?.message}
                  />
                )}
              />
            </div>
            <div>
              <Controller
                name="senderEmailAddress"
                control={control}
                render={({ field: { onChange, onBlur, value, name } }) => (
                  <Input
                    variant="underlined"
                    size="md"
                    label="Email"
                    type="email"
                    placeholder="Enter your email address here"
                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                    isRequired
                    isClearable
                    isInvalid={!!errors.senderEmailAddress}
                    onClear={setValueHandler(name)}
                    errorMessage={errors.senderEmailAddress?.message}
                  />
                )}
              />
            </div>
            <div>
              <Controller
                name="senderMessage"
                control={control}
                render={({ field: { onChange, onBlur, value, name } }) => (
                  <Textarea
                    size="md"
                    variant="underlined"
                    label="Message"
                    placeholder="Enter your message here"
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                    isRequired
                    isInvalid={!!errors.senderMessage}
                    errorMessage={errors.senderMessage?.message}
                  />
                )}
              />
            </div>
            <div className="text-left">
              <Controller
                name="shouldSendCopy"
                control={control}
                render={({ field }) => (
                  // console.log("object:", { onChange, value });

                  (<Checkbox
                    {...field}
                    color="secondary"
                    checked={field.value}
                    value={field.value ? "true" : "false"}
                    onChange={(e) => field.onChange(e.target.checked)}
                    size="md"
                  >Send a copy of this query to my email address
                                      </Checkbox>)
                )}
              />
              {/* <Checkbox defaultSelected>Test</Checkbox> */}
              {/* <input type="text" onChange={handleChange} id="test-input" /> */}
            </div>
            <div>
              <Button
                type="submit"
                className="bg-custom-orange font-bold"
                // color="secondary"
                isDisabled={!isValid}
                isLoading={isSubmitting}
              >
                SUBMIT
              </Button>
            </div>

            {/* <DevTool control={control} /> */}
          </div>
        </form>
      </header>
    </section>)
  );
}

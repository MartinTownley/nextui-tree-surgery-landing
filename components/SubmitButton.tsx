"use client";
// @ts-ignore
import { useFormStatus } from "react-dom";
import { Button } from "@nextui-org/react";
import { FormState } from "react-hook-form";

interface SubmitButtonProps {
  formState: FormState<any>;
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({ formState }) => {
  const { isValid, isSubmitting, isSubmitSuccessful } = formState;

  let buttonText = "Submit";
  let buttonColor:
    | "secondary"
    | "success"
    | "default"
    | "primary"
    | "warning"
    | "danger" = "secondary";

  if (isSubmitting) {
    buttonText = "Submitting...";
  } else if (isSubmitSuccessful) {
    buttonText = "Submitted!";
    buttonColor = "success";
  }

  return (
    <Button
      type="submit"
      isDisabled={!isValid}
      color={buttonColor}
      isLoading={isSubmitting}
    >
      {buttonText}
    </Button>
  );
};

// aria-disabled={pending}
// isLoading={pending}>

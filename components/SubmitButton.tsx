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

  return (
    <Button
      type="submit"
      isDisabled={!isValid}
      color="secondary"
      isLoading={isSubmitting}
    >
      {isSubmitting ? "Submitting..." : "Submit"}
    </Button>
  );
};

// aria-disabled={pending}
// isLoading={pending}>

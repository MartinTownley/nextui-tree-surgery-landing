"use client";
// @ts-ignore
import { useFormStatus } from "react-dom";
import { Button } from "@nextui-org/react";
import { FormState } from "react-hook-form";

interface SubmitButtonProps {
  formState: FormState<any>;
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({ formState }) => {
  return (
    <Button
      type="submit"
      // isDisabled={formState.isSubmitting}
      color="secondary"
      isLoading={formState.isSubmitting}
    >
      {formState.isSubmitting ? "Submitting..." : "Submit"}
    </Button>
  );
};

// aria-disabled={pending}
// isLoading={pending}>

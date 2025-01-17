// "use client";
// @ts-ignore
import { useFormStatus } from "react-dom";
import { Button } from "@heroui/react";
import { FormState } from "react-hook-form";
import { useState, useEffect } from "react";

interface SubmitButtonProps {
  formState: FormState<any>;
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({ formState }) => {
  const { isValid, isSubmitting, isSubmitSuccessful } = formState;

  const [buttonText, setButtonText] = useState("Submit");
  const [buttonColor, setButtonColor] = useState<
    "secondary" | "success" | "default" | "primary" | "warning" | "danger"
  >("secondary");

  useEffect(() => {
    if (isSubmitting) {
      setButtonText("Submitting...");
    } else if (isSubmitSuccessful) {
      setButtonText("Submitted!");
      setButtonColor("success");

      //reset buttton after 5 seconds
      const timeoutId = setTimeout(() => {
        setButtonText("Submit");
        setButtonColor("secondary");
      }, 4000);

      // clear timeout if the component is unmounted
      return () => clearTimeout(timeoutId);
    }
  }, [isSubmitting, isSubmitSuccessful]);

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

"use client";
// @ts-ignore
import { useFormStatus } from "react-dom";
import { Button } from "@nextui-org/react";

export function SendButton() {
  const { pending } = useFormStatus();

  return (
    <Button color="primary" type="submit" aria-disabled={pending}>
      Send
    </Button>
  );
}

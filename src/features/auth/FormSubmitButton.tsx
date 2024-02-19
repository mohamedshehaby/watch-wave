import React from "react";
import { Button } from "@nextui-org/react";

import { useFormStatus } from "react-dom";

function FormSubmitButton({ children }: { children: React.ReactNode }) {
  const { pending } = useFormStatus();

  return (
    <Button
      isLoading={pending}
      type="submit"
      color="primary"
      variant="shadow"
      size="lg"
    >
      {children}
    </Button>
  );
}

export default FormSubmitButton;

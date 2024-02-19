import React from "react";
import { Input } from "@nextui-org/react";
import { useFormState } from "react-dom";
import * as actions from "@/lib/actions";
import FormSubmitButton from "@/features/auth/FormSubmitButton";

function CreateAccountForm() {
  const [formState, action] = useFormState(actions.createAccount, {
    errors: {},
  });

  return (
    <form action={action} className="flex flex-col gap-4">
      <Input
        name={"name"}
        label="Name"
        type="text"
        isInvalid={!!formState.errors.name}
        errorMessage={formState.errors.name?.join(", ")}
      />
      <Input
        label="Email"
        type="email"
        name={"email"}
        isInvalid={!!formState.errors.email}
        errorMessage={formState.errors.email?.join(", ")}
      />
      <Input
        label="Password"
        type="password"
        name={"password"}
        isInvalid={!!formState.errors.password}
        errorMessage={formState.errors.password?.join(", ")}
      />
      <p className="text-danger">{formState.errors._form}</p>
      <FormSubmitButton>Create Account</FormSubmitButton>
    </form>
  );
}

export default CreateAccountForm;

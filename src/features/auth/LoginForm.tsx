import React from "react";
import { Button, Input } from "@nextui-org/react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { signIn, signOut } from "next-auth/react";
import { paths } from "@/app/paths";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";
import { useMutation } from "@tanstack/react-query";

const LoginSchema = z.object({
  email: z.string().email({ message: "Email must be a valid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" }),
});

type LoginSchemaType = z.infer<typeof LoginSchema>;

function LoginForm() {
  const router = useRouter();

  const {
    isPending,
    data: result,
    mutate: login,
  } = useMutation({
    mutationFn: async ({ email, password }: LoginSchemaType) => {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: true,
        callbackUrl: paths.profiles(),
      });

      if (!result?.error) {
        router.push(paths.profiles());
        return {
          error: null,
        };
      } else {
        return result;
      }
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchemaType>({ resolver: zodResolver(LoginSchema) });

  const handleLogin: SubmitHandler<LoginSchemaType> = (data) => {
    void login(data);
  };

  return (
    <>
      <form
        className="flex flex-col gap-4"
        onSubmit={handleSubmit(handleLogin)}
      >
        <Input
          {...register("email")}
          label="Email"
          type="email"
          required
          isInvalid={!!errors.email}
          errorMessage={errors.email?.message}
        />
        <Input
          {...register("password")}
          label="Password"
          type="password"
          required
          isInvalid={!!errors.password}
          errorMessage={errors.password?.message}
        />

        <p className="text-danger">{result?.error}</p>

        <Button
          isLoading={isPending}
          type="submit"
          color="primary"
          variant="shadow"
          size="lg"
        >
          Login
        </Button>
      </form>

      <div className={"flex flex-col items-center gap-4 mt-8 justify-center"}>
        <Button
          onClick={() => {
            void signIn("github", {
              callbackUrl: paths.profiles(),
            });
          }}
          fullWidth
          startContent={<FaGithub size={24} />}
          variant={"flat"}
        >
          Sign in with Github
        </Button>

        <Button
          onClick={() => {
            void signIn("google", {
              callbackUrl: paths.home(),
            });
          }}
          fullWidth
          startContent={<FcGoogle size={24} />}
          variant={"flat"}
        >
          Sign in with Google
        </Button>

        <Button
          onClick={() => {
            void signOut({
              callbackUrl: paths.home(),
            });
          }}
          fullWidth
          variant={"flat"}
        >
          Sign out
        </Button>
      </div>
    </>
  );
}

export default LoginForm;

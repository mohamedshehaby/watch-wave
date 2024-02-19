"use server";

import { z } from "zod";
import db from "@/lib/db";
import bcrypt from "bcrypt";
import { paths } from "@/app/paths";
import { redirect } from "next/navigation";
import { User } from "@prisma/client";
import { signIn } from "next-auth/react";

interface CreateAccountFormState {
  errors: {
    name?: string[];
    email?: string[];
    password?: string[];
    _form?: string[];
  };
}

const createAccountSchema = z.object({
  name: z
    .string()
    .min(8, { message: "Name must be at least 8 characters long" }),
  email: z.string().email({ message: "Email must be a valid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" }),
});

export async function createAccount(
  formState: CreateAccountFormState,
  formData: FormData,
): Promise<CreateAccountFormState> {
  const { name, email, password } = Object.fromEntries(formData.entries());

  const result = createAccountSchema.safeParse({ name, email, password });

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  const existingUser: User = await db.user.findUnique({
    where: {
      email: result.data.email,
    },
  });

  if (existingUser) {
    return {
      errors: {
        _form: ["Email already exists"],
      },
    };
  }

  try {
    const hashedPassword = await bcrypt.hash(result.data.password, 10);
    await db.user.create({
      data: {
        email: result.data.email,
        name: result.data.name,
        hashedPassword,
        image: "",
        emailVerified: new Date(),
      },
    });

    await signIn("credentials", {
      email: email,
      password: password,
      redirect: false,
      callbackUrl: paths.home(),
    });
  } catch (err) {
    if (err instanceof Error) {
      return {
        errors: {
          _form: [err.message],
        },
      };
    } else {
      return {
        errors: {
          _form: ["An unknown error occurred"],
        },
      };
    }
  }

  redirect(paths.home());
}

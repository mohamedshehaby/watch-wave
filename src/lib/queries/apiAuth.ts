"use server";
import { redirect } from "next/navigation";
import { paths } from "@/app/paths";
import db from "@/lib/db";
import { User } from "@prisma/client";

import { cache } from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth/authOptions";

export const getCurrentUser = cache(async (): Promise<User | null> => {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    return null;
  }

  const currentUser: User = await db.user.findUnique({
    where: {
      email: session.user.email || "",
    },
  });

  if (!currentUser) {
    redirect(paths.auth());
  }

  return currentUser;
});

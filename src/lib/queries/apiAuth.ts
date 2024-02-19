"use server";
import { redirect } from "next/navigation";
import { paths } from "@/app/paths";
import db from "@/lib/db";
import { User } from "@prisma/client";

import { cache } from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

// export const getServerSession = async () => {
//   const req = {
//     headers: Object.fromEntries(headers() as Headers),
//     cookies: Object.fromEntries(
//       cookies()
//         .getAll()
//         .map((c) => [c.name, c.value]),
//     ),
//   };
//   const res = { getHeader() {}, setCookie() {}, setHeader() {} };
//
//   // @ts-ignore - The type used in next-auth for the req object doesn't match, but it still works
//
//   return await originalGetServerSession(req, res, authOptions);
// };

export const getCurrentUser = cache(async (): Promise<User> => {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    redirect(paths.auth());
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

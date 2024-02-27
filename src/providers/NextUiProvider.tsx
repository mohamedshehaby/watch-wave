"use client";

import { NextUIProvider } from "@nextui-org/react";
import React from "react";
import { useRouter } from "next/navigation";

export function NextUiProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return <NextUIProvider navigate={router.push}>{children}</NextUIProvider>;
}

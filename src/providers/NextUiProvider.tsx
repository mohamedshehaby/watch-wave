"use client";

import { NextUIProvider } from "@nextui-org/react";
import React from "react";

export function NextUiProvider({ children }: { children: React.ReactNode }) {
  return <NextUIProvider>{children}</NextUIProvider>;
}

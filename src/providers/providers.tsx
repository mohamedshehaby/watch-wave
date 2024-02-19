"use client";
import React from "react";
import { NextUiProvider } from "@/providers/NextUiProvider";
import { SessionProvider } from "next-auth/react";
import ReactQueryProvider from "@/providers/ReactQueryProvider";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SessionProvider>
        <ReactQueryProvider>
          <NextUiProvider>{children}</NextUiProvider>
        </ReactQueryProvider>
      </SessionProvider>
    </>
  );
}

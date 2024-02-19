"use client";
import React from "react";
import { Link as NextUiLink } from "@nextui-org/react";

function Link({
  children,
  underline,
  href,
}: {
  children: React.ReactNode;
  underline: "none" | "hover" | "always" | "active" | "focus" | undefined;
  href: string;
}) {
  return (
    <NextUiLink href={href} underline={underline}>
      {children}
    </NextUiLink>
  );
}

export default Link;

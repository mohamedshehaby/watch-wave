import React from "react";
import { cn } from "@nextui-org/react";

function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn("mx-auto max-w-screen-xl py-16 px-8 lg:px-2", className)}
    >
      {children}
    </div>
  );
}

export default Container;

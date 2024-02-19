import { Spinner } from "@nextui-org/react";

export default function Loading() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Spinner size="lg" />
    </div>
  );
}

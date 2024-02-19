"use client";
import React from "react";
import { Image } from "@nextui-org/react";
import NextImage from "next/image";
import { useRouter } from "next/navigation";

function ProfileImage() {
  const router = useRouter();

  return (
    <Image
      // onClick={() => {
      //   router.push(paths.home());
      // }}
      isBlurred
      as={NextImage}
      width={176}
      height={176}
      src={"/images/profile-blue-image.png"}
      alt={`Profile image of `}
    />
  );
}

export default ProfileImage;

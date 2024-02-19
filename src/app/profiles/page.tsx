"use client";
import React from "react";
import { useCurrentUser } from "@/hooks/useCurrentUser";

import { Image, Spinner } from "@nextui-org/react";
import NextImage from "next/image";
import { useRouter } from "next/navigation";
import { paths } from "@/app/paths";

function ProfilesPage() {
  const { isLoading, user, error } = useCurrentUser();
  const router = useRouter();

  return (
    <div className="flex items-center h-[100dvh] justify-center">
      <div className="flex flex-col ">
        {isLoading ? (
          <Spinner size="lg" />
        ) : (
          <>
            <h1 className="text-3xl md:text-6xl text-center">
              {" "}
              Who is watching?
            </h1>
            <div className="flex items-center justify-center gap-8 mt-10 ">
              <div className="group flex flex-col items-center justify-center w-full mx-auto cursor-pointer">
                <div
                  onClick={() => router.push(paths.home())}
                  className="w-44 h-44 rounded-md group-hover:scale-110 transition"
                >
                  <Image
                    isBlurred
                    as={NextImage}
                    width={176}
                    height={176}
                    src={"/images/profile-blue-image.png"}
                    alt={`Profile image of `}
                  />
                </div>
                <p className="text-center text-2xl group-hover:text-white mt-4">
                  {user?.name}
                </p>
              </div>
            </div>
          </>
        )}
      </div>
      {/*<p className="text-white text-4xl">Profiles</p>*/}
    </div>
  );
}

export default ProfilesPage;

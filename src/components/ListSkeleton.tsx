"use client";
import React from "react";
import { Card, Skeleton } from "@nextui-org/react";

function ListSkeleton({ itemsNumber = 4 }: { itemsNumber?: number }) {
  return (
    <div className="text-white flex gap-8 flex-col text-md md:text-xl lg:text-2xl font-semibold">
      <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-x-4 gap-y-4 ">
        {Array.from({ length: itemsNumber }).map((_, index) => (
          <Card key={index} className=" space-y-5 p-4" radius="lg">
            <Skeleton className="rounded-lg">
              <div className="h-24 rounded-lg bg-default-300"></div>
            </Skeleton>
            <div className="space-y-3">
              <Skeleton className="w-3/5 rounded-lg">
                <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
              </Skeleton>
              <Skeleton className="w-4/5 rounded-lg">
                <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
              </Skeleton>
              <Skeleton className="w-2/5 rounded-lg">
                <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
              </Skeleton>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default ListSkeleton;

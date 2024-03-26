"use client";
import { Pagination as NextUIPagination } from "@nextui-org/react";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

function Pagination({ total }: { total: number }) {
  const searchParams = useSearchParams();
  const query = searchParams
    .toString()
    .replace(`&page=${searchParams.get("page")}`, "");

  const [currentPage, setCurrentPage] = useState(
    searchParams.get("page") ? parseInt(searchParams.get("page")!) : 1,
  );
  const router = useRouter();

  return (
    <div className="w-full flex items-center  justify-center">
      <NextUIPagination
        classNames={{}}
        total={total >= 500 ? 500 : total}
        color="primary"
        page={currentPage}
        loop={true}
        showShadow={true}
        onChange={(page) => {
          setCurrentPage(page);
          router.push(`?${query}&page=${page}`, {
            scroll: true,
          });
        }}
        showControls={true}
      ></NextUIPagination>
    </div>
  );
}

export default Pagination;

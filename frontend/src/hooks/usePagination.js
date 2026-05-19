import { useState } from "react";

const usePagination = (
  initialPage = 1,
  limit = 10
) => {
  const [currentPage,
    setCurrentPage] =
    useState(initialPage);

  return {
    currentPage,
    setCurrentPage,
    limit,
  };
};

export default usePagination;
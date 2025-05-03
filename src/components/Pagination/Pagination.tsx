import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}
 
const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const createPageNumbers = () => {
    const pages = [];

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (currentPage > 4) pages.push("...");

      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) pages.push(i);

      if (currentPage < totalPages - 3) pages.push("...");
      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <div className="flex justify-center mt-6">
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          if (currentPage > 1) onPageChange(currentPage - 1);
        }}
        className={`flex items-center justify-center px-4 py-2 mx-1 rounded-md bg-orange-400 hover:bg-orange-500 ${
          currentPage === 1
            ? "text-gray-400 cursor-not-allowed"
            : "text-gray-700  hover:text-white"
        }`}
      >
        &#8592;
      </a>

      {createPageNumbers().map((item, index) =>
        typeof item === "number" ? (
          <a
            key={index}
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onPageChange(item);
            }}
            className={`px-4 py-2 mx-1 rounded-md ${
              currentPage === item
                ? "bg-blue-500 text-white"
                : "text-gray-700 hover:bg-blue-500 hover:text-white"
            }`}
          >
            {item}
          </a>
        ) : (
          <span key={index} className="px-3 py-2 text-gray-400">
            ...
          </span>
        )
      )}

      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          if (currentPage < totalPages) onPageChange(currentPage + 1);
        }}
        className={`flex items-center justify-center px-4 py-2 mx-1 rounded-md ${
          currentPage === totalPages
            ? "text-gray-400 cursor-not-allowed"
            : "text-gray-700 hover:bg-blue-500 hover:text-white"
        }`}
      >
        &#8594;
      </a>
    </div>
  );
};

export default Pagination;

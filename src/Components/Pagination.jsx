import React from "react";
import ButtonWithIcon from "./Inputs/Button";
import { GrPrevious, GrNext } from "react-icons/gr";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

function Pagination({ page, onChange, count }) {
  console.log(page <= 1, page, "page");
  return (
    <div>
      <ButtonWithIcon
        className={`inline-flex items-center justify-center w-8 h-8 mr-2  transition-colors duration-150 ${
          page === 1
            ? "rounded-full focus:shadow-outline hover:bg-none cursor-not-allowed"
            : " focus:shadow-outline "
        }`}
        onClick={() => {
          onChange(page - 1);
        }}
        disable={page === 1 ? true : false}
        icon={<FaArrowLeftLong size={20} className="" />}
      />

      <ButtonWithIcon
        className={`inline-flex items-center justify-center w-8 h-8 mr-2  transition-colors duration-150 ${
          page === count
            ? " focus:shadow-outline hover:bg-none cursor-not-allowed"
            : " focus:shadow-outline"
        }`}
        onClick={() => {
          onChange(page + 1);
        }}
        disable={page === count}
        icon={<FaArrowRightLong size={20} className="" />}
      />
    </div>
  );
}

export default Pagination;

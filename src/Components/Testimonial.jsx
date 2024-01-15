import React from "react";
import ButtonWithIcon from "./Inputs/Button";
import { FaQuoteRight } from "react-icons/fa";

export default function Testimonial({
  userImage,
  userName,
  description,
  role,
  index,
}) {
  return (
    <div
      className={`flex flex-col justify-center items-center mb-8 shadow-lg border-none rounded-lg ${
        index % 2 == 0
          ? " bg-transparent border border-black text-black"
          : " bg-black border text-[#D4D4D8] border-black"
      }  py-5 px-5 gap-5`}
    >
      <div className="relative">
        <img
          src={userImage}
          alt={userName}
          className="h-[7rem] w-[7rem] rounded-full border-black border-[1px] "
        />
        <div
          className={`absolute right-0 bottom-0 py-3 px-3 rounded-full ${
            index % 2 == 0 ? "bg-black text-white" : "bg-white text-black"
          }`}
        >
          <FaQuoteRight />
        </div>
      </div>

      <div className=" w-full mr-4 grid gap-3">
        <p className=" mt-2 text-center">{description}</p>
        <div className=" border-[3px]"></div>
        <h3 className="text-lg  font-bold text-center">{userName}</h3>
        <h3 className="text-lg font-bold text-center">{role}</h3>
      </div>
    </div>
  );
}

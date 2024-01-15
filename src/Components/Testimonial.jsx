import React from "react";
import ButtonWithIcon from "./Inputs/Button";

export default function Testimonial({
  userImage,
  userName,
  description,
  role,
  index,
}) {
  return (
    <div
      className={`grid items-center mb-8 ${
        index % 2 == 0 ? " flex-row" : " flex-row-reverse"
      }  py-5 px-5 gap-14`}
    >
      <img
        src={userImage}
        alt={userName}
        className="h-[5rem] w-[5rem] rounded-full border-black border-[1px] "
      />
      <div className=" w-full mr-4 grid gap-3">
        <p className="text-[#D4D4D8] mt-2 text-center">{description}</p>
        <div className="border-black border-[3px]"></div>
        <h3 className="text-lg text-white font-bold">{userName}</h3>
        <h3 className="text-lg text-white font-bold">{roles}</h3>
      </div>
    </div>
  );
}

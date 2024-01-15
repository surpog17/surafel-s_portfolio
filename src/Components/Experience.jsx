import React from "react";

export default function Experience({
  companyImage,
  companyName,
  description,
  date,
  index,
}) {
  return (
    <div
      className={`grid items-center mb-8 ${
        index % 2 == 0 ? "bg-black" : "bg-[#27272A]"
      } border-gray-400 border-2 rounded-md py-5 px-5`}
    >
      <div className="flex justify-between">
        <div className="flex items-center ">
          <img
            src={companyImage}
            alt={companyName}
            className="h-10 w-10 mr-4"
          />
          <h3 className="text-lg text-white font-bold">{companyName}</h3>
        </div>
        <p className="text-[#D4D4D8]">{date}</p>
      </div>

      <div>
        <p className="text-[#D4D4D8] mt-2">{description}</p>
      </div>
    </div>
  );
}

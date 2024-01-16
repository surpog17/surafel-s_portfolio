import React from "react";
import ButtonWithIcon from "./Inputs/Button";

export default function Projects({
  projectImage,
  projectName,
  description,
  date,
  index,
}) {
  return (
    <div
      className={`flex flex-col-reverse md:flex-row items-center mb-8 py-5 md:px-5 gap-14`}
    >
      <div className="w-full md:w-1/2 grid gap-3">
        <p className="text-white text-4xl">0{(index += 1)}</p>
        <h3 className="text-lg text-white font-bold">{projectName}</h3>
        <p className="text-[#D4D4D8] mt-2">{description}</p>
        <ButtonWithIcon
          className={"text-white"}
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M10.8333 9.16658L17.6667 2.33325"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18.3333 5.66675V1.66675H14.3333"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.16667 1.66675H7.5C3.33333 1.66675 1.66667 3.33341 1.66667 7.50008V12.5001C1.66667 16.6667 3.33333 18.3334 7.5 18.3334H12.5C16.6667 18.3334 18.3333 16.6667 18.3333 12.5001V10.8334"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          }
        />
      </div>
      <img
        src={projectImage}
        alt={projectName}
        className="h-[20rem] w-full md:w-[23rem] mt-4 md:mt-0"
      />
    </div>
  );
}

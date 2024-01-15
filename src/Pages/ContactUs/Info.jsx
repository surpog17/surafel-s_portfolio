import React from "react";
import SocialMedia from "../Home/SocialMedia";
import ButtonWithIcon from "../../Components/Inputs/Button";
import TextArea from "../../Components/Inputs/TextArea";
import InputField from "../../Components/Inputs/InputField";

export default function Info() {
  return (
    <div className="flex gap-10">
      <div className="">
        <form className=" ">
          <InputField
            className="w-full text-sm  border border-secondary rounded-md focus:outline-none bg-transparent p-2 text-secondary font-dmSans"
            placeholder={" Your name"}
            labelClass="font-dmSerif text-secondary"
          />
          <InputField
            className="w-full text-sm  border border-secondary rounded-md focus:outline-none bg-transparent p-2 text-secondary font-dmSans"
            placeholder={"Email"}
            labelClass="font-dmSerif text-secondary"
          />

          <TextArea
            className="w-full h-[6rem] rounded-md border border-secondary placeholder-secondary focus:outline-none bg-transparent  text-secondary font-dmSans p-3"
            placeholder="Enter your message"
            label={"Message (optional)"}
            labelClass="font-dmSerif text-secondary"
          />
          <div className="flex gap-2">
            <ButtonWithIcon
              className="bg-transparent hover:bg-black border-black border-2 rounded-md text-black hover:text-white px-4 py-1  focus:outline-none transition duration-1000 ease-in-out"
              text="Send Massage"
            />
            <SocialMedia />
          </div>
        </form>
      </div>
    </div>
  );
}

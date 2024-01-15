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
            className="w-full text-sm  border border-black rounded-md focus:outline-none bg-transparent p-2 text-secondary font-dmSans"
            placeholder={" Your name"}
            labelClass="font-dmSerif text-secondary"
          />
          <InputField
            className="w-full text-sm  border border-black rounded-md focus:outline-none bg-transparent p-2 text-secondary font-dmSans"
            placeholder={"Email"}
            labelClass="font-dmSerif text-secondary"
          />
          <InputField
            type={"tel"}
            className="w-full text-sm  border border-black rounded-md focus:outline-none bg-transparent p-2 text-secondary font-dmSans"
            placeholder={"Your Phone Number"}
            labelClass="font-dmSerif text-secondary"
          />

          <TextArea
            className="w-full h-[6rem] rounded-md border border-black placeholder-secondary focus:outline-none bg-transparent  text-secondary font-dmSans p-3"
            placeholder="How can I help?*"
            labelClass="font-dmSerif text-secondary"
          />
          <div className="flex gap-2">
            <ButtonWithIcon
              className="bg-black hover:bg-white border-black border-2 rounded-md text-white hover:text-black px-4 py-1  focus:outline-none transition duration-1000 ease-in-out"
              text="Get In Touch"
            />
            <SocialMedia />
          </div>
        </form>
      </div>
    </div>
  );
}

import React from "react";
import InputField from "../../Components/InputField";
import TextArea from "../../Components/TextArea";
import ButtonWithIcon from "../../Components/Button";
import Container from "../../Components/Container";
import { FaPhoneAlt } from "react-icons/fa";
import { TfiLocationPin } from "react-icons/tfi";
import { MdEmail, MdLocationOn, MdTimer } from "react-icons/md";

export default function ContactUs() {
  return (
    <Container className="bg-primary py-10 px-[25rem] h-screen ">
      <div className="flex gap-10">
        <div className="">
          <h1 className="text-left font-dmSerif text-4xl text-secondary pb-10">
            {" "}
            Get in Touch
          </h1>
          <form className=" ">
            <div className="grid grid-cols-2 gap-5">
              <InputField
                className="w-full text-sm  border border-secondary rounded-md focus:outline-none bg-transparent p-2 text-secondary font-dmSans"
                label={"Your Name*"}
                placeholder={"Enter Your name"}
                labelClass="font-dmSerif text-secondary"
              />
              <InputField
                className="w-full text-sm  border border-secondary rounded-md focus:outline-none bg-transparent p-2 text-secondary font-dmSans"
                label={"Your Email*"}
                placeholder={"Enter Your email"}
                labelClass="font-dmSerif text-secondary"
              />
            </div>
            <div className="grid grid-cols-2 gap-5">
              <InputField
                className="w-full text-sm  border border-secondary rounded-md focus:outline-none bg-transparent p-2 text-secondary font-dmSans"
                label={"Your Phone*"}
                placeholder={"Enter Your phone"}
                labelClass="font-dmSerif text-secondary"
              />
              <InputField
                className="w-full text-sm  border border-secondary rounded-md focus:outline-none bg-transparent p-2 text-secondary font-dmSans"
                label={"Your Services*"}
                placeholder={"Enter Your services"}
                labelClass="font-dmSerif text-secondary"
              />
            </div>

            <TextArea
              className="w-full h-[6rem] rounded-md border border-secondary placeholder-secondary focus:outline-none bg-transparent  text-secondary font-dmSans p-3"
              placeholder="Enter your message"
              label={"Message (optional)"}
              labelClass="font-dmSerif text-secondary"
            />
            <ButtonWithIcon
              className="w-full lg:w-40 h-8 my-4 lg:mt-0 font-dmSerif bg-ask_blueBlack text-white text-sm lg:text-base"
              text="Send Massage"
            />
          </form>
        </div>
        <div>
          {/* Embedded Google Map */}
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1dYOUR_LATITUDE_LONGITUDE!2dYOUR_LONGITUDE!2dYOUR_LATITUDE!3dYOUR_LONGITUDE!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xYOUR_LATITUDE_LONGITUDE!2sYour%20Location!5e0!3m2!1sen!2sus!4vYOUR_MAP_API_KEY"
            width="700"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <div className="flex justify-between lg:justify-between gap-2 mt-10 font-dmSerif">
        <div className="flex gap-2 items-center">
          <FaPhoneAlt size={24} className="text-secondary" />
          <p className="text-secondary">Phone</p>
        </div>
        <div className="flex gap-2 items-center">
          <TfiLocationPin size={24} className="text-secondary" />
          <p className="text-secondary">Location</p>
        </div>
        <div className="flex gap-2 items-center">
          <MdEmail size={24} className="text-secondary" />
          <p className="text-secondary">Email</p>
        </div>
        <div className="flex gap-2 items-center">
          <MdTimer size={24} className="text-secondary" />
          <p className="text-secondary">Time</p>
        </div>
      </div>
    </Container>
  );
}

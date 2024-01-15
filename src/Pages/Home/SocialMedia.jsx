import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function SocialMedia() {
  return (
    <ul class="mx-auto flex list-inside justify-center lg:justify-center">
      <a href="#!" class="px-2">
        <FaFacebook
          size={24}
          className="transition duration-1000 ease-in-out  hover:text-blue-700"
        />
      </a>
      <a href="#!" class="px-2">
        <FaTwitter
          size={24}
          className="hover:text-blue-400 duration-300 ease-in-out"
        />
      </a>
      <a href="#!" class="px-2">
        <FaInstagram
          size={24}
          className="hover:text-orange-400  duration-300 ease-in-out"
        />
      </a>
      <a href="#!" class="px-2">
        <FaLinkedin
          size={24}
          className="transition duration-300 ease-in-out  hover:text-blue-700"
        />
      </a>
    </ul>
  );
}

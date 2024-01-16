import React from "react";
import Info from "./Info";
import Talk from "./Talk";

export default function index() {
  return (
    <div
      id="projects"
      className="bg-white min-h-screen px-4 md:px-8 lg:px-16 xl:px-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-evenly gap-10">
        <Info />
        <Talk />
      </div>
    </div>
  );
}

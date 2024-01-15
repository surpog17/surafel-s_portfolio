import React from "react";
import Info from "./Info";
import Talk from "./Talk";

export default function index() {
  return (
    <div id="projects" className="bg-white min-h-screen px-[5rem]">
      <div className="flex justify-evenly">
        <Info />
        <Talk />
      </div>
    </div>
  );
}

import React from "react";
import { RxExit } from "react-icons/rx";

export default function Title() {
  return (
    <nav className="w-full h-20 px-20 flex  border shadow-md items-center justify-between">
      {" "}
      <h1 className="text-3xl h-auto">Job Application Counter</h1>
      <button>
        {" "}
        <RxExit></RxExit>
      </button>
    </nav>
  );
}

import React from "react";

const DefaultEmpty = ({ text, textColor }) => {
  return (
    <div className="flex flex-col justify-center items-center h-full">
      <h1
        className={`text-xl ${
          textColor ? textColor : "text-gray-700"
        } font-semibold text-center`}
      >
        {text}
      </h1>
    </div>
  );
};

export default DefaultEmpty;

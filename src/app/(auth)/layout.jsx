import Image from "next/image";
import React from "react";

const layout = ({ children }) => {
  return (
    <div className="flex min-h-screen w-full">
      <div className="relative hidden sm:block basis-1/2 lg:basis-2/3">
        <Image
          fill={true}
          src={"/images/authImg.png"}
          className="object-cover"
          alt="auth image"
        />
      </div>
      <div className="flex flex-col justify-center items-center w-full basis-full sm:basis-1/2 lg:basis-1/3">{children}</div>
    </div>
  );
};

export default layout;

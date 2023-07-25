import Button from "@/components/button/Button";
import CardQuestion from "@/components/cardQuestion/CardQuestion";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import SideNav from "@/components/sideNav/SideNav";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <Navbar />
      <div className="lg:flex lg:justify-between">
        <SideNav />

        <div className="relative flex flex-col gap-5 basis-2/3 p-5 items-center">
          <Link href={"/ask"}>
            <Button
              text="Mulai bertanya"
              customClass={"bg-primary text-white btn-fly lg:hidden"}
            />
          </Link>

          <div className="max-w-3xl px-5 flex flex-col gap-5">
            <h1 className="text-3xl lg:text-5xl font-semibold px-5">
              Hallo, <span className="text-primary">Ardi</span> dari{" "}
              <span className="text-primary">Depok</span>
            </h1>
            <CardQuestion auth={true} />
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default page;

import ButtonCategory from "@/components/buttonCategory/ButtonCategory";
import Footer from "@/components/footer/Footer";
import FormAsk from "@/components/formAsk/FormAsk";
import Navbar from "@/components/navbar/Navbar";
import SideNav from "@/components/sideNav/SideNav";
import React from "react";

const page = () => {
  return (
    <>
      <Navbar />
      <div className="lg:flex lg:justify-between">
        <SideNav />

        <div className="relative flex flex-col gap-5 md:pb-0 basis-2/3 p-5 min-h-screen">
         
          <FormAsk />

          <Footer />
        </div>
      </div>
    </>
  );
};

export default page;

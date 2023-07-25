import React from "react";
import category from "@/utils/category";
import Button from "../button/Button";

const FormAsk = () => {
  return (
    <div className="flex flex-col items-center gap-16">
      <h1 className="text-center text-2xl lg:text-4xl font-bold text-primary">Form Pertanyaan</h1>
      <form action="" className="flex flex-col gap-10 max-w-lg w-full">
        <div className="flex flex-col gap-3">
          <label htmlFor="">Judul</label>
          <input
            type="text"
            className="w-full px-5 py-2 sm:py-3 rounded-lg border-2 focus:outline-primary"
          />
        </div>

        <div className="flex flex-col gap-3">
          <label htmlFor="">Kategori</label>
          <select className="p-2 w-full bg-white rounded-lg border-2 focus:outline-primary">
            {category.map((e, i) => {
              return (
                <option key={i} value={e} className="">
                  {e}
                </option>
              );
            })}
          </select>
        </div>

        <div className="flex flex-col gap-3x">
          <label htmlFor="">Pertanyaan</label>
          <textarea
            type="textarea"
            rows="4"
            className="w-full px-5 py-2 sm:py-3 rounded-lg border-2 focus:outline-primary"
          />
        </div>

        <Button
          text="Kirim pertanyaan"
          customClass={"bg-primary text-white"}
          fullWidth={true}
        />
      </form>
    </div>
  );
};

export default FormAsk;

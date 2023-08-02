"use client";
import React, { useState } from "react";
import category from "@/utils/category";
import Button from "../button/Button";
import { handleChange } from "@/utils/handleChange";
import axios from "axios";
import addPost from "@/utils/api/addPost";
import { useRouter } from "next/navigation";
import Modal from "../modal/Modal";

const FormAsk = () => {
  const router = useRouter();

  const [showModal, showModalSet] = useState(false);
  const [error, errorSet] = useState([]);
  console.log(error);
  const [post, postSet] = useState({
    title: "",
    id_category: 1,
    id_questioner: 8,
    question: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await addPost(post);
      if (res.status === 200) {
        showModalSet(true);
      }
      router.push("/");
    } catch (error) {
      errorSet(error.response.data.message);
    }
  };

  return (
    <div className="flex flex-col items-center gap-16">
      <h1 className="text-center text-2xl lg:text-4xl font-bold text-primary">
        Form Pertanyaan
      </h1>
      {showModal && <Modal text={"Berhasil mengirimkan pertanyaan"} />}
      <form
        action=""
        className="flex flex-col gap-10 max-w-lg w-full"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-3">
          <label htmlFor="">Judul</label>
          <input
            type="text"
            className="w-full px-5 py-2 sm:py-3 rounded-lg border-2 focus:outline-primary"
            name="title"
            onChange={(e) => handleChange(e, postSet)}
          />
          {error.length !== 0 && error[0]?.message && (
            <label>{error[0].message}</label>
          )}
        </div>

        <div className="flex flex-col gap-3">
          <label htmlFor="">Kategori</label>
          <select
            className="p-2 w-full bg-white rounded-lg border-2 focus:outline-primary"
            onChange={(e) => handleChange(e, postSet)}
            name="category"
          >
            {category.map((e, i) => {
              return (
                <option key={i} value={i + 1} className="">
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
            name="question"
            onChange={(e) => handleChange(e, postSet)}
          />
          {error.length !== 0 && error[1]?.message && (
            <label>{error[1].message}</label>
          )}
        </div>

        <Button
          type="submit"
          text="Kirim pertanyaan"
          customClass={"bg-primary text-white"}
          fullWidth={true}
        />
      </form>
    </div>
  );
};

export default FormAsk;

"use client";
import React, { useState } from "react";
import Button from "../button/Button";
import addPost from "@/utils/api/addPost";
import { useRouter } from "next/navigation";
import Modal from "../modal/Modal";
import ErrorText from "../errorText/ErrorText";
import {askField, handleChange, category} from "@/utils/helper"

const FormAsk = () => {
  const router = useRouter();

  const [showModal, showModalSet] = useState(false);
  const [error, errorSet] = useState([]);
  const [post, postSet] = useState({
    questioner: "",
    city: "",
    title: "",
    category: "",
    question: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await addPost(post);

      if (res.status === 201) {
        showModalSet(true);
      }
      setTimeout(() => {
        router.push("/");
      }, 2000);
    } catch (error) {
      // errorSet(error);
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col items-center gap-16 py-10 lg:py-0">
      <h1 className="text-center text-2xl lg:text-4xl font-bold text-primary">
        Form Pertanyaan
      </h1>
      {showModal && <Modal text={"Berhasil mengirimkan pertanyaan"} />}
      <form
        action=""
        className="flex flex-col gap-10 max-w-lg w-full"
        onSubmit={handleSubmit}
      >
        {askField.map((e, i) => {
          return e.type === "text" ? (
            <div className="flex flex-col gap-3" key={i}>
              <label htmlFor="">{e.label}</label>
              <input
                type="text"
                className="w-full px-5 py-2 sm:py-3 rounded-lg border-2 focus:outline-primary"
                name={e.name}
                onChange={(e) => handleChange(e, postSet)}
              />
              {error.length !== 0 && error[0]?.message && (
                <ErrorText text={error[0].message} />
              )}
            </div>
          ) : e.type === "select" ? (
            <div className="flex flex-col gap-3" key={i}>
              <label htmlFor="">Kategori</label>
              <select
                className="p-2 w-full bg-white rounded-lg border-2 focus:outline-primary"
                onChange={(e) => handleChange(e, postSet)}
                name="category"
              >
                {category.map((e, i) => {
                  return (
                    <option key={i} value={e} className="">
                      {e}
                    </option>
                  );
                })}
              </select>
            </div>
          ) : (
            <div className="flex flex-col gap-3x" key={i}>
              <label htmlFor="">Pertanyaan</label>
              <textarea
                type="textarea"
                rows="4"
                className="w-full px-5 py-2 sm:py-3 rounded-lg border-2 focus:outline-primary"
                name="question"
                onChange={(e) => handleChange(e, postSet)}
              />
              {error.length !== 0 && error[1]?.message && (
                <ErrorText text={error[1].message} />
              )}
            </div>
          );
        })}

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

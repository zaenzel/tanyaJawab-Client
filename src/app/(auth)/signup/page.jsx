"use client";
import Button from "@/components/button/Button";
import Modal from "@/components/modal/Modal";
import Link from "next/link";
import React, { useState } from "react";
import { BiShowAlt, BiHide } from "react-icons/bi";
import { useRouter } from "next/navigation";
import { userRegister } from "@/utils/api/userAuth";
import { signUpTextField, handleChange } from "@/utils/helper";
import ErrorText from "@/components/errorText/ErrorText";

const SignUp = () => {
  const router = useRouter();
  const [passType, passTypeSet] = useState("password");
  const [showModal, showModalSet] = useState(false);
  const [error, errorSet] = useState([]);

  const textField = signUpTextField(passType);

  const togglePasswordShown = () => {
    if (passType === "password") {
      passTypeSet("text");
      return;
    }
    passTypeSet("password");
  };

  const [user, userSet] = useState({
    name: "",
    city: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await userRegister(user);
      showModalSet(true);
      router.push("/login");
      return res.data;
    } catch (error) {
      errorSet(error.response.data.message);
    }
  };

  return (
    <div className="flex flex-col gap-10 items-center w-full max-w-sm px-5 py-10">
      {showModal && <Modal text={"sign up berhasil"} />}
      <h1 className="text-6xl font-bold text-primary">Signup</h1>
      <form
        action=""
        className="flex flex-col gap-5 items-center w-full"
        onSubmit={handleSubmit}
      >
        {textField.map((e, i) => {
          return (
            <div className="relative w-full" key={i}>
              <input
                id={e.id}
                type={e.type}
                placeholder={e.placeholder}
                name={e.name}
                className="w-full max-w-sm p-5 rounded-lg border-2 focus:outline-primary"
                onChange={(e) => handleChange(e, userSet)}
              />
              {e.name === "password" && (
                <div
                  onClick={togglePasswordShown}
                  className={`absolute right-0 ${
                    error.length !== 0 ? "top-1/4" : "top-1/2"
                  } -translate-y-full mt-3 mr-4 cursor-pointer`}
                >
                  {passType === "password" && <BiHide />}
                  {passType === "text" && <BiShowAlt />}
                </div>
              )}

              {error.length !== 0 && error[i]?.message && (
                <ErrorText text={error[i].message} />
              )}
            </div>
          );
        })}
        <Button
          text="Signup"
          type="submit"
          customClass={
            "bg-primary btn-lg text-white hover:bg-primary hover:opacity-80"
          }
          fullWidth={true}
        />
        <Link href={"login"}>
          <p className="hover:text-blue-500">Sudah punya akun?</p>
        </Link>
      </form>
    </div>
  );
};

export default SignUp;

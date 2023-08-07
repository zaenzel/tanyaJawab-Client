"use client";
import Button from "@/components/button/Button";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BiShowAlt, BiHide } from "react-icons/bi";
import { loginTextField } from "@/utils/textField";
import { userLogin } from "@/utils/api/userAuth";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import axios from "axios";
import category from "@/utils/category";

const page = () => {
  const [usePassType, usePassTypeSet] = useState("password");
  const [useData, useDataSet] = useState({});
  const [useShowModal, useShowModalSet] = useState(false);
  const [useError, useErrorSet] = useState([]);
  const session = useSession();
  const router = useRouter();

  const togglePasswordShown = () => {
    if (usePassType === "password") {
      usePassTypeSet("text");
      return;
    }
    usePassTypeSet("password");
  };

  const textField = loginTextField(usePassType);

  const [useUser, useUserSet] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    useUserSet((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // try {
    //   const res = await userLogin(user);
    //   useShowModalSet(true);
    //   useDataSet(res);
    //   return res.useData;
    // } catch (error) {
    //   errorSet(error.response.useData.message);
    // }

    signIn("credentials", { user });
  }

  return (
    <div className="flex flex-col gap-10 items-center w-full max-w-sm px-5">
      <h1 className="text-6xl font-bold text-primary">Login</h1>
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
                name={e.name}
                placeholder={e.placeholder}
                onChange={handleChange}
                className="w-full max-w-sm px-5 py-2 sm:p-5 rounded-lg border-2 focus:outline-primary"
              />
              {e.name === "password" && (
                <div
                  onClick={togglePasswordShown}
                  className="absolute right-0 top-1/2 -translate-y-full mt-3 mr-4 cursor-pointer"
                >
                  {usePassType === "password" && <BiHide />}
                  {usePassType === "text" && <BiShowAlt />}
                </div>
              )}
            </div>
          );
        })}
        <Button
          text="Login"
          type="submit"
          customClass={
            "bg-primary btn-lg text-white hover:bg-primary hover:opacity-80"
          }
          fullWidth={true}
        />
        <Link href={"signup"}>
          <p className="hover:text-blue-500">Belum punya akun?</p>
        </Link>
      </form>
    </div>
  );
};

export default page;

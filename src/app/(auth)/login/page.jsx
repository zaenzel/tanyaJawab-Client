import Button from "@/components/button/Button";
import Link from "next/link";

const page = () => {
  const textField = [
    { id: 1, type: "email", placeholder: "email" },
    { id: 2, type: "password", placeholder: "password" },
  ];

  return (
    <div className="flex flex-col gap-10 items-center w-full max-w-sm px-5">
      <h1 className="text-6xl font-bold text-primary">Login</h1>
      <form action="" className="flex flex-col gap-5 items-center w-full">
        {textField.map((e, i) => {
          return (
            <input
              key={i}
              type={e.type}
              placeholder={e.placeholder}
              className="w-full max-w-sm p-5 rounded-lg border-2 focus:outline-primary"
            />
          );
        })}
        <Button
          text="Login"
          customClass={
            "bg-primary btn-lg text-white hover:bg-primary hover:opacity-80"
          }
        />
        <Link href={"signup"}>
          <p className="hover:text-blue-500">Belum punya akun?</p>
        </Link>
      </form>
    </div>
  );
};

export default page;

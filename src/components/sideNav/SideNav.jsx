import Image from "next/image";
import category from "@/utils/category";
import Button from "../button/Button";
import Link from "next/link";

const SideNav = () => {
  return (
    <aside className="hidden basis-1/3 lg:flex justify-center bg-primary">
      <div className="fixed w-80 xl:w-96 flex flex-col py-5 px-5 justify-between h-screen">
        <div className="flex justify-center">
          <Link href={"/"}>
            <Image src={"/images/logo.png"} width={360} height={116} />
          </Link>
        </div>

        <div className="flex flex-col gap-6 text-white">
          <h1 className="text-3xl font-semibold">Kategori</h1>
          <div className="flex flex-wrap gap-5">
            {category.map((e, i) => {
              return (
                <p
                  key={i}
                  className="text-xl hover:font-semibold cursor-pointer"
                >
                  {e}
                </p>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <Button
            text="Kirim pertanyaan"
            customClass={"bg-white text-primary"}
          />
          <Button text="Login" customClass={"bg-white text-primary"} />
        </div>
      </div>
    </aside>
  );
};

export default SideNav;

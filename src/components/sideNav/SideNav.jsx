import Image from "next/image";
import Button from "../button/Button";
import Link from "next/link";
import DefaultEmpty from "../defaultEmpty/DefaultEmpty";
import category from "@/utils/category";

const SideNav = async () => {
  const profile = false;

  return (
    <aside className="hidden basis-1/3 lg:flex justify-center bg-primary min-h-screen">
      <div className="fixed w-80 xl:w-96 flex flex-col py-5 px-5 justify-between h-screen">
        <div className="flex justify-center">
          <Link href={"/"}>
            <Image
              src={"/images/logo.png"}
              width={360}
              height={116}
              alt="logo"
            />
          </Link>
        </div>

        <div className="flex flex-col gap-6 text-white">
          <h1 className="text-3xl font-semibold">Kategori</h1>
          <div className="flex flex-wrap gap-5">
            {category?.length !== 0 ? (
              category?.map((e, i) => {
                return (
                  <Link href={`?category_id=${e}`} key={i}>
                    <p className="text-xl hover:font-semibold cursor-pointer">
                      {e}
                    </p>
                  </Link>
                );
              })
            ) : (
              <DefaultEmpty text={"Maaf, data kosong"} />
            )}
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <Link href={"/ask"}>
            <Button
              text={"Kirim pertanyaan"}
              customClass={"bg-white text-primary"}
              fullWidth={true}
            />
          </Link>

          {/* button if use auth API */}
          {profile && (
            <div className="flex gap-5">
              <Link className="w-full" href={"/profile"}>
                <Button
                  text={"Profile"}
                  customClass={"bg-white text-primary"}
                  fullWidth={true}
                />
              </Link>

              <Link className="w-full" href={"/login"}>
                <Button
                  text={"Login"}
                  customClass={"bg-white text-primary"}
                  fullWidth={true}
                />
              </Link>
            </div>
          )}
          
        </div>
      </div>
    </aside>
  );
};

export default SideNav;

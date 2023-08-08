import Link from "next/link";
import Button from "../button/Button";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="navbar bg-primary lg:hidden">
      <div className="flex-1">
        <Link href={"/"} className="flex justify-center">
          <Image src={"/images/logo.png"} width={150} height={100} alt="logo" />
        </Link>
      </div>
      <div className="flex-none">
        <Link href={"/ask"}>
          <Button customClass="btn-outline text-white" text="Mulai Bertanya" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

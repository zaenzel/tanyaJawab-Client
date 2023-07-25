import Link from "next/link";
import Button from "../button/Button";

const Navbar = () => {
  return (
    <div className="navbar bg-primary lg:hidden">
      <div className="flex-1">
        <Link href={"/"} className="btn btn-ghost text-white normal-case text-xl">
          Tanya Jawab
        </Link>
      </div>
      <div className="flex-none">
        <Link href={"/login"}>
          <Button customClass="btn-outline text-white" text="Login" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

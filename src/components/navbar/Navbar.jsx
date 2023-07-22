import Button from "../button/Button";

const Navbar = () => {
  return (
    <div className="navbar bg-primary lg:hidden">
      <div className="flex-1">
        <a className="btn btn-ghost text-white normal-case text-xl">
          Tanya Jawab
        </a>
      </div>
      <div className="flex-none">
        <Button customClass="btn-outline text-white" text="Login" />
      </div>
    </div>
  );
};

export default Navbar;

import getCategory from "@/utils/api/getCategory";
import "./buttonCategory.css";
import Link from "next/link";
import category from "@/utils/category";

const ButtonCategory = async () => {
  return (
    <section className="lg:hidden">
      <div className="pl-5">
        <div className="flex gap-2 overflow-scroll btn-scroll">
          {category.length !== 0 ? (
            category.map((e, i) => {
              return (
                <button
                  className="btn btn-outline text-primary active:bg-primary"
                  key={i}
                >
                  <Link href={`?category_id=${e}`}>{e}</Link>
                </button>
              );
            })
          ) : (
            <p>data kosong</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ButtonCategory;

import getCategory from "@/utils/api/getCategory";
import "./buttonCategory.css";
import Link from "next/link";
// import category from "@/utils/category";

const ButtonCategory = async () => {
  const category = await getCategory();
  return (
    <section className="lg:hidden">
      <div className="pl-5">
        <div className="flex gap-2 overflow-scroll btn-scroll">
          {category?.status === "success" ? (
            category.data?.length !== 0 ? (
              category.data?.map((e, i) => {
                return (
                  <button
                    className="btn btn-outline text-primary active:bg-primary"
                    key={i}
                  >
                    <Link href={`?category_id=${e.id}`}>{e.name}</Link>
                  </button>
                );
              })
            ) : (
              <p>data kosong</p>
            )
          ) : (
            <p className="min-h-[calc(100vh_-_29rem)]">
              Oops something went wrong
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ButtonCategory;

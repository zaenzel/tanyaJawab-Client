import "./buttonCategory.css";
import category from "@/utils/category";

const ButtonCategory = () => {
  return (
    <section className="lg:hidden">
      <div className="pl-5">
        <div className="flex gap-2 overflow-scroll btn-scroll">
          {category.map((e, i) => {
            return (
              <button className="btn btn-outline text-primary" key={i}>
                {e}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ButtonCategory;

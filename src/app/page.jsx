import ButtonCategory from "@/components/buttonCategory/ButtonCategory";
import CardQuestion from "@/components/cardQuestion/CardQuestion";
import Carousel from "@/components/carousel/Carousel";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import SideNav from "@/components/sideNav/SideNav";
import getPosts from "@/utils/api/getPosts";

export default async function Home({ searchParams }) {
  const posts = await getPosts(searchParams.category_id);

  return (
    <>
      <Navbar />
      <div className="lg:flex lg:justify-between">
        <SideNav />

        <div className="relative flex flex-col gap-5 md:pb-0 basis-2/3 p-5">
          <Carousel />

          <ButtonCategory />
          
          <CardQuestion posts={posts} />
          <Footer />
        </div>
      </div>
    </>
  );
}

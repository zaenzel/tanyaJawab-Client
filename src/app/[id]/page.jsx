import Button from "@/components/button/Button";
import DetailText from "@/components/detailText.jsx/DetailText.jsx";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import SideNav from "@/components/sideNav/SideNav";
import { date } from "../../utils/helper";
import getPostDetail from "@/utils/api/getPostDetail";

export default async function Home({ params }) {
  const id = params.id;

  const post = await getPostDetail(id);

  return (
    <>
      <Navbar />
      <div className="lg:flex lg:justify-between">
        <SideNav />

        <div className="relative flex flex-col items-center gap-5 md:pb-0 basis-2/3 p-5">
          {/* desktop view hidden */}
          <Button
            text="Mulai bertanya"
            customClass={"bg-primary text-white btn-fly lg:hidden"}
          />

          <div className="flex flex-col gap-y-14 p-5 items-center max-w-lg lg:max-w-max lg:items-start lg:p-20 min-h-screen">
            <div className="flex flex-col w-full gap-4">
              <h1 className="text-3xl lg:text-5xl font-semibold">
                {post.title}
              </h1>
              <p>
                {post.category}, {date(post.createdAt)}
              </p>
            </div>
            <DetailText
              text={post.question}
              name={post.questioner}
              city={post.city}
            />

            {post.answer ? (
              <DetailText
                question={false}
                text={post.answer}
                name={post.nameAnswer}
              />
            ) : (
              <p>Maaf, pertanyaan ini belum dijawab oleh para asaatidz</p>
            )}
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

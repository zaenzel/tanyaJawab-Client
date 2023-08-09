import DetailText from "@/components/detailText.jsx/DetailText.jsx";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import SideNav from "@/components/sideNav/SideNav";
import { date } from "@/utils/helper";
import getPostDetail from "@/utils/api/getPostDetail";

export async function generateMetadata({ params }) {
  const post = await getPostDetail(params.id);
  return {
    title: post.title,
    description: post.question,
  };
}

export default async function Home({ params }) {
  const id = params.id;

  const post = await getPostDetail(id);

  return (
    <>
      <Navbar />
      <div className="lg:flex lg:justify-between">
        <SideNav />

        <div className="relative flex flex-col items-center gap-5 md:pb-0 basis-2/3 p-5">
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
                name={post.answered}
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

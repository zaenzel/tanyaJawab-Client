import Button from "@/components/button/Button";
import DetailText from "@/components/detailText.jsx/DetailText.jsx";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import SideNav from "@/components/sideNav/SideNav";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="lg:flex lg:justify-between">
        <SideNav />

        <div className="relative flex flex-col gap-5 md:pb-0 basis-2/3 p-5">
          {/* desktop view hidden */}
          <Button
            text="Mulai bertanya"
            customClass={"bg-primary text-white btn-fly lg:hidden"}
          />

          <div className="flex flex-col gap-y-14 px-5 min-h-screen">
            <div className="flex flex-col gap-2">
              <h1 className="text-5xl font-semibold">Hukum Judi Online</h1>
              <p>Lain - lain, 14 April 2009</p>
            </div>
            <DetailText
              text="Assalamu'alaikum
                    warahmatullahi wabarakatuh ustadz... Ijin bertanya belakangan ini suami
                    saya suka main game, saya awalnya berpikir hanya game biasa tapi setiap
                    selesai main game dia kesenangan gitu sampai selalu memberi makanan,
                    tapi kadang juga kesel ga karuan, ternyata game yang dia mainkan itu
                    judi online, bagaiman ya hukumnya dan apa yang saya harus lakukan?"
              questioner="- Nunung, Depok"
            />

            <DetailText
            question={false}
              text="Assalamu'alaikum
                    warahmatullahi wabarakatuh ustadz... Ijin bertanya belakangan ini suami
                    saya suka main game, saya awalnya berpikir hanya game biasa tapi setiap
                    selesai main game dia kesenangan gitu sampai selalu memberi makanan,
                    tapi kadang juga kesel ga karuan, ternyata game yang dia mainkan itu
                    judi online, bagaiman ya hukumnya dan apa yang saya harus lakukan?"
              questioner="- Tatang, Lc, Depok"
            />
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

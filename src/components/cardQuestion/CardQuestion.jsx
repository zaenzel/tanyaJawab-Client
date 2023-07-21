import Link from "next/link";
import React from "react";

const data = [1, 2, 3, 4, 5];

const CardQuestion = () => {
  return (
    <section className="flex justify-center py-5">
      <div className="max-w-3xl px-5 flex flex-col gap-5">
        {data.map((e, i) => {
          return (
            <Link href={"/about"}>
              <div className="flex flex-col gap-5 " key={i}>
                <div className="flex justify-between">
                  <div className="flex flex-col gap-2">
                    <h1 className="text-2xl leading-5">Hukum Judi Online</h1>
                    <p className="font-extralight">
                      Lain - lain, 14 april 2009
                    </p>
                  </div>
                  <p className="text-sm font-light text-primary">terjawab</p>
                </div>
                <p className="max-h-24 overflow-hidden">
                  Assalamu'alaikum warahmatullahi wabarakatuh ustadz, Ijin
                  bertanya belakangan ini suami saya suka main game, saya
                  awalnya berpikir hanya game biasa tapi setiap selesai main
                  game dia kesenangan gitu sampai selalu memberi makanan, tapi
                  kadang juga kesel ga karuan, ternyata game yang dia mainkan
                  itu judi online, bagaiman ya hukumnya dan apa yang saya harus
                  lakukan?
                </p>
                {i !== data.length - 1 && <hr />}
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default CardQuestion;

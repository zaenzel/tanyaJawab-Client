import { date } from "@/utils/helper";
import Link from "next/link";
import React from "react";
import DefaultEmpty from "../defaultEmpty/DefaultEmpty";

const CardQuestion = ({ auth = false, posts }) => {
  return (
    <section className="flex justify-center py-5 min-h-[calc(100vh_-_27rem)]">
      <div className="max-w-3xl px-5 flex flex-col gap-5 w-full">
        {posts?.status === 200 ? (
          posts.data?.length !== 0 ? (
            posts.data.map((e, i) => {
              return (
                <Link href={`${e.id}`} key={i}>
                  <div className="flex flex-col gap-5 ">
                    <div className="flex justify-between">
                      <div className="flex flex-col gap-2">
                        <h1 className="text-2xl leading-5">{e.title}</h1>
                        <p className="font-extralight">
                          {e.category} , {date(e.createdAt)}
                        </p>
                      </div>
                      <div className="flex gap-3">
                        {auth && (
                          <>
                            <p className="text-sm font-light text-red-600">
                              Hapus
                            </p>
                            <p className="text-[#D9D9D9]">|</p>
                          </>
                        )}
                        {e.id_answer && (
                          <p className="text-sm font-light text-primary">
                            terjawab
                          </p>
                        )}
                      </div>
                    </div>
                    <p className="max-h-24 overflow-hidden">{e.question}</p>
                    {i !== posts.data.length - 1 && <hr />}
                  </div>
                </Link>
              );
            })
          ) : (
            <DefaultEmpty text={"Maaf, belum ada pertanyaan di kategori ini"} />
          )
        ) : (
          <DefaultEmpty text={"Maaf, server sedang bermasalah"} />
        )}
      </div>
    </section>
  );
};

export default CardQuestion;

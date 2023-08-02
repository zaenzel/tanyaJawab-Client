import date from "@/utils/date";
import Link from "next/link";
import React from "react";

const CardQuestion = ({ auth = false, posts }) => {
  return (
    <section className="flex justify-center py-5 min-h-[calc(100vh_-_27rem)]">
      <div className="max-w-3xl px-5 flex flex-col gap-5 w-full">
        {posts?.status === "success" ? (
          posts.data?.length !== 0 ? (
            posts.data.map((e, i) => {
              return (
                <Link href={`${e.id}`} key={i}>
                  <div className="flex flex-col gap-5 ">
                    <div className="flex justify-between">
                      <div className="flex flex-col gap-2">
                        <h1 className="text-2xl leading-5">{e.title}</h1>
                        <p className="font-extralight">
                          Lain - lain, {date(e.created_at)}
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
            <p>data kosong</p>
          )
        ) : (
          <p className="min-h-screen">
            Oops something went wrong
          </p>
        )}
      </div>
    </section>
  );
};

export default CardQuestion;

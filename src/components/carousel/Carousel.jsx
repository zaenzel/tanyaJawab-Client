import Image from "next/image";
import React from "react";

const Carousel = () => {
  const images = [
    { id: "slide1", img: "/images/4.jpg", next: "#slide2", prev: "#slide3" },
    { id: "slide2", img: "/images/2.jpg", next: "#slide3", prev: "#slide1" },
    { id: "slide3", img: "/images/3.jpg", next: "#slide1", prev: "#slide2" },
  ];

  return (
    <section className="flex justify-center">
      <div className="carousel w-full max-w-3xl">        
        {images.map((e, i) => {
          return (
            <div id={e.id} className="carousel-item relative w-full" key={i}>
              <div className="w-full h-72 relative">
                <Image src={e.img} fill={true} className="object-cover" alt="image carousel" />
              </div>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-2 right-2 top-1/2">
                <a href={e.prev} className="btn btn-circle">
                  ❮
                </a>
                <a href={e.next} className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Carousel;

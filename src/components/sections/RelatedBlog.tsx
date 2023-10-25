import Image from "next/image";
import React from "react";

const data = [
  {
    id: 1,
    img: "/img/Related_1.png",
    title:
      "Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution",
    logo: "/img/header_img.png",
    name: "Lina",
    desc: "Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...",
    viewers: "251,232",
  },
  {
    id: 2,
    img: "/img/Related_2.png",
    title:
      "Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution",
    logo: "/img/header_img.png",
    name: "Lina",
    desc: "Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...",
    viewers: "251,232",
  },
];

const RelatedBlog = () => {
  return (
    <section className="bg-lightblue">
      <main className="section">
        <div className="flex justify-between">
          <h1 className="text-xl font-medium">Related Blog</h1>
          <p className="text-greenish font-bold pr-2 cursor-pointer">See all</p>
        </div>
        <div className="flex items-center justify-between pt-6">
          {data.map((item) => (
            <div
              className="bg-[#FFFFFF] max-w-[37rem] py-12 flex flex-col px-8 rounded-xl shadow-2xl cursor-pointer"
              key={item.id}
            >
              <div className="flex justify-center items-center">
                <Image
                  src={`${item.img}`}
                  alt="main-img"
                  height={400}
                  width={650}
                />
              </div>
              <h1 className="text-[18px] font-medium text-[#252641] pt-5 pb-5">
                {item.title}
              </h1>
              <div className="flex items-center gap-4">
                <Image src={`${item.logo}`} alt="logo" height={60} width={60} />
                <h3>{item.name}</h3>
              </div>
              <p className="pt-4 pb-10 text-[#696984]">{item.desc}</p>
              <div className="flex justify-between">
                <p className="text-[#696984] underline">Read more</p>
                <div className="flex gap-5 items-center">
                  <Image
                    src={`/img/eye.png`}
                    alt="eye"
                    height={10}
                    width={20}
                  />
                  <p className="text-[#696984]">{item.viewers}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-end gap-3 pt-14 pr-2 cursor-pointer">
          <div className="bg-greenish opacity-70 px-[1.1rem] py-4 rounded-md ">
            <Image
              src={`/img/left_arrow.png`}
              alt="arrow"
              height={20}
              width={7}
            />
          </div>
          <div className="bg-greenish px-[1.1rem] py-4 rounded-md ">
            <Image
              src={`/img/right_arrow.png`}
              alt="arrow"
              height={20}
              width={7}
            />
          </div>
        </div>
      </main>
    </section>
  );
};

export default RelatedBlog;

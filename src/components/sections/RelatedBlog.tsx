import Image from "next/image";
import React from "react";
import { datas } from "@/constant/Constant";

const RelatedBlog = () => {
  return (
    <section className="bg-lightblue">
      <main className="section">
        <div className="flex justify-between">
          <h1 className="text-3xl font-medium">Related Blog</h1>
          <p className="text-greenish font-bold pr-2 cursor-pointer">See all</p>
        </div>
        <div className="flex items-center justify-between pt-6">
          {datas.map((item) => (
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
              <h1 className="text-[22px] font-medium text-[#252641] pt-5 pb-5">
                {item.title}
              </h1>
              <div className="flex items-center gap-4">
                <Image src={`${item.logo}`} alt="logo" height={60} width={60} />
                <h3 className="text-[#000000] font-medium">{item.name}</h3>
              </div>
              <p className="pt-4 pb-10 text-[#696984] md:text-lg">
                {item.desc}
              </p>
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

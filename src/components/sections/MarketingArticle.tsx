import Image from "next/image";
import React from "react";
import { data } from "@/constant/Constant";

const MarketingArticle = () => {
  return (
    <section>
      <main className="section">
        <div className="flex justify-between">
          <h1 className="text-3xl font-medium">Marketing Articles</h1>
          <p className="text-greenish font-bold pr-2 cursor-pointer">See all</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 pt-6 lg:pb-[4.5rem]">
          {data.map((item) => (
            <div
              className="bg-[#FFFFFF] max-w-[21rem] shadow-xl cursor-pointer px-4 rounded-xl py-6"
              key={item.id}
            >
              <div className="flex justify-center items-center">
                <Image
                  src={`${item.img}`}
                  alt="main-img"
                  height={400}
                  width={280}
                />
              </div>
              <div className="flex justify-between pt-4">
                <div className="flex items-center gap-2">
                  <Image
                    src={`/img/square.png`}
                    alt="square"
                    height={10}
                    width={20}
                  />
                  <h3 className="text-[#696984] text-[14px]">Design</h3>
                </div>
                <div className="flex  items-center gap-2">
                  <Image
                    src={`/img/time.png`}
                    alt="square"
                    height={10}
                    width={18}
                  />
                  <h3 className="text-[#696984] text-[14px]">{item.time}</h3>
                </div>
              </div>
              <h1 className="py-5 font-medium text-[#252641] text-[20px]">
                {item.title}
              </h1>
              <p className="pb-5 text-[#696984] leading-relaxed">{item.desc}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Image
                    src={`${item.logo}`}
                    alt="logo"
                    height={40}
                    width={40}
                  />
                  <h3 className="font-medium">{item.name}</h3>
                </div>
                <div className="flex gap-3 items-end">
                  <h4 className="italic font-light">{item.price}</h4>
                  <h3 className="font-bold text-greenish text-xl">
                    {item.newprice}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </section>
  );
};

export default MarketingArticle;

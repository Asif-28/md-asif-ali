import Image from "next/image";
import React from "react";

const data = [
  {
    id: 1,
    img: "/img/MA_1.png",
    design: "design",
    time: "3 Month",
    title: "AWS Certified solutions Architect",
    desc: "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
    logo: "/img/header_img.png",
    name: "Lina",
    price: "$100",
    newprice: "$80",
  },
  {
    id: 2,
    img: "/img/MA_2.png",
    design: "design",
    time: "3 Month",
    title: "AWS Certified solutions Architect",
    desc: "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
    logo: "/img/header_img.png",
    name: "Lina",
    price: "$100",
    newprice: "$80",
  },
  {
    id: 3,
    img: "/img/MA_3.png",
    design: "design",
    time: "3 Month",
    title: "AWS Certified solutions Architect",
    desc: "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
    logo: "/img/header_img.png",
    name: "Lina",
    price: "$100",
    newprice: "$80",
  },
  {
    id: 4,
    img: "/img/MA_4.png",
    design: "design",
    time: "3 Month",
    title: "AWS Certified solutions Architect",
    desc: "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
    logo: "/img/header_img.png",
    name: "Lina",
    price: "$100",
    newprice: "$80",
  },
];

const MarketingArticle = () => {
  return (
    <section>
      <main className="section">
        <div className="flex justify-between">
          <h1 className="text-xl font-medium">Marketing Articles</h1>
          <p className="text-greenish font-bold pr-2 cursor-pointer">See all</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 pt-6">
          {data.map((item) => (
            <div
              className="bg-[#FFFFFF] max-w-[20rem] shadow-2xl cursor-pointer px-3"
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
                    width={20}
                  />
                  <h3 className="text-[#696984] text-[14px]">Month</h3>
                </div>
              </div>
              <h1 className="py-5 font-medium text-[#252641]">{item.title}</h1>
              <p>{item.desc}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Image
                    src={`${item.logo}`}
                    alt="logo"
                    height={60}
                    width={60}
                  />
                  <h3>{item.name}</h3>
                </div>
                <div className="flex items-end">
                  <h4>{item.price}</h4>
                  <h3>{item.newprice}</h3>
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

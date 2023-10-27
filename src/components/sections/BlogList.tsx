import Image from "next/image";
import React from "react";
import { images } from "@/constant/Constant";

const BlogList = () => {
  return (
    <section className="section">
      <h2 className="text-3xl font-bold">Reading blog list</h2>
      <div className="grid pt-6 grid-cols-4 gap-4">
        {images.map((item) => (
          <div className="relative" key={item.id}>
            <Image
              className=""
              src={`${item.img}`}
              alt="item-list"
              height={200}
              width={290}
            />
            <h1 className=" text-center absolute bottom-[10%] left-[20%] text-lg font-bold bg-[#FFFFFF] px-2 py-1 rounded-lg opacity-70 min-w-[170px] hover:opacity-100">
              {item.name}
            </h1>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogList;

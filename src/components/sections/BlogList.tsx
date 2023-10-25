import Image from "next/image";
import React from "react";

const images = [
  { id: 1, img: "/img/list_1.png", name: "UI/UX" },
  { id: 2, img: "/img/list_2.png", name: "React" },
  { id: 3, img: "/img/list_3.png", name: "PHP" },
  { id: 4, img: "/img/list_4.png", name: "JavaScript" },
];

const BlogList = () => {
  return (
    <section className="section">
      <h2 className="text-[22px] font-bold">Reading blog list</h2>
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

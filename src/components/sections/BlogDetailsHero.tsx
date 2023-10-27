import Image from "next/image";
import React from "react";

const BlogDetailsHero = () => {
  return (
    <section>
      <Image
        src={`/img/blogdetails.png`}
        alt="background-image"
        width={2000}
        height={600}
        loading="lazy"
        sizes="(max-width: 768px) 100vw"
      />
      <div className="section">
        <div className="text-[#696984] w-[90%]">
          <h1 className="text-left text-4xl font-semibold text-darkblue leading-normal">
            Why Swift UI Should Be on the Radar of Every Mobile Developer
          </h1>
          <p className="py-6 md:text-lg tracking-wider">
            TOTC is a platform that allows educators to create online classes
            whereby they can store the course materials online; manage
            assignments, quizzes and exams; monitor due dates; grade results and
            provide students with feedback all in one place.
          </p>
          <p className="pb-6 md:text-lg tracking-wider">
            TOTC is a platform that allows educators to create online classes
            whereby they can store the course materials online; manage
            assignments, quizzes and exams; monitor due dates; grade results and
            provide students with feedback all in one place. TOTC is a platform
            that allows educators to create online classes whereby they can
            store the course materials online; manage assignments, quizzes and
            exams; monitor due dates; grade results and provide students with
            feedback all in one place. TOTC is a platform
          </p>
          <p className="pb-6 md:text-lg tracking-wider">
            TOTC is a platform that allows educators to create online classes
            whereby they can store the course materials online; manage
            assignments, quizzes and exams; monitor due dates; grade results and
            provide students with feedback all in one place. TOTC is a platform
            that allows educators to create online classes whereby they can
            store the course materials online; manage
          </p>
        </div>
        <div className=" text-[#696984] text-center flex gap-6 mb-8">
          <p
            style={{ backgroundColor: "rgba(73, 187, 189, 0.1)" }}
            className=" px-4 py-2 font-medium text-base rounded-3xl w-[140px]"
          >
            affordable
          </p>
          <p
            style={{ backgroundColor: "rgba(73, 187, 189, 0.1)" }}
            className=" px-4 py-2 font-medium text-base rounded-3xl w-[140px]"
          >
            Stunning
          </p>
          <p
            style={{ backgroundColor: "rgba(73, 187, 189, 0.1)" }}
            className=" px-4 py-2 font-medium text-base rounded-3xl w-[140px]"
          >
            making
          </p>
          <p
            style={{ backgroundColor: "rgba(73, 187, 189, 0.1)" }}
            className=" px-4 py-2 font-medium text-base rounded-3xl w-[140px]"
          >
            madbrawns
          </p>
        </div>
        <div className="w-auto h-[.5px] bg-[#696984] overflow-x-hidden mb-8" />
        <div className="flex justify-between items-center ">
          <div className=" flex items-center gap-4">
            <Image
              src={`/img/author.png`}
              alt="written"
              height={80}
              width={60}
            />
            <div>
              <h4 className="text-[#696984] font-medium text-[12px]">
                Written by
              </h4>
              <h2 className="text-[#000000] font-medium">Lina</h2>
            </div>
          </div>
          <button className="text-base w-[180px] text-greenish font-bold bg-[#fff] px-4 py-2 rounded-lg border border-greenish">
            Follow
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogDetailsHero;

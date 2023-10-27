import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="bg-lightblue ">
      <main className="section flex justify-evenly">
        <div className="left">
          <h3 className="text-xl">
            By Themadbrains in
            <span className="text-greenish font-bold"> inspiration</span>
          </h3>
          <h1 className="text-left md:text-[40px] font-semibold text-darkblue leading-normal py-4 w-[75%]">
            Why Swift UI Should Be on the Radar of Every Mobile Developer
          </h1>
          <p className="text-[#696984] leading-relaxed tracking-wider pb-5 w-[75%] text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing
            elit, sed do eiusmod tempor
          </p>
          <Link href={`/blogdetails`}>
            <button className="text-[15px] text-[#fff] bg-greenish px-5 py-3 rounded-lg font-semibold">
              Start learning now
            </button>
          </Link>
        </div>
        <div className="right">
          <Image src={`/img/hero.png`} alt="hero" width={1050} height={400} />
        </div>
      </main>
    </section>
  );
};

export default Hero;

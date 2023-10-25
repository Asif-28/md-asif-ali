import Image from "next/image";
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
          <h1 className="text-left text-4xl font-semibold text-darkblue leading-normal py-4 w-[75%]">
            Why Swift UI Should Be on the Radar of Every Mobile Developer
          </h1>
          <p className="text-[#696984] leading-relaxed tracking-wider pb-5 w-[75%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing
            elit, sed do eiusmod tempor
          </p>
          <button className="text-[15px] text-[#fff] bg-greenish px-4 py-3 rounded-lg font-semibold">
            Start learning now
          </button>
        </div>
        <div className="right">
          <Image src={`/img/hero.png`} alt="hero" width={1050} height={400} />
        </div>
      </main>
    </section>
  );
};

export default Hero;
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <section className="bg-violet text-[#FFFFFF]">
      <div className="section ">
        <div className="flex justify-center items-center gap-8">
          <Image src={`/img/logo_2.png`} alt="logo" height={80} width={90} />
          <Image src={`/img/line.png`} alt="logo" height={20} width={1} />
          <h2 className="text-xl font-semibold">
            Virtual Class <br />
            for Zoom
          </h2>
        </div>
        <div className="flex flex-col items-center justify-center py-[4.8rem]">
          <h1 className="text-[#B2B3CF] text-2xl font-medium text-center pb-6">
            Subscribe to get our Newsletter
          </h1>
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Your email"
              className="rounded-3xl px-4 py-2 w-[18rem] bg-violet border border-[#83839A]"
            />
            <button className="bg-greenish text-[#fff] font-medium text-[16px] px-4 py-2 rounded-3xl shadow-greenish">
              Subscribe
            </button>
          </div>
        </div>
        <div className="text-[#B2B3CF] font-normal text-[16px] flex flex-col justify-center items-center">
          <ul className="flex gap-5">
            <li>Career</li>
            <Image src={`/img/line_2.png`} alt="logo" height={10} width={1} />
            <li>Privacy Policy</li>
            <Image src={`/img/line_2.png`} alt="logo" height={10} width={1} />
            <li>Terms & Conditions</li>
          </ul>
          <h2 className="pt-5">© 2021 Class Technologies Inc. </h2>
        </div>
      </div>
    </section>
  );
};

export default Footer;

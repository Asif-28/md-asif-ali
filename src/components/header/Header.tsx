import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <section className="max-w-[1300px] mx-auto">
      <main className="flex justify-between items-center text-[#696984] py-6">
        <div>
          <Image
            className="cursor-pointer"
            src={`/img/logo.png`}
            alt="logo"
            height={80}
            width={80}
          />
        </div>
        <div className="flex gap-20 items-center">
          <ul className="flex text-[18px] gap-10 items-center font-normal cursor-pointer">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>Courses</li>
            <li>Careers</li>
            <li>
              <Link href={"/"}>Blog</Link>
            </li>
            <li>About Us</li>
          </ul>
          <div className="flex gap-3 items-center">
            <Image
              src={`/img/header_img.png`}
              alt="header-log"
              height={60}
              width={60}
            />
            <h3 className="font-medium text-[#000000]">Lina</h3>

            <Image
              className="cursor-pointer"
              src={`/img/downarrow.png`}
              alt=""
              height={10}
              width={12}
            />
          </div>
        </div>
      </main>
    </section>
  );
};

export default Header;

import React from "react";
import Scrolln from "./animation/Scrolln";
import Link from "next/link";

export const HeroSection = ({ title, des, route }) => {
  return (
    <section className=" zinc-bg text-white  lg:px-36 md:px-20 px-10">
      <Scrolln>
        <div className="container mx-auto pb-14 pt-4">
          <h1 className="text-[10px] color">
            <Link href="/" className="hover:underline">
              home
            </Link>{" "}
            <span className="mx-2">{`//`}</span>{" "}
            <Link href="/services" className="hover:underline">
              Our Services
            </Link>{" "}
            <span className="mx-2">{`//`}</span>{" "}
            <span className="yellow-text font-bold ">{route}</span>{" "}
          </h1>
          <div className="text-5xl pt-8">
            <h1 className="mt-4 font-[500] dot-title"> {title}</h1>
          </div>
          <p className="lg:w-6/12 mt-4">{des}</p>
        </div>
      </Scrolln>
    </section>
  );
};

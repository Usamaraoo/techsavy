"use client";

import YellowDot from "@/components/YellowDot";
import { Hero } from "@/components/home/Hero";
import Services from "@/components/home/Services";
import { BiRightArrowAlt } from "react-icons/bi";
import Scrolln from "../components/animation/Scrolln";
import GigitCount from "@/components/animation/GigitCount";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <section className="text-center section py-16 px-10">
        <div className="container mx-auto">
          <Scrolln width="100%">
            <h1 className="lg:text-7xl text-4xl zinc-text lg:w-8/12  font-medium mx-auto ">
              We are obsessed with Customer Flow <YellowDot />
            </h1>
            <p className="text-xl w-11/12  md:w-7/12  mx-auto mt-10">
              The continuous movement of your customers along the path to
              purchase is vital to your business success. Our purpose is to help
              you build and accelerate Customer Flow.
            </p>

            <div className="flex justify-center mt-8">
              <button className="btn mt-4 yellow-bg text-white text-lg flex justify-center items-center gap-2 group">
                Find out more{" "}
                <BiRightArrowAlt
                  size={25}
                  className="transition-all duration-700 group-hover:translate-x-3"
                />
              </button>
            </div>
          </Scrolln>
        </div>
      </section>

      <section className="zinc-bg  py-20 h-full px-10">
        <Scrolln width="100%">
          <div className="container gap-10 text-center lg:text-left flex-col lg:flex-row flex mx-auto  justify-center">
            <div className="lg:w-4/12 w-full ">
              <h1 className="text-2xl md:text-3xl font-bold">
                How the FLOW OS can help your business
              </h1>
              <p className="mt-6 leading-8 ">
                {" "}
                Reorganizing performance marketing to focus on Customer Flow
                unlocks a wealth of opportunities to drive real business
                results.
              </p>

              <div className="flex justify-center lg:justify-start">
                <button className="btn text-sm mt-10 yellow-bg text-white text-lg flex justify-center items-center gap-2 group">
                  Find out more{" "}
                  <BiRightArrowAlt
                    size={22}
                    className="transition-all duration-700 group-hover:translate-x-3"
                  />
                </button>
              </div>
            </div>
            <div className="flex flex-col justify-around gap-0">
              <p>Imporve sales +</p>
              <p>Drive lead generation </p>
              <p>Engage in the mid-funnel +</p>
              <p>Bridge brand and performance efforts +</p>
            </div>
            <div className="flex flex-col justify-around gap-0">
              <p>Increase ROI or ROAS +</p>
              <p>Grow eCommerce + </p>
              <p>Lower cost per acquisition +</p>
              <p>Lower cost per acquisition +</p>
            </div>
          </div>
        </Scrolln>
      </section>

      <Services />

      <section className="section text-zinc py-24 px-10">
        <Scrolln width="100%">
          <div className="container mx-auto text-center ">
            <h1 className=" lg:text-4xl text-2xl font-[600] zinc-text">
              Performance marketing at a global scale
              <YellowDot />{" "}
            </h1>
            <div className="flex flex-col lg:flex-row justify-center mb-20 mt-24 gap-20">
              <div>
                <h1 className="lg:text-8xl text-6xl  font-[600] grad-text">
                  <GigitCount/>
                </h1>
                <p className="zinc-text text-xl mt-5 font-semibold">
                  Offices in 48 countries
                </p>
              </div>
              <div>
                <h1 className="lg:text-8xl text-6xl  font-[600] grad-text ">
                  3k
                </h1>
                <p className="zinc-text text-xl font-semibold mt-5">
                  Digital marketing experts
                </p>
              </div>
              <div>
                <h1 className="lg:text-8xl text-6xl  font-[600] grad-text">
                  $3bn
                </h1>
                <p className="zinc-text text-xl mt-5 font-semibold">
                  Digital spend
                </p>
              </div>
            </div>
          </div>
        </Scrolln>
      </section>
    </main>
  );
}

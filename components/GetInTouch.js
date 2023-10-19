import React from "react";
import Scrolln from "./animation/Scrolln";
import { BiRightArrowAlt } from "react-icons/bi";
import Link from "next/link";

const GetInTouch = () => {
  return (
    <section className="zinc-bg text-center  py-24">
      <Scrolln width="100%">
        <div className="container mx-auto">
          <h1 className="text-4xl font-[600] dot-title">Get in touch today</h1>
          <p className=" w-11/12  md:w-7/12  mx-auto mt-10">
            {`Whether you have questions, ideas, or simply want to connect, we
            welcome the opportunity to hear from you. Our team is always here to
            assist you in any way we can. Feel free to reach out to us via
            phone, email, or social media, and we'll respond promptly. Your
            feedback and inquiries are important to us, and we look forward to
            engaging with you soon.`}
          </p>
          <div className="flex justify-center mt-8">
            <Link
              href="/contact-us"
              className="btn mt-4 yellow-bg text-white text-lg flex justify-center items-center gap-2 group"
            >
              Get In Touch{" "}
              <BiRightArrowAlt
                size={25}
                className="transition-all duration-700 group-hover:translate-x-3"
              />
            </Link>
          </div>
        </div>
      </Scrolln>
    </section>
  );
};

export default GetInTouch;

"use client";
import Scrolln from "@/components/animation/Scrolln";
import Image from "next/image";
import Link from "next/link";
import { BiRightArrowAlt } from "react-icons/bi";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
const Page = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PK
      )
      .then(
        (result) => {
          // show the user a success message
        },
        (error) => {
          // show the user an error
          alert(error);
        }
      );
  };
  return (
    <>
      <section className=" zinc-bg text-white py-8">
        <Scrolln width="100%">
          <div className="container mx-auto lg:px-36 md:px-20 px-10 pb-14 pt-4">
            <h1 className="text-[10px] color">
              <Link href="/" className="hover:underline">
                home
              </Link>{" "}
              <span className="mx-2">{`//`}</span>{" "}
              <span className="yellow-text font-bold">contact us</span>{" "}
            </h1>
            <div className="text-5xl pt-8 lg:w-8/12 w-full lg:text-left md:text-left text-center">
              <h1 style={{ lineHeight: "55px" }}>
                Empowering Success in the Digital Realm
              </h1>
            </div>
            <p className="lg:w-6/12 mt-4 lg:text-left md:text-left text-center">
              At TechSavy Group, we are your strategic partners on the journey
              to achieving online excellence. We don&#39;t just provide digital
              solutions; we empower your success in the digital realm.
            </p>
          </div>
        </Scrolln>
      </section>
      <section className="section py-20">
        <Scrolln width="100%">
          <div className="container mx-auto lg:px-10 md:flex ">
            <div className="lg:w-6/12 w-full hidden md:block ">
              <Image
                className="mx-auto "
                src={"/assets/examImg.jpg"}
                height={500}
                width={400}
                alt="seo"
              />
            </div>
            <div className=" lg:w-6/12 w-full px-10 ">
              <h1 className="text-2xl font-bold text-center md:text-left">
                Contact Us
              </h1>
              <form className="mt-2" ref={form} onSubmit={sendEmail}>
                <div className="flex flex-col  py-2">
                  <labe className=" py-2 ml-2 text-xs text-gray-700 font-bold ">
                    Name
                  </labe>
                  <input
                    name="from_name"
                    type="text"
                    className="rounded px-5 py-2 border lg:w-8/12 "
                    placeholder="Enter Your Name"
                  />
                </div>
                <div className="flex flex-col  py-2">
                  <labe className=" py-2 ml-2 text-xs text-gray-700 font-bold ">
                    Email
                  </labe>
                  <input
                    name="user_email"
                    type="Email"
                    className="rounded px-5 py-2 border lg:w-8/12 "
                    placeholder="example@gmail.com"
                  />
                </div>
                <div className="flex flex-col py-2 ">
                  <labe className=" py-2 text-xs ml-2 text-gray-700 font-bold ">
                    Subject
                  </labe>

                  <input
                    className="rounded px-5 py-2 border lg:w-8/12 "
                    placeholder="Subject"
                  />
                </div>
                <div className="flex flex-col py-2 ">
                  <labe className=" py-2 text-xs ml-2 text-gray-700 font-bold ">
                    Query
                  </labe>
                  <textarea
                    name="message"
                    rows={4}
                    type="text"
                    className="rounded px-5 py-2 border lg:w-8/12 "
                    placeholder="write..."
                  />
                </div>
                <div className=" flex justify-center lg:justify-start md:justify-start">
                  <button className="btn  lg:mt-10 mt-0 yellow-bg text-white  text-sm  md:text-lg flex  justify-center items-center gap-2 group ">
                    Send{" "}
                    <BiRightArrowAlt
                      size={22}
                      className="transition-all duration-700 group-hover:translate-x-3"
                    />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Scrolln>
      </section>
    </>
  );
};

export default Page;

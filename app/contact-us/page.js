"use client";
import Scrolln from "@/components/animation/Scrolln";
import Image from "next/image";
import Link from "next/link";
import { BiRightArrowAlt } from "react-icons/bi";
import React, { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import YellowDot from "@/components/YellowDot";
const Page = () => {
  const formRef = useRef();
  const form = useForm();
  const { register, control, handleSubmit, formState, reset } = form;
  const { errors } = formState;

  const submitFun = (data) => {
    // e.preventDefault();
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PK
      )
      .then(
        (result) => {
          reset();
          toast.success("Email sent successfully 📨", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
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
      <div className="toast-container">
        <ToastContainer limit={2} />
      </div>

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
                Empowering Success in the Digital Realm  <YellowDot/>
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
      <section className=" py-20">
        <Scrolln width="100%">
          <div className="container mx-auto lg:px-10 md:flex  items-center  ">
            <div className="lg:w-6/12 md:w-5/12  w-full hidden md:block ">
              <Image
                className="mx-auto "
                src={"/contact.svg"}
                height={400}
                width={400}
                alt="Contact TechSavy Group"
              />
            </div>
            <div className=" lg:w-6/12 md:w-7/12 w-full px-10 zinc-text ">
             
              <form
                className="mt-2 text-sm  shadow-lg border rounded-lg py-10 px-6 tracking-wider "
                ref={formRef}
                onSubmit={handleSubmit(submitFun)}
                noValidate
              >
                 <h1 className="text-2xl font-bold text-center md:text-left ">
                Contact Us <YellowDot/>
              </h1>
                <div className="flex flex-col  py-2">
                  <labe className=" py-2 ml-2 text-xs text-gray-700 font-bold ">
                    Name
                  </labe>
                  <input
                    name="from_name"
                    type="text"
                    className="rounded px-5 py-2 border form-input "
                    placeholder="Your Name"
                    {...register("from_name", {
                      required: "Username is required",
                    })}
                  />
                  <p className="text-red-400 text-xs mt-2">
                    {errors.from_name?.message}
                  </p>
                </div>
                <div className="flex flex-col  py-2">
                  <labe className=" py-2 ml-2 text-xs text-gray-700 font-bold ">
                    Email
                  </labe>
                  <input
                    name="user_email"
                    type="Email"
                    className="rounded px-5 py-2 border  form-input "
                    placeholder="example@gmail.com"
                    {...register("user_email", {
                      required: "email is required",
                      pattern: {
                        value: /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/,
                        message: "Ïnvalid email format",
                      },
                    })}
                  />
                  <p className="text-red-400 text-xs mt-2">
                    {errors.user_email?.message}
                  </p>
                </div>
                <div className="flex flex-col py-2 ">
                  <labe className=" py-2 text-xs ml-2 text-gray-700 font-bold ">
                    Query
                  </labe>
                  <textarea
                    name="message"
                    rows={4}
                    type="text"
                    className="rounded px-5 py-2 border form-input "
                    placeholder="write..."
                    {...register("message", {
                      required: "Please enter your query",
                    })}
                  />
                  <p className="text-red-400 text-xs mt-2">
                    {errors.message?.message}
                  </p>
                </div>
                <div className=" flex justify-center lg:justify-end ">
                  <button className="btn  lg:mt-4 mt-0 yellow-bg text-white  text-sm  md:text-md flex  justify-center items-center gap-2 group ">
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

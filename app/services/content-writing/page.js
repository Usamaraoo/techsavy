import Image from "next/image";
import Scrolln from "@/components/animation/Scrolln";
import Link from "next/link";
import GetInTouch from "@/components/GetInTouch";
import { ServiceDescription } from "@/components/ServiceDescription";

const contentWriting = () => {
  return (
    <>
      <section className=" zinc-bg text-white  px-36">
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
              <span className="yellow-text font-bold ">Content Writing</span>{" "}
            </h1>
            <div className="text-5xl pt-8">
              <h1 className="mt-4 font-[500] dot-title"> Content Writing</h1>
            </div>
            <p className="lg:w-6/12 mt-4">
              Our skilled writers craft compelling, SEO-optimized content that
              resonates with your audience, turning visitors into customers.
            </p>
          </div>
        </Scrolln>
      </section>
      <ServiceDescription
        title="Compelling Content That Speaks to Your Audience&#39;s Needs"
        des="Your audience deserves content that resonates. Our dedicated writers craft content that
        empathetically addresses their needs, engaging and converting visitors into loyal advocates."
        img={"/assets/serviceImgs/Content_writing.svg"}
      />
      <GetInTouch />
    </>
  );
};

export default contentWriting;

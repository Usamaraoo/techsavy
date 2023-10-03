import Image from "next/image";
import Scrolln from "@/components/animation/Scrolln";
import Link from "next/link";
import GetInTouch from "@/components/GetInTouch";
import { ServiceDescription } from "@/components/ServiceDescription";

const socialMediaMakerting = () => {
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
              <span className="yellow-text font-bold ">
                Social Media Marketing
              </span>{" "}
            </h1>
            <div className="text-5xl pt-8">
              <h1 className="mt-4 font-[500] dot-title">
                {" "}
                Social Media Marketing
              </h1>
            </div>
            <p className="lg:w-6/12 mt-4">
              Harness the power of social media to engage your audience and
              boost brand visibility with strategic campaigns and content that
              resonate.
            </p>
          </div>
        </Scrolln>
      </section>
      <ServiceDescription
        title="Fostering Authentic Connections in the Digital World"
        des="In today&#39;s digital landscape, authentic connections matter more than ever. Our social media
experts craft strategies that engage your audience, enhance brand visibility, and build
meaningful relationships."
        img={"/assets/serviceImgs/Social_media.svg"}
      />
      <GetInTouch />
    </>
  );
};

export default socialMediaMakerting;

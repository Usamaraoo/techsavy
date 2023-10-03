import Image from "next/image";
import Scrolln from "@/components/animation/Scrolln";
import Link from "next/link";
import GetInTouch from "@/components/GetInTouch";

const webDevelopment = () => {
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
              <span className="yellow-text font-bold ">Web Development</span>{" "}
            </h1>
            <div className="text-5xl pt-8">
              <h1 className="mt-4 font-[500] dot-title"> Web Development</h1>
            </div>
            <p className="lg:w-6/12 mt-4">
              We accelerate eCommerce sales across all channels through the
              combination of best in class advertising capabilities, innovative
              brand building, and operational excellence.
            </p>
          </div>
        </Scrolln>
      </section>
      <ServiceDescription
        title=" Crafting Digital Solutions for a Seamless User Journey"
        des="Your online success matters to us. Our web development experts
        ensure your website provides a smooth and captivating
        experience, combining design and functionality to connect with
        your audience effortlessly."
        img={"/assets/serviceImgs/Web_development.svg"}
      />
      <GetInTouch />
    </>
  );
};

export default webDevelopment;

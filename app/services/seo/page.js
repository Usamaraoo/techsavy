import Image from "next/image";
import Scrolln from "@/components/animation/Scrolln";
import Link from "next/link";
import GetInTouch from "@/components/GetInTouch";
import { ServiceDescription } from "@/components/ServiceDescription";

const seo = () => {
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
              <span className="yellow-text font-bold ">SEO</span>{" "}
            </h1>
            <div className="text-5xl pt-8">
              <h1 className="mt-4 font-[500] dot-title"> SEO</h1>
            </div>
            <p className="lg:w-6/12 mt-4">
              Rise to the top of search engine results and increase organic
              traffic with proven techniques that enhance visibility and drive
              sustainable growth.
            </p>
          </div>
        </Scrolln>
      </section>
      <ServiceDescription
        title="Boosting Your Visibility for a Brighter Digital Future"
        des="We understand the importance of visibility. Our SEO strategies are designed to boost your
        online presence, drive organic growth, and ensure your business shines brightly in the digital
        realm."
        img={"/assets/serviceImgs/Seo.svg"}
      />
  
      <GetInTouch />
    </>
  );
};

export default seo;

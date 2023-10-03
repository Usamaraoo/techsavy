import Image from "next/image";
import Scrolln from "@/components/animation/Scrolln";
import Link from "next/link";
import GetInTouch from "@/components/GetInTouch";
import { ServiceDescription } from "@/components/ServiceDescription";

const uiux = () => {
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
              <span className="yellow-text font-bold ">UI/UX</span>{" "}
            </h1>
            <div className="text-5xl pt-8">
              <h1 className="mt-4 font-[500] dot-title"> UI/UX</h1>
            </div>
            <p className="lg:w-6/12 mt-4">
              User-centric design is at the heart of our digital solutions. We
              create intuitive interfaces and seamless experiences that keep
              your customers coming back.
            </p>
          </div>
        </Scrolln>
      </section>
      <ServiceDescription
        title="Designing Experiences That Put Your Users First"
        des="User satisfaction is paramount. Our UI/UX experts create intuitive designs and seamless
        experiences that prioritize your users&#39; needs, ensuring they return for more."
        img={"/assets/serviceImgs/UIUX.svg"}
      />
      <GetInTouch />
    </>
  );
};

export default uiux;

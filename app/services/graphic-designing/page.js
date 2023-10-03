import Image from "next/image";
import Scrolln from "@/components/animation/Scrolln";
import { BiRightArrowAlt } from "react-icons/bi";
import Link from "next/link";
import GetInTouch from "@/components/GetInTouch";
import { ServiceDescription } from "@/components/ServiceDescription";

const graphicDesigning = () => {
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
              <span className="yellow-text font-bold ">Graphic Design</span>{" "}
            </h1>
            <div className="text-5xl pt-8">
              <h1 className="mt-4 font-[500] dot-title"> Graphic Design</h1>
            </div>
            <p className="lg:w-6/12 mt-4">
              Our creative wizards breathe life into your brand with captivating
              visuals, logos, and custom illustrations that make a lasting
              impact.
            </p>
          </div>
        </Scrolln>
      </section>
      <ServiceDescription
        title="Visual Storytelling Tailored to Your Brand&#39;s Heart"
        des="  Every visual we create carries the essence of your brand. Our
        designers breathe life into your vision, crafting designs that
        resonate deeply and leave a lasting imprint on your
        audience&#39;s hearts."
        img={"/assets/serviceImgs/Graphic_Design_1.svg"}
      />
    
      <GetInTouch />
    </>
  );
};

export default graphicDesigning;

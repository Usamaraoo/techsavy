import Image from "next/image";
import Scrolln from "@/components/animation/Scrolln";
import { BiRightArrowAlt } from "react-icons/bi";
import Link from "next/link";
import GetInTouch from "@/components/GetInTouch";
import { ServiceDescription } from "@/components/ServiceDescription";

const emailMarkting = () => {
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
              <span className="yellow-text font-bold ">Email Marketing</span>{" "}
            </h1>
            <div className="text-5xl pt-8">
              <h1 className="mt-4 font-[500] dot-title"> Email Marketing</h1>
            </div>
            <p className="lg:w-6/12 mt-4">
              Keep your audience informed and engaged with personalized email
              marketing strategies that convert and foster customer loyalty.
            </p>
          </div>
        </Scrolln>
      </section>
      <ServiceDescription
        title="Nurturing Relationships, One Personalized Email at a Time"
        des="Relationships are at the core of business success. Our email marketing strategies not only
        convert leads but also nurture long-lasting connections, making each customer feel valued."
        img={"/assets/serviceImgs/Email_Marketing.svg"}
      />
 
      <GetInTouch />
    </>
  );
};

export default emailMarkting;

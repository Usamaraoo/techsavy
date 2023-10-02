import YellowDot from "@/components/YellowDot";
import Image from "next/image";
import Scrolln from "@/components/animation/Scrolln";
import { BiRightArrowAlt } from "react-icons/bi";
import Link from "next/link";
import GetInTouch from "@/components/GetInTouch";

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
              <h1 className="mt-4 font-[500]">
                {" "}
                Email Marketing
                <YellowDot />
              </h1>
            </div>
            <p className="lg:w-6/12 mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam
            </p>
          </div>
        </Scrolln>
      </section>
      <section className="section  py-1">
        <Scrolln width="100%">
          <div className="container mx-auto">
            <h1
              style={{ lineHeight: "75px" }}
              className=" text-center lg:text-5xl text-4xl zinc-text lg:w-8/12  font-bold mx-auto "
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae <YellowDot />
            </h1>
          </div>
        </Scrolln>
        <Scrolln width="100%">
          <div className="container mx-auto flex justify-center gap-9 items-center mt-10">
            <div className="w-6/12 flex justify-end">
              <Image
                src={"/assets/serviceImgs/Email_Marketing.svg"}
                height={500}
                width={400}
                alt="Email marketing by TechSavy Group"
              />
            </div>

            <div>
              <div className="lg:w-8/12 ">
                <p className="text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime mollitia, molestiae
                </p>
                <p className="font-medium">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime mollitia, molestiae
                </p>
              </div>
            </div>
          </div>
        </Scrolln>
      </section>
      <GetInTouch />
    </>
  );
};

export default emailMarkting;

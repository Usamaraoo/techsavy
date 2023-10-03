import Image from "next/image";
import Scrolln from "@/components/animation/Scrolln";
import Link from "next/link";
import GetInTouch from "@/components/GetInTouch";
import { ServiceDescription } from "@/components/ServiceDescription";

const mediabuying = () => {
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
              <span className="yellow-text font-bold ">Media Buying</span>{" "}
            </h1>
            <div className="text-5xl pt-8">
              <h1 className="mt-4 font-[500] dot-title"> Media Buying</h1>
            </div>
            <p className="lg:w-6/12 mt-4">
              Gain instant visibility where it matters most. We manage PPC
              campaigns, ensuring you reach your target audience effectively.
            </p>
          </div>
        </Scrolln>
      </section>
      <ServiceDescription
        title="Precision Advertising to Amplify Your Message"
        des=" Your message deserves the spotlight. We handle PPC campaigns
        with precision, ensuring your voice reaches the right audience
        on platforms like Facebook and Google Ads, making a meaningful
        impact."
        img={"/assets/serviceImgs/ppc.svg"}
      />
      <GetInTouch />
    </>
  );
};

export default mediabuying;

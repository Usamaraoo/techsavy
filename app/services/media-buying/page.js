import Image from "next/image";
import Scrolln from "@/components/animation/Scrolln";
import Link from "next/link";
import GetInTouch from "@/components/GetInTouch";
import { ServiceDescription } from "@/components/ServiceDescription";
import { HeroSection } from "@/components/HeroSection";

const mediabuying = () => {
  return (
    <>
      <HeroSection
        route="Media Buying"
        title="Media Buying"
        des="Gain instant visibility where it matters most. We manage PPC
        campaigns, ensuring you reach your target audience effectively."
      />
     
     
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

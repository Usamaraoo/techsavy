import Image from "next/image";
import Scrolln from "@/components/animation/Scrolln";
import Link from "next/link";
import GetInTouch from "@/components/GetInTouch";
import { ServiceDescription } from "@/components/ServiceDescription";
import { HeroSection } from "@/components/HeroSection";

export const metadata = {
  title: "Web Development || TechSavy Group",
  description:
    `We accelerate eCommerce sales across all channels through the
    combination of best in class advertising capabilities, innovative
    brand building, and operational excellence.`,
};

const webDevelopment = () => {
  return (
    <>
      <HeroSection
        route="Web Development"
        title="Web Development"
        des="We accelerate eCommerce sales across all channels through the
        combination of best in class advertising capabilities, innovative
        brand building, and operational excellence."
      />

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

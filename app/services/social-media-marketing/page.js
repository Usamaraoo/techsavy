import Image from "next/image";
import Scrolln from "@/components/animation/Scrolln";
import Link from "next/link";
import GetInTouch from "@/components/GetInTouch";
import { ServiceDescription } from "@/components/ServiceDescription";
import { HeroSection } from "@/components/HeroSection";

const socialMediaMakerting = () => {
  return (
    <>
      <HeroSection
      route='Social Media Marketing'
        title="Social Media Marketing"
        des="Harness the power of social media to engage your audience and boost
            brand visibility with strategic campaigns and content that resonate."
      />
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

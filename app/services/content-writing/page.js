import Image from "next/image";
import Scrolln from "@/components/animation/Scrolln";
import Link from "next/link";
import GetInTouch from "@/components/GetInTouch";
import { ServiceDescription } from "@/components/ServiceDescription";
import { HeroSection } from "@/components/HeroSection";


export const metadata = {
  title: "Content Writing || TechSavy Group",
  description:
    `Our skilled writers craft compelling, SEO-optimized content that
    resonates with your audience, turning visitors into customers.`,
};

const contentWriting = () => {
  return (
    <>
      <HeroSection
        route="Content Writing"
        title="Content Writing"
        des="Our skilled writers craft compelling, SEO-optimized content that
        resonates with your audience, turning visitors into customers."
      />
      <ServiceDescription
        title="Compelling Content That Speaks to Your Audience&#39;s Needs"
        des="Your audience deserves content that resonates. Our dedicated writers craft content that
        empathetically addresses their needs, engaging and converting visitors into loyal advocates."
        img={"/assets/serviceImgs/Content_writing.svg"}
      />
      <GetInTouch />
    </>
  );
};

export default contentWriting;

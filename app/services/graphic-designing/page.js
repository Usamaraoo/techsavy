import Image from "next/image";
import Scrolln from "@/components/animation/Scrolln";
import { BiRightArrowAlt } from "react-icons/bi";
import Link from "next/link";
import GetInTouch from "@/components/GetInTouch";
import { ServiceDescription } from "@/components/ServiceDescription";
import { HeroSection } from "@/components/HeroSection";

export const metadata = {
  title: "Graphic Design || TechSavy Group",
  description:
    `Our creative wizards breathe life into your brand with captivating
    visuals, logos, and custom illustrations that make a lasting
    impact.`,
};

const graphicDesigning = () => {
  return (
    <>
       <HeroSection
        route="Graphic Design"
        title="Graphic Design"
        des=" Our creative wizards breathe life into your brand with captivating
        visuals, logos, and custom illustrations that make a lasting
        impact."
      />
   
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

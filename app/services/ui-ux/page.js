import Image from "next/image";
import Scrolln from "@/components/animation/Scrolln";
import Link from "next/link";
import GetInTouch from "@/components/GetInTouch";
import { ServiceDescription } from "@/components/ServiceDescription";
import { HeroSection } from "@/components/HeroSection";

const uiux = () => {
  return (
    <>
       <HeroSection
        route="UI/UX"
        title="UI/UX"
        des=" User-centric design is at the heart of our digital solutions. We
        create intuitive interfaces and seamless experiences that keep
        your customers coming back."
      />
      
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

import Image from "next/image";
import Scrolln from "@/components/animation/Scrolln";
import { BiRightArrowAlt } from "react-icons/bi";
import Link from "next/link";
import GetInTouch from "@/components/GetInTouch";
import { ServiceDescription } from "@/components/ServiceDescription";
import { HeroSection } from "@/components/HeroSection";

export const metadata = {
  title: "Email Marketing || TechSavy Group",
  description:
    `Keep your audience informed and engaged with personalized email
    marketing strategies that convert and foster customer loyalty.`,
};

const emailMarkting = () => {
  return (
    <>
     <HeroSection
        route="Email Marketing"
        title="Email Marketing"
        des="Keep your audience informed and engaged with personalized email
        marketing strategies that convert and foster customer loyalty."
      />
    
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

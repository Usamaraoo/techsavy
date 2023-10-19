import Image from "next/image";
import Scrolln from "@/components/animation/Scrolln";
import Link from "next/link";
import GetInTouch from "@/components/GetInTouch";
import { ServiceDescription } from "@/components/ServiceDescription";
import { HeroSection } from "@/components/HeroSection";

export const metadata = {
  title: "SEO || TechSavy Group",
  description:
    `Rise to the top of search engine results and increase organic
    traffic with proven techniques that enhance visibility and drive
    sustainable growth.`,
};

const seo = () => {
  return (
    <>
      <HeroSection
        route="SEO"
        title="SEO"
        des="Rise to the top of search engine results and increase organic
        traffic with proven techniques that enhance visibility and drive
        sustainable growth."
      />
    
      <ServiceDescription
        title="Boosting Your Visibility for a Brighter Digital Future"
        des="We understand the importance of visibility. Our SEO strategies are designed to boost your
        online presence, drive organic growth, and ensure your business shines brightly in the digital
        realm."
        img={"/assets/serviceImgs/Seo.svg"}
      />

      <GetInTouch />
    </>
  );
};

export default seo;

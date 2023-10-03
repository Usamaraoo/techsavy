import Image from "next/image";
import React from "react";
import Scrolln from "./animation/Scrolln";

export const ServiceDescription = ({title,des,img}) => {
  return (
    <section className="section  py-10 px-10 ">
      <Scrolln width="100%">
        <div className="container mx-auto">
          <h1
            style={{ lineHeight: "75px" }}
            className="dot-title text-center lg:text-5xl text-4xl zinc-text lg:w-8/12  font-bold mx-auto "
          >
            {title}
          </h1>
        </div>
      </Scrolln>
      <Scrolln width="100%">
        <div className="container mx-auto flex justify-center gap-9 items-center mt-10">
          <div className="w-4/12 flex justify-end">
            <Image
              src={img}
              height={500}
              width={400}
              alt="Social Media Services by TechSavy Group"
            />
          </div>

            <div className="lg:w-4/12 md:w-6/12 ">
              <p className="text-lg">{des}</p>
            </div>
        </div>
      </Scrolln>
    </section>
  );
};

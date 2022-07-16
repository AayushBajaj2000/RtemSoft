import React from "react";
import Image from "next/image";
import SliderContainer, { SliderItem } from "./sliderTesting";

const images = [
  "/logos/CYBERWORKS_SVG.svg",
  "/logos/GLOBE_SVG.svg",
  "/logos/IBM_SVG.svg",
  "/logos/MOBILEINNO_SVG.svg",
  "/logos/NORTHLINE_SVG.svg",
  "/logos/NSERC_SVG.svg",
  "/logos/QA_SVG.svg",
  "/logos/QNX_SVG.svg",
  "/logos/SMARTCONE_SVG.svg",
  "/logos/UOIT_SVG.svg",
  "/logos/WINDMILLFARMS_SVG.svg",
];

const ClientLogos = () => {
  return (
    <>
      <SliderContainer initialOffsetX={0}>
        {images.map((image, index) => (
          <SliderItem key={index} width={300}>
            <Image
              key={index}
              src={image}
              alt="client logo"
              width={300}
              height={200}
              objectFit="contain"
            />
          </SliderItem>
        ))}
      </SliderContainer>
    </>
  );
};

export default ClientLogos;

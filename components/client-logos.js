import React from "react";
import Image from "next/image";
import SliderContainer, { SliderItem } from "./slider";

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
        <div className="mb-[100px]">
            <section className="pt-28 bg-gray-50">
                <div className="container mx-auto overflow-hidden md:px-4">
                    <h1 className="text-4xl font-extrabold tracking-tight text-center text-gray-900 sm:text-5xl">
                        <span className="block text-center xl:inline ">
                            Our Industrial Sponsors
                        </span>
                    </h1>
                    <p className="mt-3 text-justify text-gray-500 sm:mt-5 sm:text-lg md:mt-5 md:text-lg md:px-[50px] p-6 xs:p-0">
                        The research group heavily interacts with industry
                        through industrial collaborations. The list of current
                        and past research partners include: IBM Canada,
                        BlackBerry QNX, QA Consulting, Novaerial Robotics,
                        Greenwood Mushroom Farm, Cyberworks Robotics, Smartcone
                        Technologies, NorthLine Canada, Mobile Innovations, and
                        Measurements International. Our research is supported by
                        NSERC and Ontario Tech University.
                    </p>
                </div>
            </section>
            <SliderContainer initialOffsetX={0}>
                {images.map((image, index) => (
                    <SliderItem key={index} width={200}>
                        <Image
                            key={index}
                            src={image}
                            alt="client logo"
                            width={150}
                            height={150}
                            objectFit="contain"
                            style={{
                                filter: "grayscale(100%)",
                            }}
                        />
                    </SliderItem>
                ))}
            </SliderContainer>
            <SliderContainer initialOffsetX={600}>
                {images.map((image, index) => (
                    <SliderItem key={index} width={200}>
                        <Image
                            key={index}
                            src={image}
                            alt="client logo"
                            width={150}
                            height={150}
                            objectFit="contain"
                            style={{
                                filter: "grayscale(100%)",
                            }}
                        />
                    </SliderItem>
                ))}
            </SliderContainer>
        </div>
    );
};

export default ClientLogos;

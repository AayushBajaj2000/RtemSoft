import React from "react";
const width = "w-[150px] grayscale";

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

const LogoCloud = () => {
    return (
        <section className="pt-28 pb-32 bg-gray-50 overflow-hidden">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl text-center">
                    <span className="block xl:inline text-center ">
                        Our Industrial Sponsors
                    </span>
                </h1>
                <p className="mt-3 text-center text-gray-500 sm:mt-5 sm:text-lg md:mt-5 md:text-lg md:px-[50px]">
                    The research group heavily interacts with industry through
                    industrial collaborations. The list of current and past
                    research partners include: IBM Canada, BlackBerry QNX, QA
                    Consulting, Novaerial Robotics, Greenwood Mushroom Farm,
                    Cyberworks Robotics, Smartcone Technologies, NorthLine
                    Canada, Mobile Innovations, and Measurements International.
                    Our research is supported by NSERC and Ontario Tech
                    University.
                </p>
                <div className="flex flex-wrap justify-center m-10">
                    {images.map((image, index) => (
                        <div className="w-auto p-8" key={index}>
                            <img src={image} alt="" className={width} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LogoCloud;

import React, { useRef, useEffect } from "react";
const width = "h-[200px] grayscale inline-block";

const LogoCloud = () => {
    let logoContainer = useRef();
    let logos = useRef();
    const [images, setImages] = React.useState([
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
    ]);

    useEffect(() => {
        const logo = logoContainer?.current;

        setInterval(() => {
            if (logo.scrollLeft >= logo.scrollWidth - logo.clientWidth) {
                logo.scrollLeft = 0;
            }
            logo.scrollLeft += 1.5;
        }, 30);

        return () => {
            clearInterval();
        };
    }, []);

    return (
        <section className="pt-28 pb-32 bg-gray-50">
            <div className="container mx-auto px-4 overflow-hidden">
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
                <div ref={logoContainer} className="overflow-x-hidden">
                    <div className="m-10 w-max h-[300px]" ref={logos}>
                        {images.map((image, index) => (
                            <div className="p-8 inline-flex" key={index}>
                                <img src={image} alt="" className={width} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LogoCloud;

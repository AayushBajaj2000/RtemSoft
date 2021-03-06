/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon, ArrowRightIcon } from "@heroicons/react/outline";
import Image from "next/image";
import CenterScreen from "../utils/CenterScreen";

const navigation = [
    { name: "Projects", href: "#" },
    { name: "People", href: "#" },
    { name: "Prototypes", href: "#" },
    { name: "Publications", href: "#" },
    { name: "Openings", href: "#" },
    { name: "Contact", href: "#" },
];

function Hero() {
    return (
        <CenterScreen>
            <div className="w-full  grid gap-4 grid-cols-1 lg:grid-cols-2">
                <div className="w-full flex justify-center flex-col p-[20px]">
                    <h1 className="sm:mx-auto text-3xl sm:text-4xl md:text-5xl tracking-tight font-extrabold text-gray-900 ">
                        <span className="block xl:inline">
                            Real-Time Embedded
                        </span>{" "}
                        <span className="block text-indigo-600 xl:inline">
                            Software Research (RTEMSOFT) Lab
                        </span>
                    </h1>

                    <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-[15px] lg:mx-0">
                        The Real-Time Embedded Software Research (RTEMSOFT) Lab
                        at Ontario Tech University (Oshawa, Canada) conducts
                        advanced research in embedded systems related design and
                        experimentation. This lab is involved in research on
                        methodologies, design, verification, validation, and
                        prototype implementation of embedded systems. This
                        research group collaborates with different industry
                        partners on tools and techniques to serve the embedded
                        systems community. Students make extensive use of
                        development platforms interfacing them with external
                        hardware for different research projects. Currently, the
                        research members are investigating many exciting and
                        cutting-edge research problems integrating hardware and
                        software systems.
                    </p>
                    <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                        <div className="rounded-md shadow">
                            <a
                                href="#"
                                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                            >
                                See openings
                                <span>
                                    <ArrowRightIcon className="h-[20px] ml-2 pt-1" />
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="w-full flex items-center h-[400px] lg:h-[700px] back_image"></div>
            </div>
        </CenterScreen>
    );
}

export default Hero;

import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import CenterScreen from "../utils/CenterScreen";
import Link from "next/link";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon, ArrowRightIcon } from "@heroicons/react/outline";

const navigation = [
    { name: "Projects", href: "/projects" },
    { name: "People", href: "/people" },
    { name: "Prototypes", href: "/prototypes" },
    { name: "Publications", href: "/publications" },
    { name: "Openings", href: "/openings" },
    { name: "Contact", href: "/contact" },
];

const Navbar = () => {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else {
                handleShow(false);
            }
        });
    }, []);

    return (
        <>
            <div
                className={`w-full h-[80px] fixed top-0 bg-white z-20 transition-all ${
                    show && "shadow-md"
                }`}
            >
                <div className="justify-center flex h-[100%] items-center p-[20px]">
                    <div
                        className="flex-1 justify-center"
                        style={{
                            maxWidth: "1400px",
                        }}
                    >
                        <div className="flex justify-between items-center">
                            <Link href="/">
                                <img
                                    className="h-8 w-auto sm:h-14 hover:cursor-pointer"
                                    src="/logos/RTEMSOFT_SVG_NOTEXT.svg"
                                />
                            </Link>

                            <div className="flex">
                                {navigation.map((item, index) => {
                                    return (
                                        <Link key={index} href={item.href}>
                                            <a className="mx-[10px] font-medium text-gray-600">
                                                {item.name}
                                            </a>
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;

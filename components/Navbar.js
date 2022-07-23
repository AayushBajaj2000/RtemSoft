import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import CenterScreen from "../utils/CenterScreen";
import Link from "next/link";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon, ArrowRightIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";

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
  const router = useRouter();

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
                      <a
                        className={`mx-[10px] font-medium transition-all text-gray-600 relative line_before ${
                          router.asPath === item.href &&
                          "text-[#4338ca] font-bold line_after"
                        }`}
                      >
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

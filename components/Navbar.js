import React, { useEffect, useState, useContext, Fragment } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Popover, Transition } from "@headlessui/react";
import {
    MenuIcon,
    PhoneIcon,
    XIcon,
    HomeIcon,
    PresentationChartLineIcon,
    UserGroupIcon,
    ViewGridAddIcon,
} from "@heroicons/react/outline";

const navigation = [
    { name: "Home", href: "/", icon: HomeIcon },
    { name: "Projects", href: "/projects", icon: PresentationChartLineIcon },
    { name: "People", href: "/people", icon: UserGroupIcon },
    { name: "Prototypes", href: "/prototypes", icon: ViewGridAddIcon },
    {
        name: "Publications",
        href: "/publications",
        icon: PresentationChartLineIcon,
    },
    { name: "Contact", href: "/contact", icon: PhoneIcon },
];

const handleUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
};

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
            <Popover className="relative bg-white">
                <div
                    className={`w-full h-[80px] fixed top-0 bg-white z-20  ${
                        show && "shadow-md"
                    }`}
                >
                    <div className=" flex h-[100%]  justify-center items-center p-[20px] ">
                        <div
                            className="justify-center flex-1"
                            style={{
                                maxWidth: "1400px",
                            }}
                        >
                            <div className="flex items-center justify-between">
                                <Link href="/">
                                    <img
                                        className="w-auto h-14 hover:cursor-pointer"
                                        src="/logos/RTEMSOFT_SVG_NOTEXT.svg"
                                    />
                                </Link>

                                <div className="hidden md:flex ">
                                    {navigation.map((item, index) => {
                                        return (
                                            <Link key={index} href={item.href}>
                                                <a
                                                    className={`mx-[10px] font-medium transition-all text-gray-600 relative line_before ${
                                                        router.asPath ===
                                                            item.href &&
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

                        <div className="my-2 -mr-2 md:hidden">
                            <Popover.Button
                                onClick={handleUp}
                                className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                            >
                                <span className="sr-only">Open menu</span>
                                <MenuIcon
                                    className="w-6 h-6"
                                    aria-hidden="true"
                                />
                            </Popover.Button>
                        </div>
                    </div>
                </div>

                <Transition
                    as={Fragment}
                    enter="duration-200 ease-out"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="duration-100 ease-in"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <Popover.Panel
                        focus
                        className="absolute inset-x-0 top-[-80px] p-2 transition origin-top-right transform md:hidden z-[30]"
                    >
                        {({ close }) => (
                            <div className="bg-white divide-y-2 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 divide-gray-50">
                                <div className="px-5 pt-5 pb-6">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <Link href="/">
                                                <img
                                                    className="w-auto h-14 hover:cursor-pointer"
                                                    src="/logos/RTEMSOFT_SVG_NOTEXT.svg"
                                                    onClick={close}
                                                />
                                            </Link>
                                        </div>
                                        <div className="-mr-2">
                                            <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                                <span className="sr-only">
                                                    Close menu
                                                </span>
                                                <XIcon
                                                    className="w-6 h-6"
                                                    aria-hidden="true"
                                                />
                                            </Popover.Button>
                                        </div>
                                    </div>
                                    <div className="mt-6">
                                        <nav className="grid gap-y-8">
                                            {navigation.map((item) => (
                                                <Link
                                                    key={item.name}
                                                    href={item.href}
                                                >
                                                    <a
                                                        className={`flex items-center p-3 -m-3 rounded-md hover:bg-gray-100 ${
                                                            router.asPath ===
                                                                item.href &&
                                                            "bg-gray-100"
                                                        }`}
                                                        onClick={close}
                                                    >
                                                        <item.icon className="flex-shrink-0 w-6 h-6 text-indigo-600" />

                                                        <span className="ml-3 text-base font-medium text-gray-900">
                                                            {item.name}
                                                        </span>
                                                    </a>
                                                </Link>
                                            ))}
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        )}
                    </Popover.Panel>
                </Transition>
            </Popover>
        </>
    );
};

export default Navbar;

/*
<div
        className={`w-full h-[80px] fixed top-0 bg-white z-20  ${
          show && "shadow-md"
        }`}
      >
        <div className=" flex h-[100%] items-center p-[20px]">
          <div
            className="justify-center flex-1"
            style={{
              maxWidth: "1400px",
            }}
          >
            <div className="flex items-center justify-between">
              <Link href="/">
                <img
                  className="w-auto h-8 sm:h-14 hover:cursor-pointer"
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

*/

/*

      <Popover className="relative bg-white">
        <div>
          <div
            className={`w-full h-[80px] fixed top-0 bg-white z-20  ${
              show && "shadow-md"
            }`}
          >
            <div className=" flex h-[100%] items-center p-[20px] ">
              <div
                className="justify-center flex-1"
                style={{
                  maxWidth: "1400px",
                }}
              >
                <div className="flex items-center justify-between">
                  <Link href="/">
                    <img
                      className="w-auto h-8 sm:h-14 hover:cursor-pointer"
                      src="/logos/RTEMSOFT_SVG_NOTEXT.svg"
                    />
                  </Link>

                  <div className="hidden md:flex ">
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
              <div className="my-2 -mr-2 md:hidden">
                <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open menu</span>
                  <MenuIcon className="w-6 h-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
          </div>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute inset-x-0 top-0 p-2 transition origin-top-right transform md:hidden"
          >
            <div className="bg-white divide-y-2 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 divide-gray-50">
              <div className="px-5 pt-5 pb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <Link href="/">
                      <img
                        className="w-auto h-8 sm:h-14 hover:cursor-pointer"
                        src="/logos/RTEMSOFT_SVG_NOTEXT.svg"
                      />
                    </Link>
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="w-6 h-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-8">
                    {solutions.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="flex items-center p-3 -m-3 rounded-md hover:bg-gray-50"
                      >
                        <item.icon
                          className="flex-shrink-0 w-6 h-6 text-indigo-600"
                          aria-hidden="true"
                        />
                        <span className="ml-3 text-base font-medium text-gray-900">
                          {item.name}
                        </span>
                      </a>
                    ))}
                  </nav>
                </div>
              </div>
              <div className="px-5 py-6 space-y-6">
                <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                  <a
                    href="#"
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    Pricing
                  </a>

                  <a
                    href="#"
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    Docs
                  </a>
                  {resources.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-base font-medium text-gray-900 hover:text-gray-700"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div>
                  <a
                    href="#"
                    className="flex items-center justify-center w-full px-4 py-2 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700"
                  >
                    Sign up
                  </a>
                  <p className="mt-6 text-base font-medium text-center text-gray-500">
                    Existing customer?{" "}
                    <a
                      href="#"
                      className="text-indigo-600 hover:text-indigo-500"
                    >
                      Sign in
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>

*/

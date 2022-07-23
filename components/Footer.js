import React from "react";
import CenterScreen from "../utils/CenterScreen";
import Link from "next/link";
import { useRouter } from "next/router";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "People", href: "/people" },
  { name: "Prototypes", href: "/prototypes" },
  { name: "Publications", href: "/publications" },
  { name: "Openings", href: "/openings" },
  { name: "Contact", href: "/contact" },
];

const Footer = () => {
  const router = useRouter();

  return (
    <footer className="flex flex-col p-4 bg-indigo-700 sm:p-6">
      <CenterScreen>
        <div className="flex w-[100%]">
          <div className="mx-auto">
            {navigation.map((item, index) => {
              return (
                <Link key={index} href={item.href}>
                  <a
                    className={`mx-[5px] sm:mx-[15px] relative font-medium text-white line_before_footer  ${
                      router.asPath === item.href &&
                      "text-indigo-300 font-bold line_after_footer"
                    }`}
                  >
                    {item.name}
                  </a>
                </Link>
              );
            })}
          </div>
        </div>

        <div className="mx-auto mt-3">
          <div className="flex mt-4 space-x-6 justify-center mt-0">
            <a
              href="https://twitter.com/rtemsoft"
              className="text-white hover:text-gray-600"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
          </div>
        </div>

        <div className="mx-auto mt-3">
          <p className="text-center text-white">
            © 2022 RTEMSOFT. All Rights Reserved.
          </p>
        </div>
      </CenterScreen>
    </footer>
  );
};

export default Footer;

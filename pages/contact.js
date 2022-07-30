import React, { useState } from "react";
import CenterScreen from "../utils/CenterScreen";
import Heading from "../components/heading_section";

const Contact = () => {
    const [name, setName] = useState();
    const [body, setBody] = useState();

    return (
        <CenterScreen>
            <Heading title={"Contact"} desc="Contact and Openings page." notRounded />
            <div className="p-5 mx-4 bg-white">
                <div className="">
                    <h2
                        className="
                  text-dark
                  mb-6
                  uppercase
                  font-bold
                  text-[32px]
                  sm:text-[40px]
                  lg:text-[36px]
                  xl:text-[40px]
                  "
                    >
                        Openings
                    </h2>
                    <p className="text-base text-body-color leading-relaxed mb-6">
                        Announcement for Prospective Students
                    </p>
                    <h1 className="text-lg font-bold mb-1">Ph.D. and Master’s Positions</h1>
                    <p className="text-base mb-5 text-gray-600">
                        We often have positions for graduate students (MASc or PhD). Interested students email your
                        resume and transcripts in pdf to AKRAMUL AZIM, PHD, PENG (akramul.azim@uoit.ca).
                    </p>
                    <h1 className="text-lg font-bold mb-1">Undergraduate Student Positions</h1>
                    <p className="text-base mb-5 text-gray-600">
                        There are often positions for keen and motivated undergraduate students to participate in the
                        research or project work. Open positions may be available for students who are interested in
                        conducting research with me through: <br />
                        1. MITACS Gloablink <br />
                        2. Undergraduate Research Assistantships (URA) <br />
                        3. Capstone Projects <br />
                        Please send an email to discuss the opportunities for summer positions and course projects.
                    </p>
                </div>
                <section className="py-10 overflow-hidden relative z-10">
                    <div className="container mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div className="">
                                <div className="max-w-[600px] mb-12 lg:mb-0">
                                    <h2
                                        className="
                  text-dark
                  mb-6
                  uppercase
                  font-bold
                  text-[32px]
                  sm:text-[40px]
                  lg:text-[36px]
                  xl:text-[40px]
                  "
                                    >
                                        GET IN TOUCH WITH US
                                    </h2>
                                    <p className="text-base text-body-color leading-relaxed mb-9">
                                        We are looking forward to hearing from you. Please feel free to get in touch via
                                        the contact below, we will get back to you as soon as possible.
                                    </p>
                                    <div className="flex mb-8 max-w-[370px] w-full">
                                        <div
                                            className="
                     max-w-[60px]
                     sm:max-w-[70px]
                     w-full
                     h-[60px]
                     sm:h-[70px]
                     flex
                     items-center
                     justify-center
                     mr-6
                     overflow-hidden
                     bg-indigo-700 bg-opacity-5
                     text-indigo-700
                     rounded
                     "
                                        >
                                            <svg
                                                width="24"
                                                height="24"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                                />
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                                />
                                            </svg>
                                        </div>
                                        <div className="w-full">
                                            <h4 className="font-bold text-dark text-xl mb-1">Our Location</h4>
                                            <p className="text-base text-body-color">
                                                2000 Simcoe Street North, Oshawa, Ontario, L1H7K4
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex mb-8 max-w-[370px] w-full">
                                        <div
                                            className="
                     max-w-[60px]
                     sm:max-w-[70px]
                     w-full
                     h-[60px]
                     sm:h-[70px]
                     flex
                     items-center
                     justify-center
                     mr-6
                     overflow-hidden
                     bg-indigo-700 bg-opacity-5
                     text-indigo-700
                     rounded
                     "
                                        >
                                            <svg width="24" height="24" viewBox="0 0 24 24" className="fill-indigo-700">
                                                <path d="M21.8182 24H16.5584C15.3896 24 14.4156 23.0256 14.4156 21.8563V17.5688C14.4156 17.1401 14.0649 16.7893 13.6364 16.7893H10.4026C9.97403 16.7893 9.62338 17.1401 9.62338 17.5688V21.8173C9.62338 22.9866 8.64935 23.961 7.48052 23.961H2.14286C0.974026 23.961 0 22.9866 0 21.8173V8.21437C0 7.62972 0.311688 7.08404 0.818182 6.77223L11.1039 0.263094C11.6494 -0.0876979 12.3896 -0.0876979 12.9351 0.263094L23.2208 6.77223C23.7273 7.08404 24 7.62972 24 8.21437V21.7783C24 23.0256 23.026 24 21.8182 24ZM10.3636 15.4251H13.5974C14.7662 15.4251 15.7403 16.3995 15.7403 17.5688V21.8173C15.7403 22.246 16.0909 22.5968 16.5195 22.5968H21.8182C22.2468 22.5968 22.5974 22.246 22.5974 21.8173V8.25335C22.5974 8.13642 22.5195 8.01949 22.4416 7.94153L12.1948 1.4324C12.0779 1.35445 11.9221 1.35445 11.8442 1.4324L1.55844 7.94153C1.44156 8.01949 1.4026 8.13642 1.4026 8.25335V21.8563C1.4026 22.285 1.75325 22.6358 2.18182 22.6358H7.48052C7.90909 22.6358 8.25974 22.285 8.25974 21.8563V17.5688C8.22078 16.3995 9.19481 15.4251 10.3636 15.4251Z" />
                                            </svg>
                                        </div>
                                        <div className="w-full">
                                            <h4 className="font-bold text-dark text-xl mb-1">Room Info</h4>
                                            <p className="text-base text-body-color">
                                                Real-Time Embedded Software Research Lab SIRC 3340
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex mb-8 max-w-[370px] w-full">
                                        <div
                                            className="
                     max-w-[60px]
                     sm:max-w-[70px]
                     w-full
                     h-[60px]
                     sm:h-[70px]
                     flex
                     items-center
                     justify-center
                     mr-6
                     overflow-hidden
                     bg-indigo-700 bg-opacity-5
                     text-indigo-700
                     rounded
                     "
                                        >
                                            <svg width="28" height="19" viewBox="0 0 28 19" className="fill-indigo-700">
                                                <path d="M25.3636 0H2.63636C1.18182 0 0 1.16785 0 2.6052V16.3948C0 17.8322 1.18182 19 2.63636 19H25.3636C26.8182 19 28 17.8322 28 16.3948V2.6052C28 1.16785 26.8182 0 25.3636 0ZM25.3636 1.5721C25.5909 1.5721 25.7727 1.61702 25.9545 1.75177L14.6364 8.53428C14.2273 8.75886 13.7727 8.75886 13.3636 8.53428L2.04545 1.75177C2.22727 1.66194 2.40909 1.5721 2.63636 1.5721H25.3636ZM25.3636 17.383H2.63636C2.09091 17.383 1.59091 16.9338 1.59091 16.3499V3.32388L12.5 9.8818C12.9545 10.1513 13.4545 10.2861 13.9545 10.2861C14.4545 10.2861 14.9545 10.1513 15.4091 9.8818L26.3182 3.32388V16.3499C26.4091 16.9338 25.9091 17.383 25.3636 17.383Z" />
                                            </svg>
                                        </div>
                                        <div className="w-full">
                                            <h4 className="font-bold text-dark text-xl mb-1">Email Address</h4>
                                            <p className="text-base text-body-color">
                                                akramul.azim@uoit.ca rtemsoft@googlegroups.com
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <div className="bg-white relative rounded-lg p-8 sm:p-12 shadow-lg">
                                    <form>
                                        <div className="mb-6">
                                            <input
                                                type="text"
                                                placeholder="Your Name"
                                                onChange={(e) => setName(e.target.value)}
                                                value={name}
                                                className="
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[f0f0f0]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-indigo-700
                        "
                                            />
                                        </div>

                                        <div className="mb-6">
                                            <textarea
                                                rows="6"
                                                placeholder="Your Message"
                                                onChange={(e) => setBody(e.target.value)}
                                                value={body}
                                                className="
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[f0f0f0]
                        resize-none
                        outline-none
                        focus-visible:shadow-none
                        focus:border-indigo-700
                        "
                                            ></textarea>
                                        </div>
                                        <div>
                                            <a
                                                href={`mailto:akramul.azim@uoit.ca?subject=Message%20From%20RTEMSOFT%20Website&body=${
                                                    body + "%0A%0A" + "Name: " + name + "%0A%0A"
                                                }`}
                                            >
                                                <button
                                                    type="button"
                                                    className="
                        w-full
                        text-white
                        bg-indigo-700
                        rounded
                        border border-indigo-700
                        p-3
                        transition
                        hover:bg-opacity-90
                        "
                                                >
                                                    Send Message
                                                </button>
                                            </a>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </CenterScreen>
    );
};

export default Contact;

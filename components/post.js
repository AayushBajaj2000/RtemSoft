import React from "react";
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationIcon } from "@heroicons/react/outline";

const truncate = (str) => {
    return str.length > 300 ? str.substring(0, 300) + "..." : str;
};

const Post = ({ date, heading, content, media, key }) => {
    const [open, setOpen] = useState(false);
    const cancelButtonRef = useRef(null);
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div key={key}>
            <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col h-[300px]">
                <p className="h-[20px] text-gray-500 text-xs">{date}</p>
                <div className="h-[95px] flex items-center">
                    <h1 className="font-bold text-black  md:text-2xl">{heading}</h1>
                </div>
                <p className="h-[120px] text-gray-500 text-sm mb-2 md:text-[16px]">{truncate(content)}</p>
                <p
                    onClick={handleOpen}
                    className="hover:cursor-pointer hover:text-indigo-400 h-[20px] text-indigo-600 text-sm font-bold"
                >
                    Read More
                </p>
            </div>

            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-20" initialFocus={cancelButtonRef} onClose={handleClose}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-20 overflow-y-auto">
                        <div className="flex items-end justify-center min-h-full p-4 text-center sm:items-center sm:p-0">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <Dialog.Panel className="relative overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:max-w-2xl sm:w-full">
                                    <div className="px-4 pt-5 pb-4 bg-white sm:p-6 sm:pb-4">
                                        <div className="sm:flex sm:items-start">
                                            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                                <Dialog.Title
                                                    as="h3"
                                                    className="text-lg font-medium leading-6 text-gray-900 md:text-2xl"
                                                >
                                                    {heading}
                                                </Dialog.Title>
                                                <div className="mt-2">
                                                    <p className="text-sm text-gray-500 md:text-md">{content}</p>
                                                </div>
                                                <div className="flex justify-center mt-2">
                                                    {media && <img src={media} width={300} height={300} />}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center w-full px-4 py-2 mt-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                            onClick={handleClose}
                                            ref={cancelButtonRef}
                                        >
                                            Close
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </div>
    );
};

export default Post;

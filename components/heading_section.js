import React from "react";

const Heading = ({ title, desc }) => {
    return (
        <div className="p-2 mt-1">
            <h1 className="text-2xl font-bold md:text-4xl">{title}</h1>
            <p className="text-gray-500 mt-2">{desc}</p>
            <hr className="w-[100%] my-2"></hr>
        </div>
    );
};

export default Heading;

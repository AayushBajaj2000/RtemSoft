import React from "react";

const truncate = (str) => {
    return str.length > 400 ? str.substring(0, 400) + "..." : str;
};

const Post = ({ date, heading, content, media }) => {
    return (
        <div className="p-4 flex flex-col h-[300px]">
            <p className="h-[20px] text-gray-500 text-xs">{date}</p>
            <h1 className="h-[80px] text-black font-bold md:text-2xl">
                {heading}
            </h1>
            <p className="h-[120px] text-gray-500 text-sm mb-2 md:text-[16px]">
                {truncate(content)}
            </p>
            <p className="hover:cursor-pointer hover:text-indigo-400 h-[20px] text-indigo-600 text-sm font-bold">
                Read More
            </p>
        </div>
    );
};

export default Post;

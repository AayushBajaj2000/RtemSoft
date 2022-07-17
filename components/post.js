import React from "react";

const truncate = (str) => {
    return str.length > 400 ? str.substring(0, 400) + "..." : str;
};

const Post = ({ date, heading, content, media }) => {
    return (
        <div className="p-4 flex flex-col h-[200px]">
            <p className="grow-[1] text-gray-500 text-xs">March 16, 2020</p>
            <h1 className="grow-[1] text-black font-bold md:text-2xl">
                Boost your conversion rate
            </h1>
            <p className="grow-[3] text-gray-500 text-sm mb-2 md:text-[16px]">
                {truncate(
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta lacus mi, ut volutpat mauris pellentesque quis. Nulla facilisi. Donec hendrerit nulla ipsum, eget suscipit felis convallis eu. Nulla hendrerit quis odio sit amet convallis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta lacus mi, ut volutpat mauris pellentesque quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta lacus mi, ut volutpat mauris pellentesque quis. Nulla facilisi. Donec hendrerit nulla ipsum, eget suscipit felis convallis eu. Nulla hendrerit quis odio sit amet convallis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta lacus mi, ut volutpat mauris pellentesque quis"
                )}
            </p>
            <p className="grow-[1] text-indigo-600 text-sm font-bold">
                Read More
            </p>
        </div>
    );
};

export default Post;

import React from "react";

const Post = ({ date, heading, content, media }) => {
    return (
        <div className="flex flex-col flex-wrap h-[300px] bg-gray-600">
            <p className="grow-[2] bg-white m-1">Date</p>
            <h1 className="grow-[2] bg-white m-1">Heading</h1>
            <p className="grow-[10] bg-white m-1">
                ContentContentContentContentCont
            </p>
            <p className="bg-white m-1">READ FULL STORY</p>
        </div>
    );
};

export default Post;

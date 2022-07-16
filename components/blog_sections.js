import React from "react";
import Post from "../components/post";

const Blog = () => {
    return (
        <div className="">
            <div>
                <h1>Projects</h1>
                <p>dfghjfghdejkhceklj;jkfevcjefjklfejklfvjlk;</p>
            </div>

            <hr></hr>

            <div className="grid grid-cols-2 gap-4">
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    );
};

export default Blog;

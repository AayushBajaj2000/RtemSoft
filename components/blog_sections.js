import React, { useEffect } from "react";
import Post from "../components/post";
import CenterScreen from "../utils/CenterScreen";

const Blog = () => {
    return (
        <CenterScreen>
            <div>
                <div className="p-4">
                    <h1 className="text-2xl font-bold md:text-4xl">
                        Research Projects
                    </h1>
                    <p className="text-gray-500">
                        Check out some of the projects from our lab.
                    </p>
                    <hr className="w-[90%] my-6"></hr>
                </div>

                <div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                </div>
            </div>
        </CenterScreen>
    );
};

export default Blog;

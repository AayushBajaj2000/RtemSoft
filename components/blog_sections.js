import React, { useEffect } from "react";
import Post from "../components/post";
import CenterScreen from "../utils/CenterScreen";

const Blog = () => {
    const [posts, setPosts] = React.useState([]);

    useEffect(() => {
        fetch("/data/projects.json")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setPosts(data.data);
            });
    }, []);

    return (
        <CenterScreen>
            <div className="">
                <div className="p-4">
                    <h1 className="text-2xl font-bold md:text-4xl">
                        Research Projects
                    </h1>
                    <p className="text-gray-500">
                        Check out some of the projects from our lab.
                    </p>
                    <hr className="w-[90%] my-6"></hr>
                </div>

                <div className="grid gap-4 grid-cols-1 lg:grid-cols-2 mb-[150px]">
                    {posts?.map((post) => (
                        <Post
                            date={"March 16, 2020"}
                            heading={post.heading}
                            content={post.summary}
                            media={post.media}
                        />
                    ))}
                </div>
            </div>
        </CenterScreen>
    );
};

export default Blog;

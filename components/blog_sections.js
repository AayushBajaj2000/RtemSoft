import React, { useEffect } from "react";
import Post from "../components/post";
import CenterScreen from "../utils/CenterScreen";
import Heading from "../components/heading_section";

const Blog = () => {
  const [posts, setPosts] = React.useState([]);

  useEffect(() => {
    fetch("/data/projects.json")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.data);
      });
  }, []);

  return (
    <CenterScreen>
      <div className="grid gap-4 grid-cols-1 lg:grid-cols-2 mb-[150px] mt-[50px]">
        {posts?.map((post) => (
          <Post
            date={"March 16, 2020"}
            heading={post.heading}
            content={post.summary}
            media={post.media}
          />
        ))}
      </div>
    </CenterScreen>
  );
};

export default Blog;

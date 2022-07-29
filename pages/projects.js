import React, { useEffect } from "react";
import Post from "../components/post";
import CenterScreen from "../utils/CenterScreen";
import Heading from "../components/heading_section";
import { useQuery, useQueryClient } from "@tanstack/react-query";

const fetchPeople = async () => {
  const res = await fetch("/data/projects.json");
  const data = await res.json();
  return data.data;
};

const Projects = () => {
  const { data, error, status } = useQuery(["projects"], fetchPeople, {
    cacheTime: 1000 * 60 * 60,
    refetchOnMount: false,
  });

  if (status === "loading") {
    return <div className="mb-[100vh]">Loading...</div>;
  }

  return (
    <CenterScreen>
      <Heading
        title={"Research Projects"}
        desc={"Check out some of the projects from our lab."}
      />
      <div className="grid gap-4 grid-cols-1 lg:grid-cols-2 mb-[150px] mt-4 p-5">
        {data.map((post) => (
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

export default Projects;

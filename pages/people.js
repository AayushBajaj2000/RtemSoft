import React, { useEffect } from "react";
import Person from "../components/person";
import CenterScreen from "../utils/CenterScreen";
import Heading from "../components/heading_section";
import { useQuery, useQueryClient } from "@tanstack/react-query";

const fetchPeople = async () => {
  const res = await fetch("/data/team.json");
  const data = await res.json();
  return data;
};

const People = () => {
  const { data, error, status } = useQuery(["people"], fetchPeople, {
    cacheTime: 1000 * 60 * 60,
    refetchOnMount: false,
  });

  if (status === "loading") {
    return <div className="mb-[100vh]">Loading...</div>;
  }

  return (
    <CenterScreen>
      <Heading
        title={"Our Team"}
        desc={"Check out some of the members on our team."}
      />

      <h1 className="text-4xl font-bold mt-6">Current Students</h1>
      <div className="grid gap-4 grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
        {data.new.map((person) => (
          <Person
            name={person.name}
            desc={person.desc}
            photo={person.picture}
          />
        ))}
      </div>

      <h1 className="text-4xl font-bold mt-6">Past Students</h1>
      <div className="grid gap-4 grid-cols-2 md:grid-cols-4 lg:grid-cols-5 mb-10">
        {data.old.map((person) => (
          <Person
            name={person.name}
            desc={person.desc}
            photo={person.picture}
          />
        ))}
      </div>
    </CenterScreen>
  );
};

export default People;

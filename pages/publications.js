import React from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import CenterScreen from "../utils/CenterScreen";

const fetchPublications = async () => {
  const res = await fetch("/data/publications.json");
  const data = await res.json();
  return data.data;
};

const Publications = () => {
  const { data, error, status } = useQuery(
    ["publications"],
    fetchPublications,
    {
      cacheTime: 1000 * 60 * 60,
      refetchOnMount: false,
    }
  );

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <CenterScreen>
      <div className="p-2 flex flex-col items-center">
        <div className="flex flex-col my-6 max-w-2xl">
          {[
            "2022",
            "2021",
            "2020",
            "2019",
            "2018",
            "2017",
            "2016",
            "2015",
            "2014",
            "2013",
            "2012",
          ].map((date) => (
            <>
              <div className="w-[100%]">
                <h1 className="text-xl font-bold mb-1">{date}</h1>
              </div>
              {data[date].map((proto, index) => (
                <div className="flex flex-col my-2 max-w-2xl" key={index}>
                  <p className="text-base mb-0 text-gray-600">
                    {proto.heading}
                  </p>
                </div>
              ))}
            </>
          ))}
        </div>
      </div>
    </CenterScreen>
  );
};

export default Publications;

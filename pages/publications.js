import React from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import CenterScreen from "../utils/CenterScreen";
import Heading from "../components/heading_section";

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
        return <div className="mb-[100vh]">Loading...</div>;
    }

    return (
        <CenterScreen>
            <Heading
                title={"Publications"}
                desc={"Publications from our team members."}
            />
            <div className="flex flex-col p-2">
                <div className="flex flex-col items-center p-2 bg-white">
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
                        <div className="mt-[20px]">
                            <div className="w-[100%]">
                                <h1 className="mb-1 text-2xl font-bold">
                                    {date}
                                </h1>
                            </div>
                            {data[date].map((proto, index) => (
                                <div
                                    className="flex flex-col max-w-4xl mt-3"
                                    key={index}
                                >
                                    <p className="mb-0 text-base text-justify text-gray-600">
                                        {proto.heading}
                                    </p>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </CenterScreen>
    );
};

export default Publications;

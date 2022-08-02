import React, { useEffect } from "react";
import Heading from "../components/heading_section";
import CenterScreen from "../utils/CenterScreen";
import Youtube from "react-youtube";
import { useQuery, useQueryClient } from "@tanstack/react-query";

const opts = {
    height: "400",
    width: "100%",
    playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
    },
};

const fetchPrototypes = async () => {
    const res = await fetch("/data/prototypes.json");
    const data = await res.json();
    return data.data;
};

const Prototypes = () => {
    const { data, error, status } = useQuery(["protos"], fetchPrototypes, {
        cacheTime: 1000 * 60 * 60,
        refetchOnMount: false,
    });

    if (status === "loading") {
        return <div className="mb-[100vh]">Loading...</div>;
    }

    return (
        <CenterScreen>
            <Heading
                title={"Prototypes"}
                desc={"Check out some of our prototypes."}
                notRounded
            />
            <div className="flex flex-col items-center p-2 mx-4 bg-white">
                {data.map((proto, index) => (
                    <div className="max-w-4xl p-3 mt-1" key={index}>
                        <h1 className="mb-1 font-bold text-xl sm:text-2xl md:text-3xl ">
                            {proto.heading}
                        </h1>
                        <p className="mb-1 text-justify text-gray-600 text-xs sm:text-sm md:text-lg">
                            {proto.summary}
                        </p>
                        {proto.media && (
                            <video
                                width="100%"
                                height="400"
                                controls
                                className="mb-5"
                            >
                                <source src={proto.media} type="video/mp4" />
                                <source src={proto.media} type="video/webm" />
                                <source src={proto.media} type="video/ogg" />
                                Your browser does not support HTML video.
                            </video>
                        )}
                        {proto.yid && (
                            <Youtube videoId={proto.yid} opts={opts} />
                        )}
                    </div>
                ))}
            </div>
        </CenterScreen>
    );
};

export default Prototypes;

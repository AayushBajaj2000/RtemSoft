import React, { useEffect } from "react";
import Heading from "../components/heading_section";
import CenterScreen from "../utils/CenterScreen";
import Youtube from "react-youtube";
import { useQuery, useQueryClient } from "@tanstack/react-query";

const opts = {
  height: "400",
  width: "700",
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
    return <div>Loading...</div>;
  }

  return (
    <CenterScreen>
      <div className="p-2 flex flex-col items-center">
        {data.map((proto, index) => (
          <div className="flex flex-col my-6 max-w-2xl" key={index}>
            <h1 className="text-xl font-bold mb-1">{proto.heading}</h1>
            <p className="text-base mb-5 text-gray-600">{proto.summary}</p>
            {proto.media && (
              <video width="600" height="620" controls className="mb-5">
                <source src={proto.media} type="video/mp4" />
                <source src={proto.media} type="video/webm" />
                <source src={proto.media} type="video/ogg" />
                Your browser does not support HTML video.
              </video>
            )}
            {proto.yid && <Youtube videoId={proto.yid} opts={opts} />}
          </div>
        ))}
      </div>
    </CenterScreen>
  );
};

export default Prototypes;

/*
            {proto.yid && (
              <iframe
                width="620"
                height="400"
                src={`https://www.youtube.com/embed/${proto.yid}`}
              ></iframe>
            )}

*/

import React from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";

const Main = () => {
  return (
    <div className="w-[300px]">
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="rtemsoft"
        options={{ height: 400 }}
      />
    </div>
  );
};

export default Main;

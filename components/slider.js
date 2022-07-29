import React, { useCallback, useRef } from "react";
import useAnimationFrame from "../utils/use-animation-frame";
import CenterScreen from "../utils/CenterScreen";

const SliderContainer = ({ children, initialOffsetX }) => {
  const refScrollX = React.useRef(initialOffsetX);
  const refContainer = React.useRef(null);
  const refContent = React.useRef(null);

  useAnimationFrame(
    useCallback(() => {
      const { current: elContainer } = refContainer;
      const { current: elContent } = refContent;

      if (elContainer && elContent) {
        refScrollX.current += 0.5;
        elContainer.scrollLeft = refScrollX.current;

        // If the scroll is at the end, reset it to the beginning.
        if (elContainer.scrollLeft >= elContent.clientWidth) {
          refScrollX.current = 0;
          elContainer.scrollLeft = 0;
        }
      }
    }),
    []
  );

  return (
    <section className="pt-28 bg-gray-50">
      <div className="container mx-auto overflow-hidden md:px-4">
        <h1 className="text-4xl font-extrabold tracking-tight text-center text-gray-900 sm:text-5xl">
          <span className="block text-center xl:inline ">
            Our Industrial Sponsors
          </span>
        </h1>
        <p className="mt-3  text-center text-gray-500 sm:mt-5 sm:text-lg md:mt-5 md:text-lg md:px-[50px]">
          The research group heavily interacts with industry through industrial
          collaborations. The list of current and past research partners
          include: IBM Canada, BlackBerry QNX, QA Consulting, Novaerial
          Robotics, Greenwood Mushroom Farm, Cyberworks Robotics, Smartcone
          Technologies, NorthLine Canada, Mobile Innovations, and Measurements
          International. Our research is supported by NSERC and Ontario Tech
          University.
        </p>
        <CenterScreen>
          <div
            ref={refContainer}
            className="slider-container overflow-x-hidden whitespace-nowrap max-w-full pointer-events-none h-[300px] mt-[100px]"
          >
            <div ref={refContent} className="inline-block">
              {children}
            </div>
            <div ref={refContent} className="inline-block">
              {children}
            </div>
          </div>
        </CenterScreen>
      </div>
    </section>
  );
};

export const SliderItem = ({ children, width }) => {
  return (
    <div
      className="inline-flex items-center justify-center mx-4"
      style={{ width: width }}
    >
      {children}
    </div>
  );
};

export default SliderContainer;

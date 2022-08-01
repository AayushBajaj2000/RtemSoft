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
                refScrollX.current += 0.8;
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
        <div className="container mx-auto overflow-hidden md:px-4">
            <CenterScreen>
                <div
                    ref={refContainer}
                    className="slider-container overflow-hidden whitespace-nowrap max-w-full pointer-events-none h-[150px] mt-[20px]"
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

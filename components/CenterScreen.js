import React from "react";

const CenterScreen = ({ children }) => {
    return (
        <div className="justify-center flex">
            <div className="flex-1 justify-center max-w-[1200px]">
                {children}
            </div>
        </div>
    );
};

export default CenterScreen;

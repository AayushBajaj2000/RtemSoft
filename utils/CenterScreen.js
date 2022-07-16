import React from "react";

const CenterScreen = ({ children }) => {
    return (
        <div className="justify-center flex">
            <div
                className="flex-1 justify-center"
                style={{
                    maxWidth: "1400px",
                }}
            >
                {children}
            </div>
        </div>
    );
};

export default CenterScreen;

import React from "react";

const Person = () => {
    return (
        <>
            <div className="mt-5 h-[300px]">
                <div className="h-[230px] back_image rounded-2xl shadow-md"></div>
                <p className="mt-3 text-base font-semibold text-gray-600">
                    John Doe
                </p>
                <p className="text-base font-semibold text-indigo-700">
                    MASc, BSc, P.Eng
                </p>
            </div>
        </>
    );
};

export default Person;

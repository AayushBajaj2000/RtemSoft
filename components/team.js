import React from "react";
import Person from "../components/person";
import CenterScreen from "../utils/CenterScreen";
import Heading from "../components/heading_section";

const Team = () => {
    return (
        <CenterScreen>
            <Heading
                title={"Our Team"}
                desc={"Check out some of the members on our team."}
            />
            <div className="p-2 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-[150px]">
                <Person />
                <Person />
                <Person />
                <Person />
                <Person />
                <Person />
                <Person />
                <Person />
                <Person />
            </div>
        </CenterScreen>
    );
};

export default Team;

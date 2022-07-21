import React, { useEffect } from "react";
import Person from "../components/person";
import CenterScreen from "../utils/CenterScreen";
import Heading from "../components/heading_section";

const Team = () => {
    const [members, setMembers] = React.useState([]);

    useEffect(() => {
        fetch("/data/team.json")
            .then((res) => res.json())
            .then((data) => {
                setMembers(data.data);
            });
    }, []);

    return (
        <CenterScreen>
            <Heading
                title={"Our Team"}
                desc={"Check out some of the members on our team."}
            />
            <div className="p-2 grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-[150px]">
                {members?.map((person) => (
                    <Person
                        name={person.name}
                        desc={person.desc}
                        photo={person.picture}
                    />
                ))}
            </div>
        </CenterScreen>
    );
};

export default Team;

import React, { useEffect } from "react";
import Person from "../components/person";
import CenterScreen from "../utils/CenterScreen";
import Heading from "../components/heading_section";

const Team = () => {
    const [members, setMembers] = React.useState([]);
    const [old, setOld] = React.useState([]);

    useEffect(() => {
        fetch("/data/team.json")
            .then((res) => res.json())
            .then((data) => {
                setMembers(data.new);
                setOld(data.old);
            });
    }, []);

    return (
        <CenterScreen>
            <Heading
                title={"Our Team"}
                desc={"Check out some of the members on our team."}
            />

            <h1 className="text-4xl font-bold mt-6">Current Students</h1>
            <div className="grid gap-4 grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
                {members?.map((person) => (
                    <Person
                        name={person.name}
                        desc={person.desc}
                        photo={person.picture}
                    />
                ))}
            </div>

            <h1 className="text-4xl font-bold mt-6">Past Students</h1>
            <div className="grid gap-4 grid-cols-2 md:grid-cols-4 lg:grid-cols-5 mb-10">
                {old?.map((person) => (
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

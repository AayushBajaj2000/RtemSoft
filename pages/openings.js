import React from "react";
import Heading from "../components/heading_section";
import CenterScreen from "../utils/CenterScreen";

const Openings = () => {
    return (
        <CenterScreen>
            <Heading
                title={"Openings"}
                desc={"Openings and annoucements for prospective students."}
            />
            <div>
                <h1 className="text-lg font-bold mb-1">
                    Ph.D. and Master’s Positions
                </h1>
                <p className="text-base mb-5 text-gray-600">
                    We often have positions for graduate students (MASc or PhD).
                    Interested students email your resume and transcripts in pdf
                    to AKRAMUL AZIM, PHD, PENG (akramul.azim@uoit.ca).
                </p>
                <h1 className="text-lg font-bold mb-1">
                    Undergraduate Student Positions
                </h1>
                <p className="text-base mb-5 text-gray-600">
                    There are often positions for keen and motivated
                    undergraduate students to participate in the research or
                    project work. Open positions may be available for students
                    who are interested in conducting research with me through:
                    1. MITACS Gloablink 2. Undergraduate Research Assistantships
                    (URA) 3. Capstone Projects Please send an email to discuss
                    the opportunities for summer positions and course projects.
                </p>
            </div>
        </CenterScreen>
    );
};

export default Openings;

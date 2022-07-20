import React from "react";
import CenterScreen from "../utils/CenterScreen";
import Heading from "../components/heading_section";

const Contact = () => {
    return (
        <CenterScreen>
            <Heading
                title={"Contact"}
                desc={
                    "We are looking forward to hearing from you. Please feel free to get in touch via the contact below, we will get back to you as soon as possible."
                }
            />
            <div>
                <ul>
                    <li>
                        Real-Time Embedded Software Research Lab SIRC 3340 2000
                    </li>
                    <li>Simcoe Street North, Oshawa, Ontario, L1H7K4 Email:</li>
                    <li>
                        akramul.azim@uoit.ca RTEMSOFT Members Google Group Group
                    </li>
                    <li>Email: rtemsoft@googlegroups.com</li>
                </ul>
            </div>
        </CenterScreen>
    );
};

export default Contact;

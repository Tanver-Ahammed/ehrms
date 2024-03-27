import React from "react";
import '../css/abt.css'

const About = () => {
    return (
        <div style={{backgroundColor: '#dfeded', width: "100%", textAlign: "center"}}>
            <div className="container">
                <h1 className="mt-5">Welcome to Our EHRMS Hospital App</h1>
                <p className="lead">
                    Electronic Health Record Management System (EHRMS) for hospitals is a crucial innovation in modern
                    healthcare, revolutionizing the way patient data is collected, stored, and accessed. With EHRMS,
                    hospitals can streamline their operations, improve patient care, and enhance overall efficiency.

                    One of the primary benefits of EHRMS is the centralization of patient records. Instead of relying on
                    fragmented paper-based systems or disparate electronic records, EHRMS integrates all patient
                    information into a single, comprehensive platform. This consolidation allows healthcare providers to
                    access vital patient data instantly, leading to faster diagnoses and better-informed treatment
                    decisions.
                </p>
            </div>
        </div>
    );
}

export default About;
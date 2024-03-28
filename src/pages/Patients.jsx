import {useEffect, useState} from "react";
import {Patients as patns} from '../data/Patients'
import {Col, Form, Row} from "react-bootstrap";
import PatientImages from "../images/Patients.png"

export const Patients = () => {
    const [patients, setPatients] = useState([]);
    const [viewPatients, setViewPatients] = useState(([]));
    useEffect(() => {
        setPatients(patns)
        setViewPatients(patns)
    }, []);

    const handleSearch = (e) => {
        const keyword = e.target.value.trim();
        console.log(keyword)
        let filteredPatients = patients.filter(doctor => {
            if (doctor.name.toLowerCase().includes(keyword.toLocaleString()))
                return doctor
        })

        setViewPatients(filteredPatients)
    };

    return (
        <>
            <section className="main-content">
                <div className="row mx-3">
                    <Row className="mt-4 mb-5">
                        <Col md={6}>
                            <h1>Patients:</h1>
                        </Col>
                        <Col md={6}>
                            <Form.Control
                                name="search"
                                placeholder="Search"
                                onChange={handleSearch}
                            />
                        </Col>
                    </Row>
                    {
                        viewPatients.map((doctor, index) => {
                            return (
                                <div key={index} className="col-md-6 col-lg-4 col--12 mb-4">
                                    <div className="card">
                                        <img
                                            src={PatientImages}
                                            alt="patient_image"/>
                                        <div className="card-body">
                                            <div className="card-title">
                                                <h3>{doctor.name}</h3>
                                                <h5>{doctor.specialty}</h5>
                                                <p>{doctor.location}</p>
                                            </div>
                                        </div>
                                        <div className="card-footer">
                                            <p className="text-secondary">Last update: 3 minits ago</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </>
    )
}

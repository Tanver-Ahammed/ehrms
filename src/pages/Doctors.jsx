import {useEffect, useState} from "react";
import {Doctors as docts} from '../data/Doctors'
import {Col, Form, Row} from "react-bootstrap";

export const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    const [viewDoctors, setViewDoctors] = useState(([]));
    useEffect(() => {
        setDoctors(docts)
        setViewDoctors(docts)
    }, []);

    const handleSearch = (e) => {
        const keyword = e.target.value.trim();
        console.log(keyword)
        let filteredDoctors = doctors.filter(doctor => {
            if(doctor.name.toLowerCase().includes(keyword.toLocaleString()))
                return doctor
        })

        setViewDoctors(filteredDoctors)
    };

    return (
        <>
            <section className="main-content">
                <div className="row mx-3">
                    <Row className="mt-4 mb-5">
                        <Col md={6}>
                            <h1>Doctors:</h1>
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
                        viewDoctors.map((doctor, index) => {
                            return (
                                <div key={index} className="col-md-6 col-lg-4 col--12 mb-4">
                                    <div className="card">
                                        <img
                                            src="https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=612x612&w=0&k=20&c=5FkfKdCYERkAg65cQtdqeO_D0JMv6vrEdPw3mX1Lkfg="
                                            alt="doctor_image"/>
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

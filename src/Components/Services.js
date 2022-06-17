import React from 'react';
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa";

export default function Services() {
    return (
        <div className="container my-5">
            <div className="row justify-content-center">
                <div className="headings">
                    <p>OUR SERVICES</p>
                    <h6>What We Offer ?</h6>
                </div>
            </div>
            <div className="row justify-content-center mt-4">
                <div className="col-lg-4 col-md-6">
                    <div className="services">
                        <div className="card text-center">
                            <div className="card-body">
                                <h5 className="card-title">Specialist Portal</h5>
                                <p className="card-text my-2">Through which doctors, laboratories and patients can order the test, manage the results and process samples.</p>
                                <Link to='/specialist' className="card-link">LEARN MORE &nbsp; <FaArrowRight /></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="services">

                        <div className="card text-center">
                            <div className="card-body">
                                <h5 className="card-title">Lab Consulting</h5>
                                <p className="card-text">We work with reference labs to add this test to their catalog, in order to facilitate ordering thorugh their own existing portals, client apps and ordering systems.</p>
                                <Link to="/lab-consulting" className="card-link">LEARN MORE &nbsp; <FaArrowRight /></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="services">
                        <div className="card text-center">
                            <div className="card-body">
                                <h5 className="card-title">Research Services</h5>
                                <p className="card-text">Pharmaceutical companies, researchers or other institutions can work with us to integrate this test into large scale Covid-related antibody testing programs.</p>
                                <Link to="/research" className="card-link">LEARN MORE &nbsp; <FaArrowRight /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

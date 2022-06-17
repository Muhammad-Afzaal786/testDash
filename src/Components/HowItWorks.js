import React from 'react';

export default function HowItWorks() {
    return (
        <div className="container my-5">
            <div className="row justify-content-center mt-100">
                <div className="headings">
                    <p>HOW IT WORKS ?</p>
                    <h6>Receive Your Test Reports
                        <br />
                        in 3 Easy Steps</h6>
                </div>
            </div>
            <div className="row justify-content-center mt-5">
                <div className="col-lg-4 col-md-6">
                    <div className="step-card mb-3">
                        <div className="step-card-body">
                            <div className="num-name">
                                <div className="number">01</div>
                                <div className="title">Get Started</div>
                            </div>
                            <p className="step-card-text py-3">Doctors or patients can start the test ordering process online or in the office.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="step-card mb-3">
                        <div className="step-card-body">
                            <div className="num-name">
                                <div className="number">02</div>
                                <div className="title">Collect Sample</div>
                            </div>
                            <p className="step-card-text">Doctors offices with blood draw and serum spin capabilities can draw the blood and process it for testing. It can also be done by an outside lab or mobile phlebotomy group.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="step-card mb-3">
                        <div className="step-card-body">
                            <div className="num-name">
                                <div className="number">03</div>
                                <div className="title">Get Result</div>
                            </div>
                            <p className="step-card-text">After the sample is sent for testing, the results appear in your patient and doctor portals within 5 business days on average.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

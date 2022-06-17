import React from "react";
import "./learn.css";
import { Link } from "react-router-dom";

export default function LearnMore() {
  return (
    <div className="learn">
      <div className="container-fluid px-0 mb-5">
        <div className="row gx-0 px-0">
          <div className="col-lg-12">
            <div className="background">
              <div className="main-text">Learn More</div>
              <div className="main-description">
                Assay Tech Health offers online doctor appointments with a
                network of family doctors, specialists, dieticians, naturopaths,
                counselors, nurse practitioners, ophthalmologists,
                physiotherapists, and more.
              </div>
            </div>
          </div> 
        </div> 
      </div>
      <div className="container my-5">
        <div className="row justify-content-center mt-5">
          <div className="headings">
            <p>ABOUT YOU</p>
            <h6>The AssayTech Difference</h6>
          </div>
        </div>
        <div className="row justify-content-center mt-5">
          <div className="col-lg-4 col-md-6">
            <div className="learn-card mb-3">
              <div className="learn-card-body">
                <div className="icon-image">
                  <div className="icon">
                    <img src="/images/doctor.svg" alt="doctor" />
                  </div>
                  <div className="title">For Doctors</div>
                </div>
                <p className="learn-card-text">
                  Learn about how to offer this test through our HIPAA-compliant
                  portal, and why this test is so different than other antibody
                  tests in the market.
                </p>
                <Link to="/about-doctor">
                  <button className="btn btn-primary" type="submit">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="learn-card mb-3">
              <div className="learn-card-body">
                <div className="icon-image">
                  <div className="icon">
                    <img src="/images/patient.svg" alt="doctor" />
                  </div>
                  <div className="title">For Patients</div>
                </div>
                <p className="learn-card-text">
                  Learn why this test is so important in making risk decisions
                  about Covid-exposure and health statistics
                </p>
                <Link to="/about-patient">
                  <button className="btn btn-primary" type="submit">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="learn-card mb-3">
              <div className="learn-card-body">
                <div className="icon-image">
                  <div className="icon">
                    <img src="/images/lab.svg" alt="doctor" />
                  </div>
                  <div className="title">For Labs</div>
                </div>
                <p className="learn-card-text">
                  Learn how medical diagnostics labs and phlebotomy labs can be
                  involved in processing and selling the test.
                </p>
                <Link to="/about-laboratory">
                  <button className="btn btn-primary" type="submit">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

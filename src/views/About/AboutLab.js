import React from 'react';
import { Link } from 'react-router-dom'

export default function AboutLab() {
    return (
        <div className="learn">
            <div className="container-fluid px-0 mb-5">
                <div className="row gx-0 px-0">
                    <div className="col-lg-12">
                        <div className="background">
                            <div className="main-text">
                                About Laboratory
                            </div>
                            <div className="main-description">
                                Assay Tech Health offers online doctor appointments with a network of family doctors, specialists, dieticians, naturopaths, counselors, nurse practitioners, ophthalmologists, physiotherapists, and more.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row justify-content-center my-5">
                    <div className="col-lg-2">
                        <Link to="/signup">
                            <button className="btn btn-primary">SIGNUP AS A lABORATORY</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
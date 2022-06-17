import React from 'react';
import Services from '../../Components/Services';
import NewsLetter from '../../Components/NewsLetter';

export default function Service() {
    return (
        <div className="services">
            <div className="container-fluid px-0 mb-5">
                <div className="row gx-0 px-0">
                    <div className="col-lg-12">
                        <div className="background">
                            <div className="main-text">
                                Services
                            </div>
                            <div className="main-description">
                                Assay Tech Health offers online doctor appointments with a network of family doctors, specialists, dieticians, naturopaths, counselors, nurse practitioners, ophthalmologists, physiotherapists, and more.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <Services />
                <NewsLetter />
            </div>
        </div>
    )
}

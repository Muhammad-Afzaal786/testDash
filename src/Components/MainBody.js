import React from 'react';

export default function MainBody() {
    return (
        <div className="container-fluid">
            <div className="row justify-content-center align-items-center mt-5">
                <div className="col-lg-8 pl-100">
                    <h1 className="main-text-main">Leading the way in <span>Covid Neutralizing Antibody Testing </span></h1>
                    <p className="paragraph-main px-100">Assay Tech provides a secure portal for Doctors, Patients and Laboratories, through which you may order the world’s most sophisticated test for Covid Neutralizing Antibodies. The test provides a FULLY QUANTITATIVE antibody titer, exressed in WHO/IU format, easily interpreted by the physical and patient, providing real world results to assist in safety-related health decision making.</p>
                    <div className="play-btn">
                        <button class="btn btn-primary px-5 py-2" type="submit"> Learn More </button>
                        <div className="play">
                            <img src="/images/play-btn.svg" alt="Play-Btn" />
                            <p>Watch Intro Video</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4"> 
                    <div className="img-div">
                        <img src="/images/main.svg" alt="main-img" />
                    </div>
                </div>
            </div>
        </div>
    )
}

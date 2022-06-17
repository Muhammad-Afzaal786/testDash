import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { BsCheck2All } from "react-icons/bs";

export default function ChooseUs() {
    return (
        <div className="container">
            <div className="row justify-content-center align-items-center mt-100">
                <div className="col-lg-6 col-md-6">
                    <div className="virtual">
                        <p>Why Choose Us</p>
                        <h6>We facilitate the most powerful
                            and important Lab test available</h6>
                    </div>
                    <p className="virtual-paragraph">The test is a fully quantitative high-throughput assay that provides an antibody titer of just those antibodies that have the abiity to neutraize the SARS-Cov2 virus. It is useful for:</p>
                    <ul className="chooseUl mb-5">
                        <li><BsCheck2All className='check'/>&nbsp; Post-Covid patients deciding when to get a vaccine</li>
                        <li><BsCheck2All className='check'/> &nbsp; Vaccinated individuals who need their antibody levles</li>
                        <li><BsCheck2All className='check'/>&nbsp; Deciding post-vaccine timing for getting a booster shot</li>
                        <li><BsCheck2All className='check'/> &nbsp;Making personal health decisions related to crowds,< br/>
                            &nbsp; social distances, masks and other protective measures</li>
                    </ul>
                    <a href="/why-us" className="virtual-link">READ MORE &nbsp; <FaArrowRight /></a>
                </div>
                <div className="col-lg-6 col-md-6 pb-2 text-center">
                    <div className="img-div">
                        <img src="/images/choose.svg" alt="main-img" />
                    </div>
                </div>
            </div>
        </div>
    )
}
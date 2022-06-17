import React from 'react';
import {Link} from 'react-router-dom';

export default function Booking() {

    return (
        <div className="container-fluid px-0 my-5">
            <div className="row justify-content-center">
                <div className="col-lg-12">
                    <div class="box">
                        <div className="heading-text">
                        Still Confused About What the Test Does?
                        </div>
                        <div className="booking-desc">
                        It’s easy to be confused about what different tests do.  We are here to help you understand
                        the features and benefits of the test we facilitate.
                        </div>
                        <Link to="/location">
                        <button className="btn btn-primary px-5 py-2" type="submit"> Contact Us Now </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

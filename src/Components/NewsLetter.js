import React from 'react';
export default function NewsLetter() {
    return (
        <div className="container my-5">
            <div className="row justify-content-center mt-100">
                <div className="headings">
                    <p>NEWSLETTER</p>
                    <h6>SUBSCRIBE TO OUR NEWSLETTER</h6>
                </div>
            </div>
            <div className="row mt-4 justify-content-center">
                <div className="col-lg-6">
                    <div className="input-group mb-3 align-items-center">
                        <input type="text" className="form-control" placeholder="Email Address" aria-label="email" aria-describedby="basic-addon2" id="input-bg" />
                        <div className="input-group-append">
                            <button className="btn btn-secondary py-2" type="button">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

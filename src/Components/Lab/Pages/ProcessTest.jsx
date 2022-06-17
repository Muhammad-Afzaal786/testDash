import React from 'react';

function ProcessTest() {
   

return (
    <div className="dashboard">
            <div className="container">
                <div className="row justify-content-center my-5">
                    <div className="col-lg-10">
                        <div className="table-responsive">
                            <table class="table">
                                <thead class="thead-dark">
                                    <tr>
                                        <th scope="col">Test Name</th>
                                        <th scope="col">Test Date</th>
                                        <th scope="col">View Details</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Covid</td>
                                        <td>12/09/2019</td>
                                        <td><a href="/view-reports" class="link-info">View</a></td>
                                    </tr>
                                    <tr>
                                        <td>Covid</td>
                                        <td>12/09/2019</td>
                                        <td><a href="/view-reports" class="link-info">View</a></td>
                                    </tr>
                                    <tr>
                                        <td>Covid</td>
                                        <td>12/09/2019</td>
                                        <td><a href="/view-reports" class="link-info">Viewt</a></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="bg-white-container">
                <div className="notification">
                  <h3 className="primary">Assay Tech</h3>
                </div>
                <div className="row mt-3">
                    <div className="col-lg-10">
                        <div className="table-responsive">
                            <table class="table">
                                <thead class="thead-dark">
                                    <tr>
                                        <th scope="col">Order Number</th>
                                        <th scope="col">Sample Number</th>
                                        <th scope="col">Instructions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>343334</td>
                                        <td>676765</td>
                                        <td><a href="/view-reports" class="link-info">View</a></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
            </div>
        </div>
       )
}

export default ProcessTest;

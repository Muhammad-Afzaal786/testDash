import React, { useState } from "react";
//import "../views.css";
import { FaAngleDown } from "react-icons/fa";

export default function Tests() {
    const testData=[
        {testName:"Covid", testDate:"05-07-2020",patientName: "Hello", lab:"ABC", status:"Completed"},
        {testName:"Covid", testDate:"05-07-2020",patientName: "Hello", lab:"ABC", status:"Completed"},
        {testName:"Covid", testDate:"05-07-2020",patientName: "Hello", lab:"ABC", status:"Pending"},
        {testName:"Covid", testDate:"05-07-2020",patientName: "Hello", lab:"ABC", status:"Completed"},
    ]

    const testDataArea=(data, index)=>{
        return(
            <tr key={index}>
            <td>{data.testName}</td>
            <td>{data.testData}</td>
            <td>{data.patientName}</td>
            <td>{data.lab}</td>
            <td className={data.status === "Completed" ? "text-success":"text-warning"}>{data.status}</td>
            <td>
              <a href="#/" class="text-danger">
                Delete
              </a>
            </td>
          </tr>
        )
    }

    const [selected, setSelected] = useState("Type");

    const [active, setActive] = useState(false);
    const options = ["All", "Completed", "Pending"]
  return (
    <>
      <div className="dashboard">
        <div className="container">
         
          <div className="row">
            <div className="col-lg-10 mx-auto">
            <div className="row mx-auto mt-3">
            <h2 className="text-blue">Tests</h2>
          </div>
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div class="input-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Search by order number"
                    />
                    <div class="input-group-append">
                      <button class="btn btn-primary" type="button">
                        Search
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                            <div className="dropdown">
                                <div className="dropdown-btn" onClick={(e) => setActive(!active)}>
                                    {selected}
                                    <FaAngleDown />
                                </div>
                                {active && (
                                    <div className="dropdown-content">
                                        {options.map((option) => (
                                            <div
                                                onClick={(e) => {
                                                    setSelected(option);
                                                    setActive(false);
                                                }}
                                                className="dropdown-item"
                                            >
                                                {option}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                </div>
              <div className="table-responsive">
                <table class="table mt-5">
                  <thead class="thead-dark">
                    <tr>
                      <th scope="col">Test Name</th>
                      <th scope="col">Test Date</th>
                      <th scope="col">Patient name</th>
                      <th scope="col">Laboratory</th>
                      <th scope="col">Status</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                   {testData.map(testDataArea)}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

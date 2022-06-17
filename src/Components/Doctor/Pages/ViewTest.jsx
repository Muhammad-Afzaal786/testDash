import React,{useState} from 'react';
import { FaAngleDown } from "react-icons/fa";
function ViewTest() {
  const [selected, setSelected] = useState("Type");

  const [active, setActive] = useState(false);
  const options = ["All", "Completed", "Pending"]

  return (
      <div className="dashboard">
          <div className="container">
              <div className="row justify-content-center mt-5">
                  <div className="col-lg-10">
                      <div className="reports-container">
                          <div className="dropdown mb-3">
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
                      <div className="table-responsive">
                          <table class="table mt-5">
                              <thead className="thead-dark">
                                  <tr>
                                      <th scope="col">Patient Name</th>
                                      <th scope="col">Test Date</th>
                                      <th scope="col">Test Name</th>
                                      <th scope="col">Status</th>
                                      <th scope="col">View Report</th>
                                  </tr>
                              </thead>
                              <tbody>
                                  <tr>
                                      <td>Asssay Tech</td>
                                      <td>12/09/2019</td>
                                      <td>Covid 19</td>
                                      <td>Completed</td>
                                      <td><a href="/view-reports" className="link-info">View Report</a></td>
                                  </tr>
                                  <tr>
                                      <td>Asssay Tech</td>
                                      <td>12/09/2019</td>
                                      <td>Covid 19</td>
                                      <td>Completed</td>
                                      <td><a href="/view-reports" className="link-info">View Report</a></td>
                                  </tr>
                                  <tr>
                                      <td>Asssay Tech</td>
                                      <td>12/09/2019</td>
                                      <td>Covid 19</td>
                                      <td>Completed</td>
                                      <td><a href="/view-reports" className="link-info">View Report</a></td>
                                  </tr>
                              </tbody>
                          </table>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default ViewTest;

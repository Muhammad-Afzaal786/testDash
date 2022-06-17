import React,{useState} from 'react';
import { Modal } from 'react-bootstrap';
import {BiX} from "react-icons/bi";

function Laborateries() {
    const [mdShow, setMdShow] = useState(false);
  const handleMdClose = () => setMdShow(false);
  const handleMdShow = () => setMdShow(true);

    return (
      <div className="dashboard ">
      <div className="container">
       
        <div className="row ">
          <div className="col-lg-10 mx-auto"> 
          <div className="row mx-auto mt-3">
          <h2 className="text-blue">Laboratories</h2>
        </div>
            <div class="input-group mb-5">
              <input
                type="text"
                class="form-control"
                placeholder="Search"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <div class="input-group-append">
                <button class="btn btn-primary" type="button">
                  Search
                </button>
              </div>
            </div>
            <div className="table-responsive">
              <table class="table mt-3">
                <thead class="thead-dark">
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Joining Date</th>
                    <th scope="col">Doctors</th>
                    <th scope="col">Tests</th>
                    <th scope="col">Patients</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Asssay Tech</td>
                    <td>12/09/2019</td>
                    <td>10</td>
                    <td>5</td>
                    <td>6</td>
                    <td>
                      <a href="#/" class="link-info mr-3" onClick={handleMdShow}>
                        Edit
                      </a>
                      <a href="/view-reports" class="text-danger">
                        Delete
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Modal show={mdShow} onHide={handleMdClose} size="lg">
              <Modal.Header>
                  <div className="py-3 px-3">
                      <h1 className="mb-0"> </h1>
                      <a href="#/" onClick={handleMdClose}><BiX /></a>
                  </div>
              </Modal.Header> 
              <Modal.Body>
                 <div className="container">
                 <div className="row justify-content-center">
            <div className="col-lg-6">
              <div class="form-group">
                <label for="exampleInputEmail1">Lab Name</label>
                <input type="username" class="form-control mt-2" id="exampleInputName1" aria-describedby="emailHelp" placeholder="Assay Tech" />
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Lab Owner Name</label>
                <input type="email" class="form-control mt-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Gender" />
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control mt-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" readOnly />
              </div>
            </div>
            <div className="col-lg-6">
              <div class="form-group">
                <label for="exampleInputEmail1">Phone</label>
                <input type="email" class="form-control mt-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Phone No." />
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Starting Date</label>
                <input type="text" class="form-control mt-2" readOnly id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="05-12-2020" />
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Password</label>
                <input type="email" class="form-control mt-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Password" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <h5 className="primary pt-5">Medical Details</h5>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div class="form-group">
                <label for="exampleInputEmail1">License No.</label>
                <input type="text" class="form-control mt-2" id="exampleInputName1" aria-describedby="emailHelp" placeholder="Assay Tech" />
              </div>
            </div>
            <div className="col-lg-6">
              <div class="form-group">
                <label for="exampleInputEmail1">License Expiry Date</label>
                <input type="date" class="form-control mt-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="12-3-2025" />
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <h5 className="primary pt-5">Address Details</h5>
              <div class="form-group">
                <label for="exampleInputEmail1">Full Address</label>
                <input type="email" class="form-control mt-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Washington, DC" />
              </div>
            </div>
          </div>
          <div className="row justify-content-center my-5">
            <div className="col-lg-5">
              <div className="btn-cancel">
                <button type="button" class="btn btn-primary px-5">Save Info</button>
                <a href="#/" class="link-secondary" onClick={handleMdClose}>Cancel</a>
              </div>
            </div>
          </div>
                 </div>
              </Modal.Body>
          </Modal>
    </div>
           )
}

export default Laborateries;

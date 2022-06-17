import React from 'react';

function EditProfile() {
 
  return (
    <>
    <div className="dashboard">
      
    <div className="container">
      <div className="row justify-content-center my-5">
        <div className="col-lg-12 d-flex justify-content-center">
          <div className="profile-div">
            <img src="./images/profile.jpg" alt="profile-img" />
          </div>
        </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-5">
            <div class="form-group">
              <label for="exampleInputEmail1">Full Name</label>
              <input type="username" class="form-control mt-2" id="exampleInputName1" aria-describedby="emailHelp" placeholder="Assay Tech" />
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Gender</label>
              <input type="email" class="form-control mt-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Gender" />
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input type="email" class="form-control mt-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
            </div>
          </div>
          <div className="col-lg-5">
            <div class="form-group">
              <label for="exampleInputEmail1">Phone</label>
              <input type="email" class="form-control mt-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Phone No." />
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Date Of Birth</label>
              <input type="email" class="form-control mt-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="05-12-2020" />
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Password</label>
              <input type="email" class="form-control mt-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Password" />
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <h5 className="primary pt-5">Medical Details</h5>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-5">
            <div class="form-group">
              <label for="exampleInputEmail1">Medical Speciality</label>
              <input type="username" class="form-control mt-2" id="exampleInputName1" aria-describedby="emailHelp" placeholder="Assay Tech" />
            </div>
          </div>
          <div className="col-lg-5">
            <div class="form-group">
              <label for="exampleInputEmail1">Lisence Expiry Date</label>
              <input type="email" class="form-control mt-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="12-3-2025" />
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
          <div className="col-lg-3">
            <div className="btn-cancel">
              <button type="button" class="btn btn-primary px-5">Save Info</button>
              <a href="/cancel" class="link-secondary">Cancel</a>
            </div>
          </div>
        </div>
    </div>
  </div>
    </>
  );
}

export default EditProfile;

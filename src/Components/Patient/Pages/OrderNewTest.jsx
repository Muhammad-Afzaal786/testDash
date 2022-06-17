import React,{useState} from 'react';

function OrderNewTest() {
   

return (
    <div className="dashboard">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-10">
                    <div class="form-group">
                        <h5 className="primary">Patient Details</h5>
                        
                    </div>
                   
                </div>
            </div>
            <div >
                <div className="row justify-content-center ">
                    <div className="col-lg-5">
                        <div class="form-group">
                            <label for="exampleInputEmail1">Patient Name</label>
                            <input type="username" class="form-control " id="exampleInputName1" aria-describedby="emailHelp" placeholder="Enter Name" />
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div class="form-group">
                            <label for="exampleInputEmail1">Phone</label>
                            <input type="email" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Phone Number" />
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div class="form-group">
                            <label for="exampleInputEmail1">Address</label>
                            <input type="email" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email Id" />
                        </div>
                    </div>
                </div>
               
            </div>
           
           
           
           
            <div className="row justify-content-center my-5">
            
                <div className="col-lg-5">
                <div class="form-group">
                <h5 className="primary">Select Test</h5>
               
            </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Test Name</label>
                        <input type="username" class="form-control mt-2" id="exampleInputName1" aria-describedby="emailHelp" placeholder="Enter Test" />
                    </div>
                </div>
                
                <div className="col-lg-5 mt-5">
                    <div class="form-group">
                        <label for="exampleInputEmail1">Take Sample On</label>
                        <input type="date" class="form-control mt-0" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="12-3-21" />
                    </div>
                </div>
            </div>
            <div className="row justify-content-center my-5">
                <div className="col-lg-4">
                    <div className="btn-cancel">
                        <button type="button" class="btn btn-primary px-5">Confirm and Order</button>
                        <a href="/cancel" class="link-secondary">Cancel</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
       )
}

export default OrderNewTest;

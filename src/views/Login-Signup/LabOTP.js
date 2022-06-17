import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

function LabOTP() {
    const [user, setUser] = useState({
        email: "",
        OTP: "",
      });
      const [errField, setErrField] = useState({
        emailErr:'',
        OTPErr: ""
      })
     
      const navigate = useNavigate()
      const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({
          ...user,
          [name]: value,
        });
      };

      const confirmOtp =async (e)=>{
        e.preventDefault();
        if (validForm()) {
          let url ='http://3.139.114.73:3000/api/v1/assay/lab/verify/OTP'
          let options = {
            method:'POST',
            url:url,
            data:user ,
            headers : {
             "Content-Type": "application/json; charset=utf-8"
            }
          }
          try{
             let response = await axios(options)
             console.log(response)
             if(response.status === 200){
              
               toast.success("Confirm OTP!");
               setTimeout(()=>{
                  navigate('/loginlab')
               },1500)
             }
          }catch(e){
           toast.error("Something went wrong !");
          }
         } else {
           toast.error("Invalid OTP");
         }
          
      }
      const resendOtp =async (e)=>{
        e.preventDefault();
        if (validForm()) {
          let url ='http://3.139.114.73:3000/api/v1/assay/lab/resend/OTP'
          let options = {
            method:'POST',
            url:url,
            data:user ,
            headers : {
             "Content-Type": "application/json; charset=utf-8"
            }
          }
          try{
             let response = await axios(options)
             console.log(response)
             if(response.status === 200){
              
               toast.success("Resend OTP in your Email Account!");
            
             }
          }catch(e){
           toast.error("Something went wrong !");
          }
         } else {
           toast.error("Faild to send OTP!");
         }

      }
    
      const validForm = () => {
        let formIsValid = true;
        setErrField({
          emailErr: "",
          OTPErr: "",
        });
        if (user.OTP === "") {
          formIsValid = false;
          setErrField((prevState) => ({
            ...prevState,
            OTPErr: "Please Enter confirmOtp",
          }));
        }
       
        return formIsValid;
      };
    
    
    return (
        <div>
        <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="login-box">
              <div className="row">
                <div className="col-lg-12">
                <ToastContainer/>
                  <div className="login-img-div">
                    <Link to="/">
                      <img src="/images/home.svg" alt="home" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="logo">
                    <img src="/images/logo.png" alt="logo" />
                  </div>
                  <div className="login">
                    <h6>Welcome Back !</h6>
                    <p>
                      Please <span>Confirm  </span> to your OTP! 
                    </p>
                  </div>
                  <div className="row justify-content-center mt-5">
                    {console.log("Users", user)}
                    <div className="col-12 col-lg-7">
  
  
                     <form>
                     <div className="input-field mb-3">
                      <div className="input-icon px-3">
                        <img src="/images/email.svg" alt="email" />
                      </div>


                      <div className="form-group w-100">
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          value={user.email}
                          placeholder="Enter Email Address"
                          onChange={handleChange}
                         
                        />
                        {errField.emailErr.length > 0 && (
                          <span style={{ color: "red" }}>
                            {errField.emailErr}
                          </span>
                        )}
                      </div>
                    </div>
                      <div className="input-field">
                        <div className="input-icon px-3">
                          <img src="/images/lock.svg" alt="confirmOtp" />
                        </div>
                        <div className="form-group w-100">
                          <input
                            type="Number"
                            className="form-control"
                            name="OTP"
                            value={user.OTP}
                            placeholder="Enter confirmOtp"
                            onChange={handleChange}
                          />
                          {errField.OTPErr.length > 0 && (
                            <span style={{ color: "red" }}>
                              {errField.OTPErr}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="login-btn my-3">
                        <button className="btn btn-primary w-100" type="submit" onClick={confirmOtp}>
                          Confirm Your OTP?
                        </button>
                      </div>
                      <div className="login-btn my-3">
                        <button className="btn btn-success w-100" type="submit" onClick={resendOtp}>
                          Resend OTP!
                        </button>
                      </div>
                      </form>
                    </div>
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

export default LabOTP

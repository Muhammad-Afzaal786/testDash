import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./loginsignup.css";
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

function LoginDr() {
    const [user, setUser] = useState({
        email: "",
        password: "",
      });
      const [errField, setErrField] = useState({
        emailErr: "",
        passwordErr: ""
      })
     
      const navigate = useNavigate()
      const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({
          ...user,
          [name]: value,
        });
      };
    
      const logInData =async (e)=>{
        e.preventDefault();
        if (validForm()) {
          let url ='http://3.139.114.73:3000/api/v1/assay/doctor/login'
          let options = {
            method:'POST',
            url:url,
            headers: {
     
            },
            data:user 
          }
          try{
             let response = await axios(options)
             console.log(response)
             if(response.status === 200){
              
                  toast.success("Login Successfully !");
                  // debugger
                   localStorage.setItem("token", response.data.data.data.token)
                   console.log(response.data.data.data.token)
               setTimeout(()=>{
                  navigate('/doctordash')
               },1500)
             }else{
              toast.error(response.data.message);
             }
          }catch(e){
           toast.error("Password wrong Try Again !");
          }
         } else {
           toast.error("Form Invalid");
         }
          
      }
    
      const validForm = () => {
        let formIsValid = true;
        setErrField({
          emailErr: "",
          passwordErr: "",
        });
       
        if (user.email === "") {
          formIsValid = false;
          setErrField((prevState) => ({
            ...prevState,
            emailErr: "Please Enter Email",
          }));
        }
        if (user.password === "") {
          formIsValid = false;
          setErrField((prevState) => ({
            ...prevState,
            passwordErr: "Please Enter Password",
          }));
        }
       
        return formIsValid;
      };
    
    return (
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
                    Please <span>Login </span> to your account to continue
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
                        <img src="/images/lock.svg" alt="password" />
                      </div>
                      <div className="form-group w-100">
                        <input
                          type="password"
                          className="form-control"
                          name="password"
                          value={user.password}
                          placeholder="Enter Password"
                          onChange={handleChange}
                          autoComplete="off"
                        />
                        {errField.passwordErr.length > 0 && (
                          <span style={{ color: "red" }}>
                            {errField.passwordErr}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="remember-forgot">
                      <div className="remember">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="exampleCheck1"
                          />
                          <label className="form-check-label" for="exampleCheck1">
                            Remember Me ?
                          </label>
                        </div>
                      </div>
                      
                      <div className="forgot">
                        <Link to="/forgot" className="forgotP">
                          Forgot Password ?
                        </Link>
                      </div>
                    </div>
                    <div className="login-btn mt-5">
                      <button className="btn btn-primary w-100" type="submit" onClick={logInData}>
                        Login
                      </button>
                    </div>
                    </form>
                    <div className="foot-login my-3">
                      <p>
                        Don't have an account ?
                        <span>
                          &nbsp;<Link to="/signup"> Create Account </Link>
                        </span>
                      </p>
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

export default LoginDr

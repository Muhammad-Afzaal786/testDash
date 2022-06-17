import { useState} from "react";
import { Link , useNavigate } from "react-router-dom";
//import postRequest from "../../ContaxtApi";
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
//import {useNavigate} from 'react-router-dom'
import LabForm from "./LabForm";
import DoctorForm from "./DoctorForm";

export default function SignUp() {
  const [toggleState, setToggleState] = useState();
   const navigate = useNavigate()
  const toggleTab = (index) => {
    setToggleState(index);
  };

  const [user, setUser] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    age: "",
    password: "",
    cPassword: "",
  });
  const [errField, setErrField] = useState({
    fullNameErr: "",
    emailErr: "",
    phoneNumberErr: "",
    ageErr: "",
    passwordErr: "",
    cPasswordErr: "",
  });

  let name, value;
  const handleInput = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUser({ ...user, [name]:value });
  };
  console.log(user);

  const submit =async (e) => {
    e.preventDefault();
    if (validForm()) {
     let url ='http://3.139.114.73:3000/api/v1/assay/patient/signup'
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
        if(response.status === 201){
          toast.success("Added Successfully !");
          setTimeout(()=>{
             navigate('/confirmotp')
          },1500)
        }
     }catch(e){
      toast.error("Something went wrong !");
     }
    } else {
      toast.error("Form Invalid");
    }
  };

 
  const validForm = () => {
    let formIsValid = true;
    setErrField({
      fullNameErr: "",
      lab_nameErr:"",
      startDateErr:"",
      emailErr: "",
      phoneNumberErr: "",
      phone_numberErr:"",
      ageErr: "",
      passwordErr: "",
      cPasswordErr: "",
    });
    if (user.fullName === "") {
      formIsValid = false;
      setErrField((prevState) => ({
        ...prevState,
        fullNameErr: "Please Enter Name",
      }));
    }
    if (user.phone_number === "") {
      formIsValid = false;
      setErrField((prevState) => ({
        ...prevState,
        phone_numberErr: "Please Enter Phone",
      }));
    }
    if (user.lab_name === "") {
      formIsValid = false;
      setErrField((prevState) => ({
        ...prevState,
        lab_nameErr: "Please Enter Name",
      }));
    }
    if (user.startDate === "") {
      formIsValid = false;
      setErrField((prevState) => ({
        ...prevState,
        startDateErr: "Please Enter Start Date",
      }));
    }
    if (user.email === "") {
      formIsValid = false;
      setErrField((prevState) => ({
        ...prevState,
        emailErr: "Please Enter Email",
      }));
    }
    if (user.phoneNumber === "") {
      formIsValid = false;
      setErrField((prevState) => ({
        ...prevState,
        phoneNumberErr: "Please Enter Phone",
      }));
    }
    if (user.age === "") {
      formIsValid = false;
      setErrField((prevState) => ({
        ...prevState,
        ageErr: "Please Enter Age",
      }));
    }
    if (user.password === "") {
      formIsValid = false;
      setErrField((prevState) => ({
        ...prevState,
        passwordErr: "Please Enter Password",
      }));
    }
    if (user.cPassword === "") {
      formIsValid = false;
      setErrField((prevState) => ({
        ...prevState,
        cPasswordErr: "Please Enter Confirm Password",
      }));
    }
    if (user.cPassword !== "" && user.password !== user.cPassword) {
      formIsValid = false;
      setErrField((prevState) => ({
        ...prevState,
        cPasswordErr: "Password Are Not Match",
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
                <div className="login-img-div">
                  <Link to="/">
                    <img src="/images/home.svg" alt="home" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 px-0">
                <div className="logo">
                  <img src="/images/logo.png" alt="logo" />
                </div>
                <div className="login">
                  <h6>Welcome to Assay Tech !</h6>
                  <p>
                    Please <span>Create Account </span> to continue
                  </p>
                </div>
                <div className="row justify-content-center my-5">
                  <div className="col-lg-7 col-12">
                    <div className="bloc-tabs">
                      <button
                        className={
                          toggleState === 1 ? "tabs active-tabs" : "tabs"
                        }
                        onClick={() => toggleTab(1)}
                      >
                        Patient
                      </button>
                      <button
                        className={
                          toggleState === 2 ? "tabs active-tabs" : "tabs"
                        }
                        onClick={() => toggleTab(2)}
                      >
                        Doctor
                      </button>
                      <button
                        className={
                          toggleState === 3 ? "tabs active-tabs" : "tabs"
                        }
                        onClick={() => toggleTab(3)}
                      >
                        Laboratory
                      </button>
                    </div>
                    <div className="content-tabs my-4">
                      <div
                        className={
                          toggleState === 1
                            ? "content  active-content"
                            : "content"
                        }
                      >
                      <ToastContainer/>
                        <form action="/login" method="post">
                          <div className="input-field mb-3">
                            <div className="input-icon px-3">
                              <img src="/images/user.svg" alt="user" />
                            </div>
                            <div className="form-group w-100">
                              <input
                                type="text"
                                name="fullName"
                                value={user.fullName}
                                className="form-control"
                                placeholder="Name"
                                onChange={handleInput}
                              />
                              {errField.fullNameErr.length > 0 && (
                                <span style={{ color: "red" }}>
                                  {errField.fullNameErr}
                                </span>
                              )}
                            </div>
                          </div>
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
                                placeholder="Email Address"
                                onChange={handleInput}
                              />
                              {errField.emailErr.length > 0 && (
                                <span style={{ color: "red" }}>
                                  {errField.emailErr}
                                </span>
                              )}
                            </div>
                          </div>
                          <div className="input-field mb-3">
                            <div className="input-icon px-3">
                              <img src="/images/call.svg" alt="phone" />
                            </div>
                            <div className="form-group w-100">
                              <input
                                type="phone"
                                className="form-control"
                                name="phoneNumber"
                                value={user.phoneNumber}
                                placeholder="Phone No."
                                onChange={handleInput}
                              />
                              {errField.phoneNumberErr.length > 0 && (
                                <span style={{ color: "red" }}>
                                  {errField.phoneNumberErr}
                                </span>
                              )}
                            </div>
                          </div>
                          <div className="input-field mb-3">
                            <div className="input-icon px-3">
                              <img src="/images/lock.svg" alt="password" />
                            </div>
                            <div className="form-group w-100">
                              <input
                                type="number"
                                className="form-control"
                                name="age"
                                value={user.age}
                                placeholder="Age"
                                onChange={handleInput}
                              />
                              {errField.ageErr.length > 0 && (
                                <span style={{ color: "red" }}>
                                  {errField.ageErr}
                                </span>
                              )}
                            </div>
                          </div>
                          <div className="input-field mb-3">
                            <div className="input-icon px-3">
                              <img src="/images/lock.svg" alt="password" />
                            </div>
                            <div className="form-group w-100">
                              <input
                                type="password"
                                className="form-control"
                                name="password"
                                value={user.password}
                                placeholder="Password"
                                onChange={handleInput}
                              />
                              {errField.passwordErr.length > 0 && (
                                <span style={{ color: "red" }}>
                                  {errField.passwordErr}
                                </span>
                              )}
                            </div>
                          </div>
                          <div className="input-field mb-3">
                            <div className="input-icon px-3">
                              <img src="/images/lock.svg" alt="password" />
                            </div>
                            <div className="form-group w-100">
                              <input
                                type="password"
                                className="form-control"
                                name="cPassword"
                                value={user.cPassword}
                                placeholder=" Confirm Password"
                                onChange={handleInput}
                              />
                              {errField.cPasswordErr.length > 0 && (
                                <span style={{ color: "red" }}>
                                  {errField.cPasswordErr}
                                </span>
                              )}
                            </div>
                          </div>

                          <div className="login-btn mt-5">
                            <button
                              className="btn btn-primary w-100"
                              type="submit"
                              onClick={submit}
                            >
                              Create Account
                            </button>
                          </div>
                        </form>

                        <div className="foot-login my-3">
                          <p>
                            Already have an account ?
                            <span>
                              &nbsp;<Link to="/login"> Login </Link>{" "}
                            </span>
                          </p>
                        </div>
                      </div>
                      <div
                        className={
                          toggleState === 2
                            ? "content  active-content"
                            : "content"
                        }
                      >
                        <DoctorForm user={user} handleInput={handleInput} setuser={setUser}/>

                        <div className="foot-login my-3">
                          <p>
                            Already have an account ?
                            <span>
                              &nbsp;<Link to="/login"> Login </Link>{" "}
                            </span>
                          </p>
                        </div>
                      </div>
                      <div
                        className={
                          toggleState === 3
                            ? "content  active-content"
                            : "content"
                        }
                      >
                       <LabForm user={user} handleInput={handleInput}/>

                        <div className="foot-login my-3">
                          <p>
                            Already have an account ?
                            <span>
                              &nbsp;<Link to="/login"> Login </Link>{" "}
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
      </div>
    </div>
  );
}

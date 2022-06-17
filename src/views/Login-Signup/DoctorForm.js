import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function DoctorForm() {
  const navigate = useNavigate();
  const [drUser, setDrUser] = useState({
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

    setDrUser({ ...drUser, [name]: value });
  };
  console.log(drUser);

  const handleForm = async (e) => {
    e.preventDefault();
    if (validForm()) {
      let url = "http://3.139.114.73:3000/api/v1/assay/doctor/signup";
      let options = {
        method: "POST",
        url: url,
        headers: {},
        data: drUser,
      };
      try {
        let response = await axios(options);
        console.log(response);
        if (response.status === 201) {
          toast.success("Added Successfully !");
          setTimeout(() => {
            navigate("/logindr");
          }, 1500);
        }
      } catch (e) {
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

      emailErr: "",
      phoneNumberErr: "",

      ageErr: "",
      passwordErr: "",
      cPasswordErr: "",
    });
    if (drUser.fullName === "") {
      formIsValid = false;
      setErrField((prevState) => ({
        ...prevState,
        fullNameErr: "Please Enter Name",
      }));
    }
  
   
    if (drUser.email === "") {
      formIsValid = false;
      setErrField((prevState) => ({
        ...prevState,
        emailErr: "Please Enter Email",
      }));
    }
    if (drUser.phoneNumber === "") {
      formIsValid = false;
      setErrField((prevState) => ({
        ...prevState,
        phoneNumberErr: "Please Enter Phone",
      }));
    }
    if (drUser.age === "") {
      formIsValid = false;
      setErrField((prevState) => ({
        ...prevState,
        ageErr: "Please Enter Age",
      }));
    }
    if (drUser.password === "") {
      formIsValid = false;
      setErrField((prevState) => ({
        ...prevState,
        passwordErr: "Please Enter Password",
      }));
    }
    if (drUser.cPassword === "") {
      formIsValid = false;
      setErrField((prevState) => ({
        ...prevState,
        cPasswordErr: "Please Enter Confirm Password",
      }));
    }
    if (drUser.cPassword !== "" && drUser.password !== drUser.cPassword) {
      formIsValid = false;
      setErrField((prevState) => ({
        ...prevState,
        cPasswordErr: "Password Are Not Match",
      }));
    }
    return formIsValid;
  };

  return (
    <div>
    <ToastContainer/>
      <form method="POST">
        <div className="input-field mb-3">
          <div className="input-icon px-3">
            <img src="/images/User.svg" alt="drUser" />
          </div>
          <div className="form-group w-100">
            <input
              type="text"
              name="fullName"
              value={drUser.fullName}
              className="form-control"
              placeholder="Name"
              onChange={handleInput}
            />
            {errField.fullNameErr.length > 0 && (
              <span style={{ color: "red" }}>{errField.fullNameErr}</span>
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
              value={drUser.email}
              placeholder="Email Address"
              onChange={handleInput}
            />
            {errField.emailErr.length > 0 && (
              <span style={{ color: "red" }}>{errField.emailErr}</span>
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
              value={drUser.phoneNumber}
              placeholder="Phone No."
              onChange={handleInput}
            />
            {errField.phoneNumberErr.length > 0 && (
              <span style={{ color: "red" }}>{errField.phoneNumberErr}</span>
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
              value={drUser.age}
              placeholder="Age"
              onChange={handleInput}
            />
            {errField.ageErr.length > 0 && (
              <span style={{ color: "red" }}>{errField.ageErr}</span>
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
              value={drUser.password}
              placeholder="Password"
              onChange={handleInput}
            />
            {errField.passwordErr.length > 0 && (
              <span style={{ color: "red" }}>{errField.passwordErr}</span>
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
              value={drUser.cPassword}
              placeholder="Confirm Password"
              onChange={handleInput}
            />
            {errField.cPasswordErr.length > 0 && (
              <span style={{ color: "red" }}>{errField.cPasswordErr}</span>
            )}
          </div>
        </div>
        <div className="login-btn mt-5">
          <button
            className="btn btn-primary w-100"
            type="submit"
            onClick={handleForm}
          >
            Create Account
          </button>
        </div>
      </form>
    </div>
  );
}

export default DoctorForm;

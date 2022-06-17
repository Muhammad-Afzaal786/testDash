import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LabForm() {
    const navigate = useNavigate();
    const [labUser, setLabUser] = useState({
      lab_name: "",
      email: "",
      phone_number: "",
      startDate: "",
      password: "",
      cPassword: "",
    });
    const [errField, setErrField] = useState({
      lab_nameErr: "",
      emailErr: "",
      phone_numberErr: "",
      startDateErr: "",
      passwordErr: "",
      cPasswordErr: "",
    });
  
    let name, value;
    const handleInput = (event) => {
      name = event.target.name;
      value = event.target.value;
  
      setLabUser({ ...labUser, [name]: value });
    };
    console.log(labUser);
  
    const labData = async (e) => {
      e.preventDefault();
      if (validForm()) {
        let url = "http://3.139.114.73:3000/api/v1/assay/lab/signup";
        let options = {
          method: "POST",
          url: url,
          headers: {},
          data: labUser,
        };
        try {
          let response = await axios(options);
          console.log(response);
          if (response.status === 201) {
            toast.success("Added Successfully !");
            setTimeout(() => {
              navigate("/labotp");
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
        lab_nameErr: "",
  
        emailErr: "",
        phone_numberErr: "",
  
        startDateErr: "",
        passwordErr: "",
        cPasswordErr: "",
      });
      if (labUser.lab_name === "") {
        formIsValid = false;
        setErrField((prevState) => ({
          ...prevState,
          lab_nameErr: "Please Enter Name",
        }));
      }
    
     
      if (labUser.email === "") {
        formIsValid = false;
        setErrField((prevState) => ({
          ...prevState,
          emailErr: "Please Enter Email",
        }));
      }
      if (labUser.phone_number === "") {
        formIsValid = false;
        setErrField((prevState) => ({
          ...prevState,
          phone_numberErr: "Please Enter Phone",
        }));
      }
      if (labUser.startDate === "") {
        formIsValid = false;
        setErrField((prevState) => ({
          ...prevState,
          startDateErr: "Please Enter startDate",
        }));
      }
      if (labUser.password === "") {
        formIsValid = false;
        setErrField((prevState) => ({
          ...prevState,
          passwordErr: "Please Enter Password",
        }));
      }
      if (labUser.cPassword === "") {
        formIsValid = false;
        setErrField((prevState) => ({
          ...prevState,
          cPasswordErr: "Please Enter Confirm Password",
        }));
      }
      if (labUser.cPassword !== "" && labUser.password !== labUser.cPassword) {
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
            <img src="/images/user.svg" alt="user" />
          </div>
          <div className="form-group w-100">
            <input
              type="text"
              name="lab_name"
               value={labUser.lab_name}
              className="form-control"
              placeholder="Name"
              onChange={handleInput}
            />
            {errField.lab_nameErr.length > 0 && (
                <span style={{ color: "red" }}>{errField.lab_nameErr}</span>
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
               value={labUser.email}
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
              name="phone_number"
               value={labUser.phone_number}
              placeholder="Phone No."
               onChange={handleInput}
            />
            {errField.phone_numberErr.length > 0 && (
                <span style={{ color: "red" }}>{errField.phone_numberErr}</span>
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
              name="startDate"
               value={labUser.startDate}
              placeholder="StartDate"
               onChange={handleInput}
            />
            {errField.startDateErr.length > 0 && (
                <span style={{ color: "red" }}>{errField.startDateErr}</span>
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
               value={labUser.password}
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
          <img src="/images/lock.svg    " alt="password" />
        </div>
        <div className="form-group w-100">
          <input
            type="password"
            className="form-control"
            name="cPassword"
            value={labUser.cPassword}
            placeholder=" Confirm Password"
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
              onClick={labData}
          >
            Create Account
          </button>
        </div>
      </form>
        </div>
    )
}

export default LabForm

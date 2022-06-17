import React, { useState, useEffect } from "react";
import "./location.css";
// import { FaAngleDown } from "react-icons/fa";

export default function Location() {
  // const [selected, setSelected] = useState("Type");

  //const [active, setActive] = useState(false);
  //const options = ["Doctor", "Patient", "Laboratory"];


  const [user , setUser] = useState({
      name:'',
      email:'',
      phone:'',
      selected:'',
      subject:'',
      textArea:'',


  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);


 let name , value;
  const handleInputs = (event)=>{
      name = event.target.name;
      value= event.target.value;

      setUser({ ...user , [name]:value})

  }

  const postData =async (e)=>{
       e.preventDefault();
       setFormErrors(validate(user));
       setIsSubmit(true);
      const { name, email, phone, selected, subject, textArea} = user;
        const res =await fetch('http://localhost:3000/api/test/',{
            method:'POST',
           headers : {
               "Accept" : "application/json",
            "Content-Type" :'application/json'
           }, 
           body:JSON.stringify({ 
            name,
            email,
            phone,
            selected,
            subject,
            textArea
           })
        })
         const data = await res.json();
         console.log(data,"======->Res")
  }
 
    useEffect(() => {
      console.log(formErrors);
      if (Object.keys(formErrors).length === 0 && isSubmit) {
        console.log(user);
      } // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [formErrors]); // eslint-disable-next-line react-hooks/exhaustive-deps
    
    const validate = (values) => {
      const errors = {};
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
      if (!values.name) {
        errors.name = "name is required!";
      }
      if (!values.email) {
        errors.email = "Email is required!";
      } else if (!regex.test(values.email)) {
        errors.email = "This is not a valid email format!";
      }
      if (!values.phone) {
          errors.phone = "Phone is required!";
        }
        if (!values.subject) {
          errors.subject = "Subject is required!";
        }
        if (!values.textArea) {
          errors.textArea = "TextArea is required!";
        }
        if (!values.selected) {
          errors.selected = "Selecte field is required!";
        }

      // if (!values.phone) {
      //     errors.phone = "phone is required!";
      //   } else if (!regex.test(values.phone)) {
      //     errors.phone = "This is not a valid phone format!";
      //   }


      // if (!values.password) {
      //   errors.password = "Password is required";
      // } else if (values.password.length < 4) {
      //   errors.password = "Password must be more than 4 characters";
      // } else if (values.password.length > 10) {
      //   errors.password = "Password cannot exceed more than 10 characters";
      // }
      return errors;
      
    };


  return (
    <div className="learn">
      <div className="container-fluid px-0 mb-5">
        <div className="row gx-0 px-0">
          <div className="col-lg-12">
            <div className="background">
              <div className="main-text">Wanna Find Us ?</div>
              <div className="main-description">
                Assay Tech does not provide testing in its offices. The tests
                are ordered by physicians, urgent care clinics, hospital systems
                or labs. Our corporate contact information is below.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container my-5">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="virtual">
              <p>CONTACT US</p>
              <h6>Get In Touch</h6>
            </div>
            <div className="row mt-4">
              <div className="col-lg-6 mb-4">
                <div className="back">
                  <div className="icon-set">
                    <img src="/images/phone-b.svg" alt="icon" />
                  </div>
                  <p>561-343-0726</p>
                </div>
              </div>
              <div className="col-lg-6 mb-4">
                <div className="back">
                  <div className="icon-set">
                    <img src="/images/email.svg" alt="icon" />
                  </div>
                  <p>info@assaytech.co</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="message">


           
              <form method="POST">
                <div className="form-group mb-3">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="exampleInputName1"
                    aria-describedby="nameHelp"
                    onChange={handleInputs}
                    value={user.name}
                    placeholder="Full Name"
                    required
                  />
                   <small style={{color:'red'}}>{formErrors.name}</small>
                </div>
               
                <div className="form-group mb-3">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    onChange={handleInputs}
                    value={user.email}
                    placeholder="Email Address"
                    required
                  />
                   <small style={{color:'red'}}>{formErrors.email}</small>
                </div>
               
                <div className="form-group mb-3">
                  <input
                    type="text"
                    name="phone"
                    className="form-control"
                    id="exampleInputSubject1"
                    onChange={handleInputs}
                    value={user.phone}
                    placeholder="Phone Number"
                    required
                  />
                  <small style={{color:'red'}}>{formErrors.phone}</small>
                </div>
                <select className="form-control  mb-3  p-3" name="selected"  onChange={handleInputs} >
                  <option >Doctor</option>
                  <option >Patient</option>
                  <option >Laboratory</option>
                </select>
                <small style={{color:'red'}}>{formErrors.selected}</small>

                {/* <div className="dropdown mb-3">
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
                                </div> */}

                <div className="form-group mb-3">
                  <input
                    type="text"
                    name="subject"
                    className="form-control"
                    id="exampleInputSubject1"
                    onChange={handleInputs}
                    value={user.subject}
                    placeholder="Subject"
                    required
                  />
                   <small style={{color:'red'}}>{formErrors.subject}</small>
                </div>
                <div className="form-group">
                  <textarea
                  name="textArea"
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    onChange={handleInputs}
                    value={user.textArea}
                    placeholder="Type your Message"
                    required
                  ></textarea>
                   <small style={{color:'red'}}>{formErrors.textArea}</small>
                </div>
                <button className="btn btn-primary px-4 py-2 mt-4" type="submit"  onClick={postData}>
                  Send Message
                </button>
              </form>




            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// import React,{useState} from "react";
// import {Link ,useNavigate} from 'react-router-dom'
// import axios from 'axios';
// import { ToastContainer, toast } from 'react-toastify';

// export default function EditProfile() {
//   const navigate = useNavigate()
//   const [user, setUser] = useState({
//     fullName: "",
//     email: "",
//     phone: "",
//     medical: "",
//     lisence:"",
//     birth:"",
//     password: "",
//     address: "",
//   });
  
//   const [errField, setErrField] = useState({
//     fullNameErr: "",
//     emailErr: "",
//     phoneErr: "",
//     medicalErr: "",
//     lisenceErr:"",
//     birthErr:"",
//     passwordErr: "",
//     addressErr: "",
//   });


//   let name, value;
//   const handleInput = (event) => {
//     name = event.target.name;
//     value = event.target.value;

//     setUser({ ...user, [name]: value });
//   };
//   console.log(user);
    
//   const EditData =async (e)=>{
//     e.preventDefault()
//     if (validForm()) {
//       let url ='http://3.139.114.73:3000/api/v1/assay/patient/signup'
//       let options = {
//         method:'POST',
//         url:url,
//         headers: {
 
//         },
//         data:user 
//       }
//       try{
//          let response = await axios(options)
//          console.log(response)
//          if(response.status === 201){
//            toast.success("Added Successfully !");
//            setTimeout(()=>{
//               navigate('/confirmotp')
//            },1500)
//          }
//       }catch(e){
//        toast.error("Something went wrong !");
//       }
//      } else {
//        toast.error("Form Invalid");
//      }
//   }
//   const validForm = () => {
//     let formIsValid = true;
//     setErrField({
//       fullNameErr: "",
//       emailErr: "",
//       phoneErr: "",
//       medicalErr: "",
//       lisenceErr:"",
//       birthErr:"",
//       passwordErr: "",
//       addressErr: "",
//     });
//     if (user.fullName === "") {
//       formIsValid = false;
//       setErrField((prevState) => ({
//         ...prevState,
//         fullNameErr: "Please Enter Name",
//       }));
//     }
//     if (user.phone === "") {
//       formIsValid = false;
//       setErrField((prevState) => ({
//         ...prevState,
//         phoneErr: "Please Enter Phone Number",
//       }));
//     }
//     if (user.medical === "") {
//       formIsValid = false;
//       setErrField((prevState) => ({
//         ...prevState,
//         medicalErr: "Please Enter Medical Details",
//       }));
//     }
//     if (user.lisence === "") {
//       formIsValid = false;
//       setErrField((prevState) => ({
//         ...prevState,
//         lisenceErr: "Please Enter Expiry Date",
//       }));
//     }
//     if (user.email === "") {
//       formIsValid = false;
//       setErrField((prevState) => ({
//         ...prevState,
//         emailErr: "Please Enter Email",
//       }));
//     }
//     if (user.birth === "") {
//       formIsValid = false;
//       setErrField((prevState) => ({
//         ...prevState,
//         birthErr: "Please Enter Your Bithday Date",
//       }));
//     }
//     if (user.address === "") {
//       formIsValid = false;
//       setErrField((prevState) => ({
//         ...prevState,
//         addressErr: "Please Enter Your Address",
//       }));
//     }
//     if (user.password === "") {
//       formIsValid = false;
//       setErrField((prevState) => ({
//         ...prevState,
//         passwordErr: "Please Enter Password",
//       }));
//     }
   
    
//     return formIsValid;
//   };

//     return (
//         <div className="dashboard">
//         <div className="container">
//           <div className="row justify-content-center my-5">
//             <div className="col-lg-12 d-flex justify-content-center">
//               <div className="profile-div">
//                 <img src="./images/profile.jpg" alt="profile-img" />
//               </div>
//             </div>
//             </div>
//             <ToastContainer/>
//            <form>
//            <div className="row justify-content-center">
//            <div className="col-lg-5">
//              <div class="form-group">
//                <label for="exampleInputEmail1">Full Name</label>
//                <input onChange={handleInput} name="fullName" value={user.fullName} type="text" class="form-control mt-2" id="exampleInputName1" aria-describedby="emailHelp" placeholder="Assay Tech" />
//                {errField.fullNameErr.length > 0 && (
//                 <span style={{ color: "red" }}>
//                   {errField.fullNameErr}
//                 </span>
//               )}
               
//              </div>
//              <div class="form-group">
//                <label for="exampleInputEmail1">Gender</label>
//                <input  name="gender" type="email" class="form-control mt-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Gender" />
//              </div>
//              <div class="form-group">
//                <label for="exampleInputEmail1">Email address</label>
//                <input onChange={handleInput} name="email" value={user.email} type="email" class="form-control mt-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
//                {errField.emailErr.length > 0 && (
//                 <span style={{ color: "red" }}>
//                   {errField.emailErr}
//                 </span>
//               )}
//              </div>
//            </div>
//            <div className="col-lg-5">
//              <div class="form-group">
//                <label for="exampleInputEmail1">Phone</label>
//                <input onChange={handleInput} name="phone" value={user.phone} type="nubmer" class="form-control mt-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Phone No." />
//                {errField.phoneErr.length > 0 && (
//                 <span style={{ color: "red" }}>
//                   {errField.phoneErr}
//                 </span>
//               )}
//              </div>
//              <div class="form-group">
//                <label for="exampleInputEmail1">Date Of Birth</label>
//                <input onChange={handleInput} name="birth" value={user.birth} type="date" class="form-control mt-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Birthday-Date" />
//                {errField.birthErr.length > 0 && (
//                 <span style={{ color: "red" }}>
//                   {errField.birthErr}
//                 </span>
//               )}
//              </div>
//              <div class="form-group">
//                <label for="exampleInputEmail1">Password</label>
//                <input onChange={handleInput} name="password" value={user.password} type="password" class="form-control mt-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Password" />
//                {errField.passwordErr.length > 0 && (
//                 <span style={{ color: "red" }}>
//                   {errField.passwordErr}
//                 </span>
//               )}
//              </div>
//            </div>
//          </div>
//          <div className="row justify-content-center">
//            <div className="col-lg-10">
//              <h5 className="primary pt-5">Medical Details</h5>
//            </div>
//          </div>
//          <div className="row justify-content-center">
//            <div className="col-lg-5">
//              <div class="form-group">
//                <label for="exampleInputEmail1">Medical Speciality</label>
//                <input onChange={handleInput} name="medical" value={user.medical} type="text" class="form-control mt-2" id="exampleInputName1" aria-describedby="emailHelp" placeholder="Medical Details" />
//                {errField.medicalErr.length > 0 && (
//                 <span style={{ color: "red" }}>
//                   {errField.medicalErr}
//                 </span>
//               )}
//              </div>
//            </div>
//            <div className="col-lg-5">
//              <div class="form-group">
//                <label for="exampleInputEmail1">Lisence Expiry Date</label>
//                <input onChange={handleInput} name="lisence" value={user.lisence} type="date" class="form-control mt-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Expiry-Date" />
//                {errField.lisenceErr.length > 0 && (
//                 <span style={{ color: "red" }}>
//                   {errField.lisenceErr}
//                 </span>
//               )}
//              </div>
//            </div>
//          </div>
//          <div className="row justify-content-center">
//            <div className="col-lg-10">
//              <h5 className="primary pt-5">Address Details</h5>
//              <div class="form-group">
//                <label for="exampleInputEmail1">Full Address</label>
//                <input onChange={handleInput} name="address" value={user.address} type="text" class="form-control mt-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Address" />
//                {errField.addressErr.length > 0 && (
//                 <span style={{ color: "red" }}>
//                   {errField.addressErr}
//                 </span>
//               )}
//              </div>
//            </div>
//          </div>
//          <div className="row justify-content-center my-5">
//            <div className="col-lg-3">
//              <div className="btn-cancel">
//                <button type="button" class="btn btn-primary px-5" onClick={EditData}>Save Info</button>
//                <Link to="/cancel" class="link-secondary">Cancel</Link>
//              </div>
//            </div>
//          </div>
//            </form>
//         </div>
//       </div>
//     )
// }
import React from 'react'

function EditProfile() {
  return (
    <div>
      Doctor
    </div>
  )
}

export default EditProfile

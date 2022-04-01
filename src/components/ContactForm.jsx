import React, { useRef, useState } from "react";
// import Header from "./Header";
// import Footer from "./Footer";
// import Img from "./Img";
// import { dividerClasses } from "@mui/material";
// import ContactThanks from "./ContactThanks"
// import { Link } from "react-router-dom";
import reactDom,{render} from "react-dom";
const axios = require('axios').default;

function ContactForm() {
  const nameRef = useRef();
  const [email, setEmail] = useState("");
  const messageRef = useRef();
  const [submitState  ,setSubmitState] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('/contact', {
      "email":email,
      "name":nameRef.current.value,
      "message":messageRef.current.value
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    setSubmitState(true);
  //   render(
  //     <div className="thanks-div">
  //     <h1 style={{color:"white"}}>Thanks!</h1>
  //     </div>
  //     ,document.getElementById("myForm"));
  };
  return (  submitState ? (<div className="contact-form"><div className="thanks-div">
    <h1 style={{color:"white"}}>Thanks!</h1>
    </div></div>):(  
    <div className="contact-form">
      <form id="myForm" name="myForm">
      
        <div className="form-floating mb-3 col-4 ">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            autoComplete="off"
            name="email"
            onChange={(e) => setEmail(e.target.value)}

            // onChange={handleChange} 
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>

        <div className="form-floating col-4 mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingText"
            placeholder="Name"
            autoComplete="off"
            name="name"
            // onChange={(e) => setName(e.target.value)}
            ref={nameRef}
            // onChange={handleChange} 
          />
          <label htmlFor="floatingText">Name</label>
        </div>
      
        <div>
          <div className="form-floating col-4 mb-3">
            <textarea
            className="form-control"
            placeholder="Leave a message here"
            id="floatingTextarea2"
            style={{ height: "150px" }}
            autoComplete="off"
            name="message"
            // onChange={(e) => setMessage(e.target.value)}
            ref={messageRef}
            // onChange={handleChange} 
            />
            <label htmlFor="floatingTextarea2">Message</label>
          </div>
        </div>
        <button className="btn btn-primary" type="submit" onClick={handleSubmit}>Let's Talk!</button>
      
      </form>
      
    
    </div>
) )   
  
}

export default ContactForm;

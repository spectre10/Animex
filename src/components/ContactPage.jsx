
import React from "react";
import ContactForm from "./ContactForm";
import Img from "./Img";
function ContactPage() {
    // const [data,setData]=useState({})
    // useEffect(()=>{
    //     fetch("/contact")
    //     .then(res=>res.json())
    //     .then(data=>setData(data))
    // },[])
    

    // let myForm = document.getElementById('myForm');
    // let formData = new FormData(myForm);
    // function handleClick(formData) {
        
    //     fetch('http://localhost:5000/contact', {
    
    //         method: 'POST', 
    //         mode: 'cors', 
    //         body: formData // body data type must match "Content-Type" header
      
    //       })
    // }

    return (
    <div>
        {/* <Header/> */}
        <ContactForm/>
        {/* <div>{data.name}</div> */}
        <Img/>
        {/* <Footer/> */}
    </div>
    )
}
export default ContactPage;

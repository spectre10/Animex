import axios, { Axios } from "axios";
export default function Signup() {
  function handle() {
  //   fetch('http://localhost:5000/auth/google',{
  //     method:"GET"
  //   })
  // .then(response => response.json())
  // .then(data => console.log(data));

// axios.get("/auth/google")

var form = document.createElement('form');
  form.setAttribute('method', 'GET');
  form.setAttribute('action', 'http://localhost:5000/auth/google');
  
  // var idInput = document.createElement('input');
  // idInput.setAttribute('type', 'hidden');
  // idInput.setAttribute('name', 'client_id');
  // idInput.setAttribute('value', 'myapplicationsgoogleclientid');
  // form.appendChild(idInput);
  
  //.. all other parameters (input elements) I need in my request.
  
  document.body.appendChild(form);
  form.submit();
  }
  return (
    <>
      <button onClick={handle}>Signup</button>
    </>
  );
}

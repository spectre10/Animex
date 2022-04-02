import axios from "axios";
import { useContext } from "react";
import {useNavigate} from "react-router-dom";
import { UserContext } from "./UserContext";
export default function Signup() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  async function logout() {
    const response = await axios.post("/user/logout",{withCredentials: true})
    console.log(response);
    if (response.statusText && window){ 
      // window.location.href="/thankyou"; 
      setUser(null);
      return navigate("/");
    }
    // var form = document.createElement("form");
    // form.setAttribute("method", "POST");
    // form.setAttribute("action", "http://localhost:5000/logout");
    // document.body.appendChild(form);
    // form.submit();
  }
  function handle() {
    var form = document.createElement("form");
    form.setAttribute("method", "GET");
    form.setAttribute("action", "http://localhost:5000/auth/google");

    document.body.appendChild(form);
    form.submit();
  }
  return (
    <>
      <button onClick={handle} className="mt-60">login</button>
      <button onClick={logout}>logout</button>
    </>
  );
}

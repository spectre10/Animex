import axios from "axios";
// import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useProfile } from "./UserContext";
// import { UserContext } from "./UserContext";
export default function Signup() {
    const { user, setUser } = useProfile();
    const navigate = useNavigate();
    async function logout() {
        const response = await axios.post("/user/logout", { withCredentials: true })
        console.log(response);
        if (response.statusText && window) {
            setUser(null);
            return navigate("/");
        }
    }
    function handle() {
        var form = document.createElement("form");
        form.setAttribute("method", "GET");
        form.setAttribute("action", "/auth/google");

        document.body.appendChild(form);
        form.submit();
    }
    return (
        <>
            {user?<button onClick={logout} className="mt-60">logout</button>:<button onClick={handle} className="mt-60">login</button>}
            {/* <button onClick={handle} className="mt-60">login</button> */}
            {/* <button onClick={logout} className="">logout</button> */}
        </>
    );
}

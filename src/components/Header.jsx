import React from "react";
import Button from "react-bootstrap/Button"
import Popup from "reactjs-popup";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"
import { useProfile } from "./UserContext";
function Header() {
    let navigate = useNavigate();
    const { user, setUser } = useProfile();
    async function logout() {
        const response = await axios.post("/user/logout", { withCredentials: true })
        console.log(response);
        if (response.statusText && window) {
            setUser(null);
            window.location.replace("/")
            // return navigate("/");
        }
    }
    function handle() {
        var form = document.createElement("form");
        form.setAttribute("method", "GET");
        form.setAttribute("action", "/auth/google");

        document.body.appendChild(form);
        form.submit();
    }
    const handleKeyDown = async (event) => {
        if (event.key === "Enter") {
            setTimeout(() => {
                window.location.reload(false);
            }, 0);
            event.preventDefault();
            let path = "/search/" + document.getElementById("search-box").value;
            navigate(path, { replace: true });
        }
    };
    // useCountRenders();
    return (
        <div className="nav-fix">
            <nav className="navbar navbar-dark  ">
                <div className="container-fluid">
                    <div className="zoom ">
                        <a className="navbar-brand" href="/">
                            <img
                                className="logo"
                                // src="https://i.ibb.co/P6BZgpN/animex-logo.png"
                                // src="https://i.ibb.co/NKM03vQ/logo.png"
                                src="/./images/logo1.png"
                                // src="https://i.ibb.co/3CdS8cn/ANIMEX.png"
                                alt="animex-logo"
                                border="0"
                                height="24"
                                width=""
                            />
                        </a>
                    </div>
                    <ul className="nav navlink-div">
                        <li className="nav-item">
                            <Link
                                to="/"
                                className="nav-link header-link"
                                aria-current="page"
                                href="#"
                            >
                                Home
              </Link>
                        </li>
                        {/* <li className="nav-item"> */}
                        {/*   <Link to="/explore" className="nav-link header-link"> */}
                        {/*     Explore */}
                        {/*   </Link> */}
                        {/* </li> */}
                        <li className="nav-item">
                            <Link className="nav-link header-link" to="/library">
                                Library
              </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link header-link" to="/contact">
                                Contact
              </Link>
                        </li>
                        {/* <li className="nav-item"> */}
                        {/*   <a className="nav-link header-link" href="#" aria-disabled="true"> */}
                        {/*     Categories */}
                        {/*   </a> */}
                        {/* </li> */}
                        <li className="nav-item">
                            <a
                                className="nav-link header-link"
                                href="https://github.com/spectre10/Animex"
                                aria-disabled="true"
                                target="_blank"
                                rel="noreferrer noopener"
                            >
                                GitHub
              </a>
                        </li>
                    </ul>

                    <form className="d-flex" autoComplete="off">
                        <input
                            className="form-control me-2 search"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                            onKeyDown={handleKeyDown}
                            id="search-box"
                        />
                        {/* <Search /> */}
                        {user ? (
                            <>
                                <Popup
                                    trigger={
                                        <div>
                                            <Button variant="link" className="header-btn nav-link active register header-link name-span">
                                                {user.username}
                                                {/* <i className="fas fa-angle-right arrow"></i> */}
                                            </Button>
                                        </div>
                                    }
                                    position="bottom center"
                                    on="hover"
                                    closeOnDocumentClick
                                    mouseLeaveDelay={300}
                                    mouseEnterDelay={0}
                                    contentStyle={{ padding: "0px", border: "none" }}
                                    arrow={false}
                                >
                                    <Link to="" className="header-btn nav-link register header-link bg-stone-600 rounded " onClick={logout}>
                                        Logout
                                    </Link>
                                </Popup>
                            </>) : (
                                <Link
                                    className="nav-link active register header-link"
                                    aria-current="page"
                                    to=""
                                    onClick={handle}
                                >
                                    Login With Google
                                </Link>
                            )}
                        {/* <a className="nav-link active register header-link" aria-current="page" href="/signup">
              Register
            </a> */}
                    </form>
                </div>
            </nav>
        </div>
    );
}

export default React.memo(Header);

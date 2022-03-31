import React, { useContext } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom"
import { UserContext } from "./UserContext";

function Header() {
  let navigate = useNavigate();
  const {user,setUser}= useContext(UserContext);
  const handleKeyDown =async (event) => {
    if (event.key === 'Enter') {
      setTimeout(()=>{
           window.location.reload(false);
         },0); 
      event.preventDefault();
      let path = "/search/"+ document.getElementById("search-box").value;
      navigate(path,{ replace: true });
    }}
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
              <Link to="/" className="nav-link header-link" aria-current="page" href="#">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/explore" className="nav-link header-link">
                Explore
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link header-link" href="/library">
                Library
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link header-link" href="#" aria-disabled="true">
                Categories
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link header-link" href="https://github.com/spectre10/Animex" aria-disabled="true" target="_blank" rel="noreferrer noopener">
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
            {
              user?<a className="nav-link active register header-link" aria-current="page" href="/signup">
              xyz
            </a>:<a className="nav-link active register header-link" aria-current="page" href="/signup">
              Register
            </a>
            }
            {/* <a className="nav-link active register header-link" aria-current="page" href="/signup">
              Register
            </a> */}
          </form>
        </div>
      </nav>
    </div>
  );
}

export default Header;

import React from "react";
import Search from "./Search";
import { Link } from "react-router-dom"

function Header() {
  return (
    <div className="nav-fix">
      <nav className="navbar navbar-dark  ">
        <div className="container-fluid">
          <div className="zoom ">
            <a className="navbar-brand" href="#">
              <img
                className="logo"
                // src="https://i.ibb.co/P6BZgpN/animex-logo.png"
                // src="https://i.ibb.co/NKM03vQ/logo.png"
                src="./images/logo1.png"
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
              <a className="nav-link header-link" href="#">
                Library
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link header-link" href="#" aria-disabled="true">
                Categories
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link header-link" href="#" aria-disabled="true">
                GitHub
              </a>
            </li>
          </ul>

          <form className="d-flex">
            <input
              className="form-control me-2 search"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            {/* <Search /> */}

            <a className="nav-link active register header-link" aria-current="page" href="">
              Register
            </a>
          </form>
        </div>
      </nav>
    </div>
  );
}

export default Header;

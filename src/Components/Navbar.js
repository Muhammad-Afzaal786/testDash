import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [navLinkState, setnavLinkState] = useState(1);

  const navToggleTab = (index) => {
    setnavLinkState(index);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src="/images/logo.png" alt="logo" className="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto justify-content-center">
              <li
                className="nav-item"
                data-toggle="collapse"
                data-target=".navbar-collapse.show"
              >
                <Link
                  className={navLinkState === 1 ? "nav-link active" : "nav-link"}
                  onClick={() => navToggleTab(1)}
                 
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li
                className="nav-item"
                data-toggle="collapse"
                data-target=".navbar-collapse.show"
              >
                <Link
                  className={navLinkState === 2 ? "nav-link active" : "nav-link"}
                 
                  onClick={() => navToggleTab(2)}
                  to="/location"
                >
                  Contact Us
                </Link>
              </li>
              <li
                className="nav-item"
                data-toggle="collapse"
                data-target=".navbar-collapse.show"
              >
                <Link
                  className={navLinkState === 3 ? "nav-link active" : "nav-link"}
                  onClick={() => navToggleTab(3)}
                 
                  to="/learn"
                >
                  Learn More
                </Link>
              </li>
            </ul>
            <ul className="nav navbar-nav ml-auto justify-content-end align-items-lg-center align-items-start">
              <li
                className="nav-item"
                data-toggle="collapse"
                data-target=".navbar-collapse.show"
              >
                <Link
                  className={navLinkState === 4 ? "nav-link active" : "nav-link"}
                  onClick={() => navToggleTab(4)}
                  to="/login"
                >
                  Login
                </Link>
              </li>
              <li
                className="nav-item"
                data-toggle="collapse"
                data-target=".navbar-collapse.show"
              >
                <Link to="/signup">
                  <button
                    className={
                      navLinkState === 5 ? "btn btn-primary" : "btn btn-primary"
                    }
                    onClick={() => navToggleTab(5)}
                    type="submit"
                  >
                    Create Account
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

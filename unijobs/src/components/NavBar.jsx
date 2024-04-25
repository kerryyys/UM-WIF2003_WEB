import React from "react";
import "../components-css/NavBar.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import ProfilePic from "../assets/images/profile_pic.svg";
import { useState } from "react";

export default function NavBar({ loggedIn }) {
  return (
    <div className="navbar-style">
      <nav className="navbar navbar-expand-lg">
        <Link className="navbar-brand" to="/">
          UniJobs
        </Link>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link to="/JobscapeMainPage" className="nav-link">
                Jobscape
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/SeekJobPage" className="nav-link">
                Seek Jobs
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Community">
                Community
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/AboutUs" className="nav-link">
                About Us
              </Link>
            </li>
          </ul>
          {loggedIn ? (
            <>
              <Link to="/Profile">
                <img src={ProfilePic} alt="" className="navbar-profile-pic" />
              </Link>
              <div className="navbar-sign-out">
                <Button
                  onClick={() => (window.location.href = "/Login")}
                  className="navbar-sign-out-btn"
                >
                  Sign out <i className="bi bi-box-arrow-right" />
                </Button>
              </div>
            </>
          ) : null}
        </div>
      </nav>
    </div>
  );
}

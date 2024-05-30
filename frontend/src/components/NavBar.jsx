import React from "react";
import "../components-css/NavBar.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import ProfilePic from "../assets/images/profile_pic.svg";

export default function NavBar({ loggedIn }) {
  const linkProps = [
    { label: "Jobscape", link: "/JobscapeMainPage", isActive: true },
    { label: "Seek Jobs", link: "/SeekJobPage", isActive: false },
    { label: "Community", link: "/Community", isActive: false },
    { label: "About Us", link: "/AboutUs", isActive: false },
  ];

  return (
    <div className="navbar-style tw-px-1 tw-py-1 tw-pl-8 tw-text-lg">
      <nav className="navbar navbar-expand-lg tw-p-5">
        <Link
          className="tw-absolute tw-lexft-8 tw-top-1/2 w-transform tw--translate-y-1/2 tw-text-3xl tw-font-kaushan"
          to="/"
        >
          UniJobs
        </Link>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            {linkProps.map((linkProp) => (
              <li className={` ${linkProp.isActive ? "active" : ""}`}>
                <Link
                  to={`${linkProp.link}`}
                  className="nav-link tw-text-secondary"
                >
                  {linkProp.label}
                </Link>
              </li>
            ))}
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

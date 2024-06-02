import React from "react";
import "../components-css/NavBar.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import ProfilePic from "../assets/images/profile_pic.svg";
import { motion } from "framer-motion";
import { useUserContext } from "../context/UserContext";

export default function NavBar() {
  const { user } = useUserContext();

  const linkProps = [
    { label: "Jobscape", link: "/JobscapeMainPage", isActive: true },
    { label: "Seek Jobs", link: "/SeekJobPage", isActive: false },
    { label: "Community", link: "/Community", isActive: false },
    { label: "About Us", link: "/AboutUs", isActive: false },
  ];

  return (
    <div className="navbar-style tw-p-2">
      <nav className="tw-w-full tw-flex tw-flex-row tw-justify-between tw-items-center tw-px-5 lg:tw-px-10 tw-text-lg navbar">
        <div>
          <Link className="tw-text-3xl tw-font-kaushan" to="/">
            UniJobs
          </Link>
        </div>

        <div className="tw-hidden lg:tw-inline">
          <ul className="tw-flex tw-gap-4">
            {linkProps.map((linkProp) => (
              <motion.li
                key={linkProp.label}
                className={`${linkProp.isActive ? "active" : ""}`}
                whileHover={{
                  scale: 1.3,
                  textShadow: "0px 0px 10px rgba(255, 255, 255, 1)",
                  color: "#d4d4d8",
                  paddingLeft: "10px",
                  paddingRight: "10px",
                }}
                whileTap={{
                  scale: 1,
                }}
                transition={{ type: "spring", stiffness: 100 }}
              >
                <Link to={linkProp.link} className="nav-link tw-text-secondary">
                  {linkProp.label}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="tw-flex tw-items-center tw-gap-3">
          {user && (
            <>
              <Link to="/Profile">
                <img
                  src={ProfilePic}
                  alt="Profile"
                  className="tw-cursor-pointer tw-w-[50px]"
                />
              </Link>
              <Button
                onClick={() => (window.location.href = "/Login")}
                className="navbar-sign-out-btn"
              >
                Sign out <i className="bi bi-box-arrow-right" />
              </Button>
            </>
          )}
        </div>
      </nav>
    </div>
  );
}

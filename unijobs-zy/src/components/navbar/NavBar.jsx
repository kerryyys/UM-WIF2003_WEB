import React from "react";
import "./NavBar.css";

export default function NavBar() {
  return (
    <div className="navbar-style">
      <nav className="navbar navbar-expand-lg">
      <a className="navbar-brand" href="#">
          UniJobs
        </a>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">

            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Jobs
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                About Us
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact Us
              </a>
            </li>

          </ul>
        </div>
      </nav>
    </div>
  );
}

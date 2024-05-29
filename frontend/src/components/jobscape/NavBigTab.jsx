import React from "react";
import { Link } from "react-router-dom";
import "../../components-css/jobscape/NavBigTab.css";

const NavBigTab = ({ backgroundImage, text,borderRadius, to }) => {
  return (
    <Link
      to={to}
      className="NavBigTab"
      style={{ backgroundImage: `url(${backgroundImage})`, borderRadius: `${borderRadius}`}}
    >
      <span className="TabText">{text}</span>
    </Link>
  );
};

export default NavBigTab;

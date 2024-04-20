import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function Home() {
    return (
      <div>
        <div className="main">
          <div className="contentH">
            <div className="sc">
              <h1>TESTING TESTING</h1>
            </div>
            <div className="btn">
              <Link to="/JobscapeMainPage">
                <Button variant="primary">Click me</Button>
              </Link>
            </div>
            <div className="sideimage"></div>
          </div>
        </div>
      </div>
    );
}
export default Home;

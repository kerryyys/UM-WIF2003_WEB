import "../components-css/Footer.css";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import instagram from "../assets/icons/instagram.svg";
import facebookicon from "../assets/icons/facebookicon.svg";
import linkedin from "../assets/icons/linkedin.svg";
import email from "../assets/icons/email.svg";
export default function Footer() {
  return (
    <>
      <footer className="footer-container">
        <Container>
          <Row className="footer-row">
            <Col md={3} className="mb-md-0 mb-3">
              <h5 className="text-uppercase">About</h5>
              <ul className="footer-list">
                <li>Mission & Vision</li>
                <li>Meet the Team</li>
                <li>Testimonials</li>
              </ul>
            </Col>

            <Col md={3} className="mb-md-0 mb-3">
              <h5 className="text-uppercase">Contact</h5>
              <ul className="footer-list">
                <li>Enquiries</li>
                <li>In the Press</li>
                <li>Roles</li>
                <li>T&C Policies</li>
              </ul>
            </Col>

            <Col md={3} className="mb-md-0 mb-3">
              <h5 className="text-uppercase">Join us</h5>
              <ul className="footer-list">
                <li>Comnmunity</li>
                <li>Newsletter Sign Up</li>
              </ul>
            </Col>
            <Col md={3} className="mb-md-0 mb-3">
              <h5 className="text-uppercase">Did you know?</h5>
              <div className="did-you-know">
                <p>
                  Approximately <span>72%</span> of students participating in
                  freelance work during their studies find it to be a valuable
                  experience that complements their academic learning.
                </p>
                <div className="view-more">
                  <p>
                    View more <i className="bi bi-chevron-double-right" />
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="footer-socials text-center py-3">
          <img src={facebookicon} alt="" className="social-icon" />
          <img src={instagram} alt="" className="social-icon" />
          <img src={linkedin} alt="" className="social-icon" />
          <img src={email} alt="" className="social-icon" style={{marginRight:"0"}}/>
        </div>
        <div className="footer-copyright text-center py-3">
          © 2024 UniJobs for all university students in Malaysia
        </div>
      </footer>
    </>
  );
}

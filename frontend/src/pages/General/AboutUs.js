import React from "react";
import "../../pages-css/General/aboutus.css";
import img1 from "../../assets/images/General/img1.png";
import img2 from "../../assets/images/General/img2.png";
import img3 from "../../assets/images/General/img3.png";
import SmallTitle from "../../components/jobscape/SmallTitle";

function AboutUs() {
  return (
    <div className="about-section">
    <SmallTitle title={"About Us"} fontSize={"48px"} fontWeight={"700"}></SmallTitle>
      <h2 style={{ textAlign: "center" }}>Our Team</h2>
      <div className="row">
        <div className="column">
          <div className="card">
            <img src={img1} alt="Daniel" style={{ width: "100%" }} />
            <div className="aboutContainer">
              <h2>Daniel Liang</h2>
              <p className="title">CEO & Founder</p>
              <p>At UniJobs, our mission is to empower university students by
            providing them with opportunities to unleash their potential and
            gain valuable real-world experience. We believe that every student
            deserves the chance to explore their passions, develop essential
            skills, and kick-start their careers. Through our platform, we
            strive to bridge the gap between academia and industry, connecting
            students with meaningful freelance projects that enrich their
            academic journey and set them up for success in the professional
            world.</p>
            <br></br>
              <p>daniel@unijobs.com</p>
              <button className="AboutButton">Contact</button>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img src={img2} alt="Mike" style={{ width: "100%" }} />
            <div className="aboutContainer">
              <h2>Mike Ross</h2>
              <p className="title">Art Director</p>
              <p>Our vision at UniJobs is to create a thriving community where
            university students can thrive, grow, and make a difference. We
            envision a world where students are not just passive learners but
            active contributors to society, leveraging their skills and
            knowledge to tackle real-world challenges. By fostering a culture of
            collaboration, innovation, and continuous learning, we aim to
            inspire the next generation of leaders, thinkers, and change-makers.</p>
            <br></br>
              <p>mike@unijobs.com</p>
              <button className="AboutButton">Contact</button>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img src={img3} alt="John" style={{ width: "100%" }} />
            <div className="aboutContainer">
              <h2>John Doe</h2>
              <p className="title">Designer</p>
              <p>Empowerment: We believe in empowering university students to take
            control of their futures and pursue their passions with confidence
            and purpose. Inclusivity: We embrace diversity and foster an inclusive
            environment where all students feel valued, respected, and
            supported. Excellence: We are committed to excellence in everything we do,
            striving to deliver exceptional service, experiences, and outcomes
            for our users. Community: We value the power of community and believe in the
            strength of collaboration, mutual support, and shared success. Innovation: We embrace innovation and continuously seek new ways to
            enhance our platform, services, and impact for the benefit of our
            users and partners.</p>
            <br></br>
              <p>john@unijobs.com</p>
              <button className="AboutButton">Contact</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;

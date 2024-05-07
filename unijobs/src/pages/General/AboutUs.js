import "../../pages-css/General/General.css";
import img1 from "../../assets/images/General/img1.png";
import img2 from "../../assets/images/General/img2.png";
import img3 from "../../assets/images/General/img3.png";

function AboutUs() {
  return (
    <div>
      <h2 className="login-title3">About Us</h2>
      <div className="login-aboutUs-container">
        <div className="login-grid-item">
          <img src={img1} alt="img1" />
        </div>
        <div className="login-grid-item1">
          <p>
            At UniJobs, our mission is to empower university students by
            providing them with opportunities to unleash their potential and
            gain valuable real-world experience. We believe that every student
            deserves the chance to explore their passions, develop essential
            skills, and kick-start their careers. Through our platform, we
            strive to bridge the gap between academia and industry, connecting
            students with meaningful freelance projects that enrich their
            academic journey and set them up for success in the professional
            world.
          </p>
        </div>
        <div className="login-grid-item">
          <img src={img2} alt="img2" />
        </div>
        <div className="login-grid-item2">
          <p>
            Our vision at UniJobs is to create a thriving community where
            university students can thrive, grow, and make a difference. We
            envision a world where students are not just passive learners but
            active contributors to society, leveraging their skills and
            knowledge to tackle real-world challenges. By fostering a culture of
            collaboration, innovation, and continuous learning, we aim to
            inspire the next generation of leaders, thinkers, and change-makers.
          </p>
        </div>
        <div className="login-grid-item">
          <img src={img3} alt="img3" />
        </div>
        <div className="login-grid-item3">
          <p>
            Empowerment: We believe in empowering university students to take
            control of their futures and pursue their passions with confidence
            and purpose.
            <br />
            Inclusivity: We embrace diversity and foster an inclusive
            environment where all students feel valued, respected, and
            supported.
            <br />
            Excellence: We are committed to excellence in everything we do,
            striving to deliver exceptional service, experiences, and outcomes
            for our users.
            <br />
            Community: We value the power of community and believe in the
            strength of collaboration, mutual support, and shared success.
            <br />
            Innovation: We embrace innovation and continuously seek new ways to
            enhance our platform, services, and impact for the benefit of our
            users and partners.
            <br />
          </p>
        </div>
      </div>
      <div className="login-textfield"></div>
    </div>
  );
}

export default AboutUs;

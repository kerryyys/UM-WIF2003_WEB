import '../../styles/General.css';

function AboutUs() {
    return (
        <div>
            <h2 className="title3">About Us</h2>
            <div className="container">
                <div className="grid-item"><img src="/img/img1.png" alt="img1" />
                </div>
                <div className="grid-item1">
                    <p>
                        At UniJobs, our mission is to empower university students by providing them with opportunities to unleash their potential and gain valuable real-world experience. We believe that every student deserves the chance to explore their passions, develop essential skills, and kick-start their careers. Through our platform, we strive to bridge the gap between academia and industry, connecting students with meaningful freelance projects that enrich their academic journey and set them up for success in the professional world.
                    </p>
                </div>
                <div className="grid-item"><img src="/img/img2.png" alt="img2" />
                </div>
                <div className="grid-item2">
                    <p>
                        Our vision at UniJobs is to create a thriving community where university students can thrive, grow, and make a difference. We envision a world where students are not just passive learners but active contributors to society, leveraging their skills and knowledge to tackle real-world challenges. By fostering a culture of collaboration, innovation, and continuous learning, we aim to inspire the next generation of leaders, thinkers, and change-makers.
                    </p>
                </div>
                <div className="grid-item"><img src="/img/img3.png" alt="img3" />
                </div>
                <div className="grid-item3">
                    <p>
                        Empowerment: We believe in empowering university students to take control of their futures and pursue their passions with confidence and purpose.<br />
                        Inclusivity: We embrace diversity and foster an inclusive environment where all students feel valued, respected, and supported.<br />
                        Excellence: We are committed to excellence in everything we do, striving to deliver exceptional service, experiences, and outcomes for our users.<br />
                        Community: We value the power of community and believe in the strength of collaboration, mutual support, and shared success.<br />
                        Innovation: We embrace innovation and continuously seek new ways to enhance our platform, services, and impact for the benefit of our users and partners.<br />
                    </p>
                </div>
            </div>
            <div className="textfield">
                <div className="aboutfield">
                    <p className="big-text">About
                    </p>
                    <p className="small-text">Mission & Vision
                    </p>
                    <p className="small-text">Meet The Team
                    </p>
                    <p className="small-text">Testimonials
                    </p>
                </div>

                <div className="aboutfield">
                    <p className="big-text">Contact
                    </p>
                    <p className="small-text">Enquiries
                    </p>
                    <p className="small-text">In the Press
                    </p>
                    <p className="small-text">Roles
                    </p>
                    <p className="small-text">T&Cs & Policy
                    </p>
                </div>
                <div className="aboutfield">
                    <p className="big-text">Join Us
                    </p>
                    <p className="small-text">Community
                    </p>
                    <p className="small-text">Newsletter Sign Up
                    </p>
                    <p className="small-text">Cookie Settings
                    </p>
                </div>
                <div className="contactfield">
                    <p className="big-text">Did you know?
                    </p>
                    <p className="small-text">Approximately<span className="big-text2">72%
                    </span>of students participating in freelance work during their studies find it to be a valuable experience that complements their academic learning.
                    </p>
                </div>
            </div>
            <div className="new-textfield">
                <div className="login-options2">
                    <img src="/img/Vector.png" alt="vec1" />
                    <img src="/img/Vector1.png" alt="vec2" />
                    <img src="/img/Vector2.png" alt="vec3" />
                    <img src="/img/Vector3.png" alt="vec4" />
                </div>
                <p className="text">
                © 2024 UniJobs for all university students in Malaysia
            </p>
            </div>
            
        </div>
    );
}

export default AboutUs;

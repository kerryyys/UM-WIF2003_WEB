import "../../pages-css/FavoritePage.css";
import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import DellLogo from "../../assets/icons/jobscape/DellLogo.svg";
import WeddingLogo from "../../assets/icons/jobscape/WeddingLogo.svg";
import ProjectTab from "../../components/jobscape/ProjectTab";
import profile1 from "../../assets/icons/jobscape/profile1.svg";
import profile2 from "../../assets/icons/jobscape/profile2.svg";

export default function FavoritePage() {
  const navigate = useNavigate();
  const favoriteJobs = [
    {
      CompanyLogo: DellLogo,
      projectName: "Build a Website",
      companyName: "DELL Technology",
      category: "Web Development",
      filters: ["Web Dev", "Long Term", "Programming", "RM 8,000", "Remote"],
      timePosted: "1 hour ago",
    },
    {
      CompanyLogo: DellLogo,
      projectName: "Build a Website",
      companyName: "DELL Technology",
      category: "Web Development",
      filters: ["Web Dev", "Long Term", "Programming", "RM 8,000", "Remote"],
      timePosted: "2 hours ago",
    },
    {
      CompanyLogo: WeddingLogo,
      projectName: "Wedding Photography",
      companyName: "WedPhoto",
      category: "Photographic",
      filters: [
        "Photographic",
        "Short Term",
        "Creative",
        "RM 3,000",
        "Selangor",
      ],
      timePosted: "3 hours ago",
    },
  ];
  const favoriteCollaborators = [
    {
      profilePic: profile1,
      collaboratorName: "Peter Lim Seng Zheng",
      ratingStar: 5,
      filters: [
        "Expert",
        "50/hr-80/hr",
        "Programming",
        "Editing",
        "Kuala Lumpur",
      ],
      biography:
        "Hi there! I'm Peter, a passionate frontend developer with a knack for crafting immersive digital experiences. With years of experience in programming and video editing, I bring a unique blend of technical skills and creative flair to every project. From building sleek websites to editing engaging videos, I love turning ideas into reality and delivering impactful results. Let's create something amazing together!",
    },
    {
      profilePic: profile2,
      collaboratorName: "Tan Jun Jie",
      ratingStar: 4,
      filters: [
        "Expert",
        "50/hr-80/hr",
        "Programming",
        "Editing",
        "Kuala Lumpur",
      ],
      biography:
        "Hi there! I'm JunJie, a passionate frontend developer with a knack for crafting immersive digital experiences. With years of experience in programming and video editing, I bring a unique blend of technical skills and creative flair to every project. From building sleek websites to editing engaging videos, I love turning ideas into reality and delivering impactful results. Let's create something amazing together!",
    },
  ];

  return (
    <>
      <Container className="favorite-container">
        <Button className="back-btn" onClick={() => navigate(-1)}>
          <p>
            <i className="bi bi-chevron-left" />
            Back
          </p>
        </Button>
        <div className="favorite-header" style={{ textAlign: "center" }}>
          <h3 className="favorite-title">Favorite</h3>
        </div>
        <div className="favorite-jobs-container">
          <h5 className="favorite-jobs-title">Favorite Jobs</h5>
          <div className="favorite-jobs-list">
            {favoriteJobs.map((job, index) => (
              <ProjectTab
                CompanyLogo={job.CompanyLogo}
                projectName={job.projectName}
                companyName={job.companyName}
                category={job.category}
                filters={job.filters}
              ></ProjectTab>
            ))}
          </div>
        </div>
        {/* <div className="favorite-collaborators-container">
          <h5 className="favorite-collaborators-title">
            Favorite Collaborators
          </h5>
          <div className="favorite-collaborators-list">
            {favoriteCollaborators.map((collab, index) => (
              <CollaboratorTab
                profilePic={collab.profilePic}
                collaboratorName={collab.collaboratorName}
                ratingStar={collab.ratingStar}
                filters={collab.filters}
                biography={collab.biography}
              ></CollaboratorTab>
            ))}
          </div>
        </div> */}
      </Container>
    </>
  );
}

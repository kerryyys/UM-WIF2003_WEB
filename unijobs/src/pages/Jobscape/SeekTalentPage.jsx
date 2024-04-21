import React from "react";
import "../../App.css";
import SmallTitle from "../../components/jobscape/SmallTitle";
import NavBigTab from "../../components/jobscape/NavBigTab";
import FilterTab from "../../components/jobscape/FilterTab";
import SearchResultTab from "../../components/jobscape/SearchResultTab";
import CollaboratorTab from "../../components/jobscape/CollaboratorTab";
import PageNumberNav from "../../components/jobscape/PageNumberNav";
import postProject from "../../assets/icons/jobscape/postProject.svg";
import reviewProject from "../../assets/icons/jobscape/reviewProject.svg";
import profile1 from "../../assets/icons/jobscape/profile1.svg";
import profile2 from "../../assets/icons/jobscape/profile2.svg";
const SeekTalentPage = () => {
  return (
    <>
      <div style={{ margin: "80px 0 10px" }}>
        <SmallTitle
          title="Find Your Dream Collaborator"
          fontWeight="700"
          fontSize="36px"
        />
      </div>
      <div
        className="NavBigTab"
        style={{ display: "flex", justifyContent: "center", marginLeft:"11%"}}
      >
        <NavBigTab
          backgroundImage={postProject}
          text="Post a New Project"
          borderRadius="10px 0 0 10px"
          to="/PostProjectPage"
        />
        <NavBigTab
          backgroundImage={reviewProject}
          position="right"
          text="Review Collaboration"
          borderRadius="0 10px 10px 0"
          to="/ReviewProjectPage"
        />
      </div>

      <div className="FilterAndResult" style={{ display: "flex" }}>
        <div
          className="FilterSideBar"
          style={{ width: "20%", margin: "5% 5% 5% 10%" }}
        >
          <p style={{ fontSize: "16px", fontWeight: "700", paddingLeft: "4%" }}>
            FILTER
          </p>
          <FilterTab
            filterTitle="EXPERIENCED LEVEL"
            filterTypes={["Beginner", "Intermediate", "Expert"]}
          />
          <FilterTab
            filterTitle="PRICE RATE"
            filterTypes={["30/hr - 50/hr", "50/hr - 80/hr", "80/hr - 100/hr"]}
          />
          <FilterTab
            filterTitle="SKILL REQUIRED"
            filterTypes={[
              "Programming",
              "Editing",
              "Designing",
              "Problem Solving",
              "Dancing",
              "Project Management",
            ]}
          />
          <FilterTab
            filterTitle="LOCATION"
            filterTypes={["Kuala Lumpur", "Selangor", "Remote"]}
          />
          <FilterTab
            filterTitle="RATING"
            filterTypes={["5", "4", "3", "2", "1"]}
          />
        </div>
        <div
          className="CollabResult"
          style={{
            width: "80%",
            marginTop: "3%",
            marginRight: "10%",
          }}
        >
          <SearchResultTab
            total={546}
            ProjectOrCollab="Collaborators"
            newOrRate="RATING"
          />
          <CollaboratorTab
            profilePic={profile1}
            collaboratorName="Peter Lim Seng Zheng"
            ratingStar="5"
            filters={[
              "Expert",
              "50/hr-80/hr",
              "Programming",
              "Editing",
              "Kuala Lumpur",
            ]}
            biography="Hi there! I'm Peter, a passionate frontend developer with a knack for crafting immersive digital experiences. With years of experience in programming and video editing, I bring a unique blend of technical skills and creative flair to every project. From building sleek websites to editing engaging videos, I love turning ideas into reality and delivering impactful results. Let's create something amazing together!"
          />
          <CollaboratorTab
            profilePic={profile2}
            collaboratorName="Tan Jun Jie"
            ratingStar="4"
            filters={[
              "Expert",
              "50/hr-80/hr",
              "Programming",
              "Editing",
              "Kuala Lumpur",
            ]}
            biography="Hi there! I'm JunJie, a passionate frontend developer with a knack for crafting immersive digital experiences. With years of experience in programming and video editing, I bring a unique blend of technical skills and creative flair to every project. From building sleek websites to editing engaging videos, I love turning ideas into reality and delivering impactful results. Let's create something amazing together!"
          />
          <CollaboratorTab
            profilePic={profile1}
            collaboratorName="Peter Lim Seng Zheng"
            ratingStar="5"
            filters={[
              "Expert",
              "50/hr-80/hr",
              "Programming",
              "Editing",
              "Kuala Lumpur",
            ]}
            biography="Hi there! I'm Peter, a passionate frontend developer with a knack for crafting immersive digital experiences. With years of experience in programming and video editing, I bring a unique blend of technical skills and creative flair to every project. From building sleek websites to editing engaging videos, I love turning ideas into reality and delivering impactful results. Let's create something amazing together!"
          />
          <CollaboratorTab
            profilePic={profile2}
            collaboratorName="Tan Jun Jie"
            ratingStar="4"
            filters={[
              "Expert",
              "50/hr-80/hr",
              "Programming",
              "Editing",
              "Kuala Lumpur",
            ]}
            biography="Hi there! I'm JunJie, a passionate frontend developer with a knack for crafting immersive digital experiences. With years of experience in programming and video editing, I bring a unique blend of technical skills and creative flair to every project. From building sleek websites to editing engaging videos, I love turning ideas into reality and delivering impactful results. Let's create something amazing together!"
          />
          <CollaboratorTab
            profilePic={profile1}
            collaboratorName="Peter Lim Seng Zheng"
            ratingStar="5"
            filters={[
              "Expert",
              "50/hr-80/hr",
              "Programming",
              "Editing",
              "Kuala Lumpur",
            ]}
            biography="Hi there! I'm Peter, a passionate frontend developer with a knack for crafting immersive digital experiences. With years of experience in programming and video editing, I bring a unique blend of technical skills and creative flair to every project. From building sleek websites to editing engaging videos, I love turning ideas into reality and delivering impactful results. Let's create something amazing together!"
          />
          <CollaboratorTab
            profilePic={profile2}
            collaboratorName="Tan Jun Jie"
            ratingStar="4"
            filters={[
              "Expert",
              "50/hr-80/hr",
              "Programming",
              "Editing",
              "Kuala Lumpur",
            ]}
            biography="Hi there! I'm JunJie, a passionate frontend developer with a knack for crafting immersive digital experiences. With years of experience in programming and video editing, I bring a unique blend of technical skills and creative flair to every project. From building sleek websites to editing engaging videos, I love turning ideas into reality and delivering impactful results. Let's create something amazing together!"
          />
          <CollaboratorTab
            profilePic={profile1}
            collaboratorName="Peter Lim Seng Zheng"
            ratingStar="5"
            filters={[
              "Expert",
              "50/hr-80/hr",
              "Programming",
              "Editing",
              "Kuala Lumpur",
            ]}
            biography="Hi there! I'm Peter, a passionate frontend developer with a knack for crafting immersive digital experiences. With years of experience in programming and video editing, I bring a unique blend of technical skills and creative flair to every project. From building sleek websites to editing engaging videos, I love turning ideas into reality and delivering impactful results. Let's create something amazing together!"
          />
          <CollaboratorTab
            profilePic={profile2}
            collaboratorName="Tan Jun Jie"
            ratingStar="4"
            filters={[
              "Expert",
              "50/hr-80/hr",
              "Programming",
              "Editing",
              "Kuala Lumpur",
            ]}
            biography="Hi there! I'm JunJie, a passionate frontend developer with a knack for crafting immersive digital experiences. With years of experience in programming and video editing, I bring a unique blend of technical skills and creative flair to every project. From building sleek websites to editing engaging videos, I love turning ideas into reality and delivering impactful results. Let's create something amazing together!"
          />
        </div>
      </div>
      <PageNumberNav currentPage={1} totalPages={5} />
    </>
  );
};

export default SeekTalentPage;

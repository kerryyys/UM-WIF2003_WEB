import React, { useState } from "react";
import "../../App.css";
import JobscapeHeader from "../../components/jobscape/JobscapeHeader";
import SearchBar from "../../components/jobscape/SearchBar";
import CategoryBar from "../../components/jobscape/CategoryBar";
import SearchButton from "../../components/jobscape/SearchButton";
import CategoryTab from "../../components/jobscape/CategoryTab";
import PositionTab from "../../components/jobscape/PositionTab";
import WorkTab from "../../components/jobscape/WorkTab";
import SmallTitle from "../../components/jobscape/SmallTitle";
import StatusTab from "../../components/jobscape/StatusTab";
import BackgroundImage from "../../assets/images/jobscapeBG.svg";
import searchbtn from "../../assets/icons/icon_search.svg";
import PositionRecruit from "../../assets/icons/jobscape/recruiter.svg";
import PositionFreelance from "../../assets/icons/jobscape/freelancer.svg";
import WorkRecruit from "../../assets/icons/jobscape/recruit1.svg";
import WorkFreelance from "../../assets/icons/jobscape/freelance1.svg";
import WorkMutual from "../../assets/icons/jobscape/mutual.svg";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SeekTalentPage from "./SeekTalentPage";
import SeekJobPage from "./SeekJobPage";

const JobscapeMainPage = () => {
  const [searchValue, setSearchValue] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const categories = [
    "Web Developer",
    "Graphic Designer",
    "Content Creator",
    "Data Analyst",
    "Project Manager",
  ];

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleClick = () => {
    // Handle click action here
  };
  return (
    <>
      <div
        style={{
          width: "100vw",
          height: "75vh",
          marginTop: "5px",
          backgroundImage: `url(${BackgroundImage})`,
        }}
      >
        <JobscapeHeader text1="Jobs" text2="Talents!" />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "10px",
          }}
        >
          <SearchBar
            placeholder="Search"
            value={searchValue}
            onChange={handleSearchChange}
          />
          <CategoryBar
            categories={categories}
            value={selectedCategory}
            onChange={handleCategoryChange}
          />
          <SearchButton handleClick={handleClick} src={searchbtn} />
        </div>
      </div>

      <SmallTitle
        title="Popular Categories"
        fontWeight="bold"
        fontSize="24px"
      />
      <CategoryTab />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "5%",
        }}
      >
        <Router>
          <PositionTab
            bgImg={PositionRecruit}
            color="#FDFAF3"
            hoverColor="#2D4877"
            paddingLeft="10%"
            paddingRight="5%"
            textAlign="left"
            positionType="I AM A RECRUITER!"
            content="Are you a skilled and passionate freelancer looking for exciting opportunities to showcase your talent? We are actively seeking talented individuals to join our freelance network and collaborate on a variety of projects across different industries."
            buttonType="Recruiting"
            seekPage={SeekTalentPage} // Specify the destination page
            style={{ width: "50%", margin: 0, padding: 0 }}
          />
          <PositionTab
            bgImg={PositionFreelance}
            color="#2D4877"
            hoverColor="#FDFAF3"
            paddingLeft="5%"
            paddingRight="10%"
            textAlign="right"
            positionType="I AM A FREELANCE!"
            content="Are you a freelancer looking for exciting opportunities to showcase your skills and connect with clients? Look no further! Our platform is a hub for talented freelancers like you to find projects, collaborate with clients, and grow your freelance business."
            buttonType="Seeking"
            seekPage={SeekJobPage} // Specify the destination page
            style={{ width: "50%", margin: 0, padding: 0 }}
          />
        </Router>
      </div>

      <SmallTitle title="How It Works?" fontWeight="bold" fontSize="24px" />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "0 18% 3%",
        }}
      >
        <WorkTab
          workImg={WorkRecruit}
          workType="Recruiter"
          content="Employers post job opportunities or projects, specifying their requirements and preferences."
        />
        <WorkTab
          workImg={WorkFreelance}
          workType="Freelancer"
          content="Browse available projects, submit proposals to employers based on their skills and expertise."
        />
        <WorkTab
          workImg={WorkMutual}
          workType="Mutual Satisfaction"
          content="Freelancers collaborate with employers to complete projects, ensuring mutual satisfaction and success."
        />
      </div>
      <StatusTab
        numArray={[330, 473, 562, 298]}
        typeArray={["Projects", "Recruiters", "Freelancers", "Satisfaction"]}
      />

      {/* footer */}
    </>
  );
};

export default JobscapeMainPage;

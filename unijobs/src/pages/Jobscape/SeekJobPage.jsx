import React, { useState, useEffect } from "react";
import "../../App.css";
import SmallTitle from "../../components/jobscape/SmallTitle";
import SearchBar from "../../components/jobscape/SearchBar";
import CategoryBar from "../../components/jobscape/CategoryBar";
import DurationBar from "../../components/jobscape/DurationBar";
import SearchButton from "../../components/jobscape/SearchButton";
import FilterTab from "../../components/jobscape/FilterTab";
import SearchResultTab from "../../components/jobscape/SearchResultTab";
import ProjectTab from "../../components/jobscape/ProjectTab";
import PageNumberNav from "../../components/jobscape/PageNumberNav";
import WeddingLogo from "../../assets/icons/jobscape/WeddingLogo.svg";
import DellLogo from "../../assets/icons/jobscape/DellLogo.svg";
import searchbtn from "../../assets/icons/icon_search.svg";

const SeekJobPage = () => {
  const [searchValue, setSearchValue] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedDuration, setSelectedDuration] = useState("");
  const categories = [
    "Web Developer",
    "Graphic Designer",
    "Content Creator",
    "Data Analyst",
    "Project Manager",
  ];
  const duration = ["Short Term", "Long Term", "OnGoing"];

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleDurationChange = (event) => {
    setSelectedDuration(event.target.value);
  };

  const handleClick = () => {
    // Handle click action here
  };

  const [searchResults, setSearchResults] = useState([]);
  const [total, setTotal] = useState(288);
  const [sortingOption, setSortingOption] = useState("newOrRate");
  // useEffect(() => {
  //   // Fetch data from the database
  //   axios.get("your-api-endpoint").then((response) => {
  //     setSearchResults(response.data.searchResults);
  //     setTotal(response.data.total);
  //   });
  // }, []); // Fetch data only once on component mount

  // const handleSortingChange = (option) => {
  //   setSortingOption(option);
  //   // Perform sorting logic based on the selected option
  // };

  return (
    <>
      <div style={{ margin: "80px 0 10px" }}>
        <SmallTitle
          title="Find Your Dream Project"
          fontWeight="700"
          fontSize="36px"
        />
      </div>
      <div style={{ margin: "0 5px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginLeft:"25%" 
            // as the bar run away, i use marginLeft to make it center
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
          <DurationBar
            duration={duration}
            value={selectedDuration}
            onChange={handleDurationChange}
          />
          <SearchButton
            handleClick={handleClick}
            bgColor={"#2D4877"}
            src={searchbtn}
          />
        </div>
        <div className="FilterAndResult" style={{ display: "flex" }}>
          <div
            className="FilterSideBar"
            style={{ width: "20%", margin: "5% 5% 5% 10%" }}
          >
            <p
              style={{ fontSize: "16px", fontWeight: "700", paddingLeft: "4%" }}
            >
              FILTER
            </p>
            <FilterTab
              filterTitle="PROJECT TYPE"
              filterTypes={[
                "Web Development",
                "Graphic & Design",
                "Content Writing",
                "Photographic",
                "Audit",
              ]}
            />
            <FilterTab
              filterTitle="PROJECT DURATION"
              filterTypes={["Short Term", "Long Term", "OnGoing"]}
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
              filterTitle="BUDGE RANGE"
              filterTypes={[
                "1,000-3,000",
                "3,001-5,000",
                "5,001-8,000",
                "8,001-10,000",
              ]}
            />
            <FilterTab
              filterTitle="LOCATION"
              filterTypes={["Kuala Lumpur", "Selangor", "Remote"]}
            />
          </div>
          <div
            className="ProjectResult"
            style={{
              width: "80%",
              marginTop: "3%",
              marginRight: "10%",
            }}
          >
            <SearchResultTab
              total={total}
              ProjectOrCollab="PROJECTS"
              newOrRate="NEWEST"
            />
            <ProjectTab
              CompanyLogo={DellLogo}
              projectName="Build a Website"
              companyName="Dell Technology"
              category="Web Development"
              filters={[
                "Web Dev",
                "Long Term",
                "Programming",
                "RM 8,000",
                "Remote",
              ]}
              timePosted="2 hours ago"
            />
            <ProjectTab
              CompanyLogo={WeddingLogo}
              projectName="Wedding Photography"
              companyName="WedPhoto"
              category="Photographic"
              filters={[
                "Photographic",
                "Short Term",
                "Creative",
                "RM 3,000",
                "Selangor",
              ]}
              timePosted="5 hours ago"
            />
            <ProjectTab
              CompanyLogo={DellLogo}
              projectName="Build a Website"
              companyName="Dell Technology"
              category="Web Development"
              filters={[
                "Web Dev",
                "Long Term",
                "Programming",
                "RM 8,000",
                "Remote",
              ]}
              timePosted="2 hours ago"
            />
            <ProjectTab
              CompanyLogo={WeddingLogo}
              projectName="Wedding Photography"
              companyName="WedPhoto"
              category="Photographic"
              filters={[
                "Photographic",
                "Short Term",
                "Creative",
                "RM 3,000",
                "Selangor",
              ]}
              timePosted="5 hours ago"
            />
            <ProjectTab
              CompanyLogo={DellLogo}
              projectName="Build a Website"
              companyName="Dell Technology"
              category="Web Development"
              filters={[
                "Web Dev",
                "Long Term",
                "Programming",
                "RM 8,000",
                "Remote",
              ]}
              timePosted="2 hours ago"
            />
            <ProjectTab
              CompanyLogo={WeddingLogo}
              projectName="Wedding Photography"
              companyName="WedPhoto"
              category="Photographic"
              filters={[
                "Photographic",
                "Short Term",
                "Creative",
                "RM 3,000",
                "Selangor",
              ]}
              timePosted="5 hours ago"
            />
            <ProjectTab
              CompanyLogo={DellLogo}
              projectName="Build a Website"
              companyName="Dell Technology"
              category="Web Development"
              filters={[
                "Web Dev",
                "Long Term",
                "Programming",
                "RM 8,000",
                "Remote",
              ]}
              timePosted="2 hours ago"
            />
            <ProjectTab
              CompanyLogo={WeddingLogo}
              projectName="Wedding Photography"
              companyName="WedPhoto"
              category="Photographic"
              filters={[
                "Photographic",
                "Short Term",
                "Creative",
                "RM 3,000",
                "Selangor",
              ]}
              timePosted="5 hours ago"
            />
          </div>
        </div>
        <PageNumberNav currentPage={1} totalPages={5} />

        {/* Footer */}
      </div>
    </>
  );
};

export default SeekJobPage;

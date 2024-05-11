import React, { useState } from "react";
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
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedFilters, setSelectedFilters] = useState({});

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleFilterChange = (filterTitle, selectedValues) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [filterTitle]: selectedValues,
    }));
    console.log("current selectedFilters: " + selectedFilters);
    setCurrentPage(1); // Reset to the first page when filters change
  };

  const projectPerPage = 7;

  const [searchValue, setSearchValue] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedDuration, setSelectedDuration] = useState("");
  const categories = [
    "Web Developer",
    "Graphic Designer",
    "Content Creation",
    "Photographic",
    "Project Management",
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
  const [sortingOption, setSortingOption] = useState("newOrRate");

  // Array of ProjectTab components
  const projectTabs = [
    {
      CompanyLogo: DellLogo,
      projectName: "Build a Website",
      companyName: "Dell Technology",
      category: "Web Development",
      filters: [
        "Web Development",
        "Long Term",
        "Programming",
        "RM 8,000",
        "Remote",
      ],
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
      timePosted: "5 hours ago",
    },
  ];

  const filterTabs = [
    {
      filterTitle: "PROJECT TYPE",
      filterTypes: [
        "Web Development",
        "Graphic & Design",
        "Content Writing",
        "Photographic",
        "Audit",
      ],
    },
    {
      filterTitle: "PROJECT DURATION",
      filterTypes: ["Short Term", "Long Term", "OnGoing"],
    },
    {
      filterTitle: "SKILL REQUIRED",
      filterTypes: [
        "Programming",
        "Editing",
        "Designing",
        "Problem Solving",
        "Dancing",
        "Project Management",
      ],
    },
    {
      filterTitle: "BUDGE RANGE",
      filterTypes: [
        "1,000-3,000",
        "3,001-5,000",
        "5,001-8,000",
        "8,001-10,000",
      ],
    },
    {
      filterTitle: "LOCATION",
      filterTypes: ["Kuala Lumpur", "Selangor", "Johor Bahru", "Remote"],
    },
    // Add more FilterTab objects as needed
  ];

  const filteredProjects = projectTabs.filter((project) => {
    console.log("Project: " + JSON.stringify(project));
    console.log("Selected filters: " + selectedFilters);
    console.log("Object keys: " + Object.keys(selectedFilters));
    return Object.keys(selectedFilters).every((filterTitle) => {
      console.log("FilterTitle" + filterTitle);
      const selectedValues = selectedFilters[filterTitle];
      console.log("Selected values: " + selectedValues);
      return (
        selectedValues.length === 0 ||
        selectedValues.some((value) => project.filters.includes(value))
      );
    });
  });

  const totalProjects = filteredProjects.length;

  const slicedProjects = filteredProjects.slice(
    (currentPage - 1) * projectPerPage,
    currentPage * projectPerPage
  );

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
            {/* Render FilterTab components */}
            {filterTabs.map((filterTab, index) => (
              <FilterTab
                key={index}
                {...filterTab}
                onFilterChange={handleFilterChange}
              />
            ))}
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
              total={totalProjects}
              ProjectOrCollab="PROJECTS"
              newOrRate="NEWEST"
            />
            {slicedProjects.map((projectTab, index) => (
              <ProjectTab key={index} {...projectTab} />
            ))}
          </div>
        </div>
        <PageNumberNav
          currentPage={currentPage}
          totalPages={Math.ceil(totalProjects / projectPerPage)}
          onPageChange={handlePageChange}
        />
        {/* Footer */}
      </div>
    </>
  );
};

export default SeekJobPage;

import React, { useEffect, useState } from "react";
import SmallTitle from "../../components/jobscape/SmallTitle";
import NavBigTab from "../../components/jobscape/NavBigTab";
import FilterTab from "../../components/jobscape/FilterTab";
import SearchResultTab from "../../components/jobscape/SearchResultTab";
import CollaboratorTab from "../../components/jobscape/CollaboratorTab";
import PageNumberNav from "../../components/jobscape/PageNumberNav";
import postProject from "../../assets/icons/jobscape/postProject.svg";
import reviewProject from "../../assets/icons/jobscape/reviewProject.svg";
import axios from "axios";

const SeekTalentPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [freelancers, setFreelancers] = useState([]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleFilterChange = (name, checked) => {
    // Will add to selectedFilters if checked
    if (checked) {
      setSelectedFilters((prevFilters) => [...prevFilters, name]);
    } else {
      // Remove from selectedFilters if unchecked
      setSelectedFilters((prevFilters) =>
        prevFilters.filter((filter) => filter !== name)
      );
    }
    setCurrentPage(1); // Reset to the first page when filters change
  };
  //to retrieve data from backend
  useEffect(() => {
    // Fetch freelancer data from backend API
    axios
      .get("http://localhost:5050/freelancers")
      .then((response) => {
        setFreelancers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching freelancer data:", error);
      });
  }, []); // Empty dependency array to fetch data only once when the component mounts

  const collaboratorsPerPage = 6;
  
  const filters = [
    {
      filterTitle: "EXPERIENCED LEVEL",
      filterTypes: ["Beginner", "Intermediate", "Expert"],
    },
    {
      filterTitle: "SKILLS",
      filterTypes: [
        "Programming",
        "Editing",
        "Writing",
        "Content Creation",
        "Graphic Design",
      ],
    },
    {
      filterTitle: "LOCATION",
      filterTypes: [
        "Kuala Lumpur",
        "Penang",
        "Johor Bahru",
        "Selangor",
        "Perak",
        "Remote",
      ],
    },
    {
      filterTitle: "RATING",
      filterTypes: ["5", "4", "3", "2", "1"],
    },
  ];

  const filteredCollaborators = freelancers.filter((freelancer) => {
    return selectedFilters.every((filter) =>
      freelancer.filters.includes(filter)
    );
  });

  const totalCollaborators = filteredCollaborators.length;

  const slicedCollaborators = filteredCollaborators.slice(
    (currentPage - 1) * collaboratorsPerPage,
    currentPage * collaboratorsPerPage
  );

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
        style={{ display: "flex", justifyContent: "center", marginLeft: "11%" }}
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
          {filters.map((filter, index) => (
            <FilterTab
              key={index}
              filterTitle={filter.filterTitle}
              filterTypes={filter.filterTypes}
              onFilterChange={handleFilterChange}
            />
          ))}
        </div>

        <div
          className="CollabResult"
          style={{ width: "80%", marginTop: "3%", marginRight: "10%" }}
        >
          <SearchResultTab
            total={totalCollaborators}
            ProjectOrCollab="Collaborators"
            newOrRate="RATING"
          />
          <div className="CollabResult">
            {/* Display filtered collaborators */}
            {freelancers.map((freelancer, index) => (
              <CollaboratorTab
                key={index}
                profilePic={freelancer.profilePic}
                collaboratorName={freelancer.freelanceName}
                ratingStar={freelancer.rating}
                filters={freelancer.skills} // Assuming skills is an array of strings
                biography={freelancer.selfDescription}
              />
            ))}
          </div>
        </div>
      </div>

      <PageNumberNav
        currentPage={currentPage}
        totalPages={Math.ceil(totalCollaborators / collaboratorsPerPage)}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default SeekTalentPage;

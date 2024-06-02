import React, { useEffect, useState } from "react";
import SmallTitle from "../../components/jobscape/SmallTitle";
import NavBigTab from "../../components/jobscape/NavBigTab";
import FilterTab from "../../components/jobscape/FilterTab";
import SearchResultTab from "../../components/jobscape/SearchResultTab";
import CollaboratorTab from "../../components/jobscape/CollaboratorTab";
import PageNumberNav from "../../components/jobscape/PageNumberNav";
import postProject from "../../assets/icons/jobscape/postProject.svg";
import reviewProject from "../../assets/icons/jobscape/reviewProject.svg";
import axios from "../../utils/customAxios";
import { useUserContext } from "../../context/UserContext";

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

  // Retrieve data from backend
  useEffect(() => {
    axios
      .get("http://localhost:5050/users/")
      .then((response) => {
        const fetchedFreelancers = response.data.data.map((freelancer) => ({
          ...freelancer,
          skill: freelancer.skill || [], // Ensure skill is an array or default to empty array
          state: freelancer.state || "Remote", // Ensure state is a string or default to empty string
          rating: (freelancer.rating || 5).toString(), // Use rating if present, or default to 5
        }));
        setFreelancers(fetchedFreelancers);
        console.log(fetchedFreelancers);
      })
      .catch((error) => {
        console.error("Error fetching freelancer data:", error);
      });
  }, []); // Empty dependency array to fetch data only once when the component mounts

  const collaboratorsPerPage = 6;

  const filters = [
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
        "Selangor",
        "Negeri Sembilan",
        "Melaka",
        "Johore",
        "Kelantan",
        "Terengganu",
        "Perak",
        "Pahang",
        "Remote",
      ],
    },
    {
      filterTitle: "RATING",
      filterTypes: ["5", "4", "3", "2", "1"],
    },
  ];

  const filteredCollaborators = freelancers.filter((freelancer) => {
    return (
      selectedFilters.every((filter) => freelancer.skill.includes(filter)) &&
      freelancer.role === "freelancer"
    ); // Ensure only freelancers are shown
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
          to="/PostProjectPage/:userId"
        />
        <NavBigTab
          backgroundImage={reviewProject}
          position="right"
          text="Review Collaboration"
          borderRadius="0 10px 10px 0"
          to="/ReviewProjectPage/:userId"
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
          {/* Display filtered and paginated collaborators */}
          {slicedCollaborators.map((freelancer, index) => (
            <CollaboratorTab
              key={index}
              profilePic={`http://localhost:5050/images/${freelancer.profilePic}`}
              collaboratorName={freelancer.name}
              username={freelancer.username} // Pass username as a prop
              ratingStar={freelancer.rating}
              skill={freelancer.skill}
              biography={freelancer.biography}
              location={freelancer.state}
            />
          ))}
        </div>
      </div>
      <div
        className="pagination"
        style={{ textAlign: "center", justifyContent: "center" }}
      >
        <PageNumberNav
          currentPage={currentPage}
          totalPages={Math.ceil(totalCollaborators / collaboratorsPerPage)}
          onPageChange={handlePageChange}
        />
      </div>
    </>
  );
};

export default SeekTalentPage;

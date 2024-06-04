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
  const [selectedSkillFilters, setSelectedSkillFilters] = useState([]);
  const [selectedRatingFilters, setSelectedRatingFilters] = useState([]);
  const [selectedLocationFilters, setSelectedLocationFilters] = useState([]);
  const [freelancers, setFreelancers] = useState([]);
  const { user } = useUserContext();
  const userRole = user?.role;

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleFilterChange = (name, checked, filterType) => {
    if (filterType === "skills") {
      setSelectedSkillFilters((prevFilters) =>
        checked
          ? [...prevFilters, name]
          : prevFilters.filter((filter) => filter !== name)
      );
    } else if (filterType === "location") {
      setSelectedLocationFilters((prevFilters) =>
        checked
          ? [...prevFilters, name]
          : prevFilters.filter((filter) => filter !== name)
      );
    } else if (filterType === "rating") {
      setSelectedRatingFilters((prevFilters) =>
        checked
          ? [...prevFilters, name]
          : prevFilters.filter((filter) => filter !== name)
      );
    }
    setCurrentPage(1);
  };

  useEffect(() => {
    axios
      .get("http://localhost:5050/users/")
      .then((response) => {
        const fetchedFreelancers = response.data.data.map((freelancer) => ({
          ...freelancer,
          skill: freelancer.skill || [], // Ensure skill is an array or default to empty array
          state: freelancer.state || "", // Ensure state is a string or default to empty string
          rating: freelancer.rating,
        }));
        setFreelancers(fetchedFreelancers);
        console.log(fetchedFreelancers);
      })
      .catch((error) => {
        console.error("Error fetching freelancer data:", error);
      });
  }, []);

  const collaboratorsPerPage = 6;

  const filterTabs = [
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
    const skillFilterMatch =
      selectedSkillFilters.length === 0 ||
      selectedSkillFilters.every((selectedFilter) =>
        freelancer.skill.includes(selectedFilter)
      );

    const ratingFilterMatch =
      selectedRatingFilters.length === 0 ||
      selectedRatingFilters.includes(freelancer.rating);

    const locationFilterMatch =
      selectedLocationFilters.length === 0 ||
      selectedLocationFilters.includes(freelancer.state);

    return (
      skillFilterMatch &&
      ratingFilterMatch &&
      locationFilterMatch &&
      freelancer.role === "freelancer"
    );
  });

  console.log("Selected Skill Filters: ", selectedSkillFilters);
  console.log("Selected Rating Filters: ", selectedRatingFilters);
  console.log("Selected Location Filters: ", selectedLocationFilters);
  console.log("Filtered Collaborators: ", filteredCollaborators);

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
      {userRole === "recruiter" && (
        <div
          className="NavBigTab"
          style={{
            display: "flex",
            justifyContent: "center",
            marginLeft: "11%",
          }}
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
      )}

      <div className="FilterAndResult" style={{ display: "flex" }}>
        <div
          className="FilterSideBar"
          style={{ width: "20%", margin: "5% 5% 5% 10%" }}
        >
          <p style={{ fontSize: "16px", fontWeight: "700", paddingLeft: "4%" }}>
            FILTER
          </p>
          {filterTabs.map((filterTab, index) => (
            <FilterTab
              key={index}
              {...filterTab}
              onFilterChange={(name, checked) =>
                handleFilterChange(
                  name,
                  checked,
                  filterTab.filterTitle.toLowerCase()
                )
              }
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

          {slicedCollaborators.map((freelancer, index) => (
            <CollaboratorTab
              key={index}
              freelancerID={freelancer._id}
              profilePic={freelancer.profilePic}
              username={freelancer.username}
              ratingStar={freelancer.rating}
              skill={freelancer.skill}
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

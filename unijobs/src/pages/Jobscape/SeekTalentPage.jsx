import React, { useState } from "react";
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
import profile3 from "../../assets/icons/jobscape/profile3.svg";
import profile4 from "../../assets/icons/jobscape/profile4.svg";
import profile5 from "../../assets/icons/jobscape/profile5.svg";
import profile6 from "../../assets/icons/jobscape/profile6.svg";

const SeekTalentPage = () => {
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
    setCurrentPage(1); // Reset to the first page when filters change
  };

  const collaboratorsPerPage = 6;

  const collaborators = [
    {
      profilePic: profile1,
      collaboratorName: "Peter Lim Seng Zheng",
      ratingStar: "5",
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
      ratingStar: "4",
      filters: [
        "Expert",
        "50/hr-80/hr",
        "Programming",
        "Editing",
        "Kuala Lumpur",
      ],
      biography:
        "Hi there! I'm Jun Jie, a passionate frontend developer with a knack for crafting immersive digital experiences. With years of experience in programming and video editing, I bring a unique blend of technical skills and creative flair to every project. From building sleek websites to editing engaging videos, I love turning ideas into reality and delivering impactful results. Let's create something amazing together!",
    },
    {
      profilePic: profile3,
      collaboratorName: "Shanice",
      ratingStar: "3",
      filters: [
        "Intermediate",
        "80/hr-100/hr",
        "Writing",
        "Content Creation",
        "Kuching",
      ],
      biography:
        "Hi there! I'm Shanice, a passionate frontend developer with a knack for crafting immersive digital experiences. With years of experience in programming and video editing, I bring a unique blend of technical skills and creative flair to every project. From building sleek websites to editing engaging videos, I love turning ideas into reality and delivering impactful results. Let's create something amazing together!",
    },
    {
      profilePic: profile4,
      collaboratorName: "Lim Lily",
      ratingStar: "4",
      filters: [
        "Beginner",
        "30/hr-50/hr",
        "Programming",
        "Photographic",
        "Selangor",
      ],
      biography:
        "Hi there! I'm Lim Lily, a passionate frontend developer with a knack for crafting immersive digital experiences. With years of experience in programming and video editing, I bring a unique blend of technical skills and creative flair to every project. From building sleek websites to editing engaging videos, I love turning ideas into reality and delivering impactful results. Let's create something amazing together!",
    },
    {
      profilePic: profile5,
      collaboratorName: "James Ng",
      ratingStar: "3",
      filters: [
        "Intermediate",
        "80/hr-100/hr",
        "Writing",
        "Content Creation",
        "Johor Bahru",
      ],
      biography:
        "Hi there! I'm James Ng, a passionate frontend developer with a knack for crafting immersive digital experiences. With years of experience in programming and video editing, I bring a unique blend of technical skills and creative flair to every project. From building sleek websites to editing engaging videos, I love turning ideas into reality and delivering impactful results. Let's create something amazing together!",
    },
    {
      profilePic: profile6,
      collaboratorName: "RyuJin",
      ratingStar: "4",
      filters: [
        "Beginner",
        "30/hr-50/hr",
        "Programming",
        "Photographic",
        "Pealing Jaya",
      ],
      biography:
        "Hi there! I'm RyuJin, a passionate frontend developer with a knack for crafting immersive digital experiences. With years of experience in programming and video editing, I bring a unique blend of technical skills and creative flair to every project. From building sleek websites to editing engaging videos, I love turning ideas into reality and delivering impactful results. Let's create something amazing together!",
    },
    {
      profilePic: profile1,
      collaboratorName: "Peter Lim Seng Zheng",
      ratingStar: "3",
      filters: [
        "Intermediate",
        "80/hr-100/hr",
        "Writing",
        "Content Creation",
        "Kuala Lumpur",
      ],
      biography:
        "Hi there! I'm Peter, a passionate frontend developer with a knack for crafting immersive digital experiences. With years of experience in programming and video editing, I bring a unique blend of technical skills and creative flair to every project. From building sleek websites to editing engaging videos, I love turning ideas into reality and delivering impactful results. Let's create something amazing together!",
    },
    {
      profilePic: profile3,
      collaboratorName: "Yang Hung Geng",
      ratingStar: "4",
      filters: [
        "Beginner",
        "30/hr-50/hr",
        "Programming",
        "Photographic",
        "Kuala Lumpur",
      ],
      biography:
        "Hi there! I'm Yang Hung Geng, a passionate frontend developer with a knack for crafting immersive digital experiences. With years of experience in programming and video editing, I bring a unique blend of technical skills and creative flair to every project. From building sleek websites to editing engaging videos, I love turning ideas into reality and delivering impactful results. Let's create something amazing together!",
    },
    {
      profilePic: profile4,
      collaboratorName: "Amber Heng",
      ratingStar: "3",
      filters: [
        "Intermediate",
        "80/hr-100/hr",
        "Writing",
        "Content Creation",
        "Kuala Lumpur",
      ],
      biography:
        "Hi there! I'm Amber Heng, a passionate frontend developer with a knack for crafting immersive digital experiences. With years of experience in programming and video editing, I bring a unique blend of technical skills and creative flair to every project. From building sleek websites to editing engaging videos, I love turning ideas into reality and delivering impactful results. Let's create something amazing together!",
    },
    {
      profilePic: profile5,
      collaboratorName: "Gina",
      ratingStar: "4",
      filters: [
        "Beginner",
        "30/hr-50/hr",
        "Programming",
        "Photographic",
        "Kuala Lumpur",
      ],
      biography:
        "Hi there! I'm Gina, a passionate frontend developer with a knack for crafting immersive digital experiences. With years of experience in programming and video editing, I bring a unique blend of technical skills and creative flair to every project. From building sleek websites to editing engaging videos, I love turning ideas into reality and delivering impactful results. Let's create something amazing together!",
    },
    {
      profilePic: profile1,
      collaboratorName: "Peter Lim Seng Zheng",
      ratingStar: "5",
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
      ratingStar: "4",
      filters: [
        "Expert",
        "50/hr-80/hr",
        "Programming",
        "Editing",
        "Kuala Lumpur",
      ],
      biography:
        "Hi there! I'm Jun Jie, a passionate frontend developer with a knack for crafting immersive digital experiences. With years of experience in programming and video editing, I bring a unique blend of technical skills and creative flair to every project. From building sleek websites to editing engaging videos, I love turning ideas into reality and delivering impactful results. Let's create something amazing together!",
    },
    {
      profilePic: profile3,
      collaboratorName: "Shanice",
      ratingStar: "3",
      filters: [
        "Intermediate",
        "80/hr-100/hr",
        "Writing",
        "Content Creation",
        "Kuching",
      ],
      biography:
        "Hi there! I'm Shanice, a passionate frontend developer with a knack for crafting immersive digital experiences. With years of experience in programming and video editing, I bring a unique blend of technical skills and creative flair to every project. From building sleek websites to editing engaging videos, I love turning ideas into reality and delivering impactful results. Let's create something amazing together!",
    },
    {
      profilePic: profile4,
      collaboratorName: "Lim Lily",
      ratingStar: "4",
      filters: [
        "Beginner",
        "30/hr-50/hr",
        "Programming",
        "Photographic",
        "Selangor",
      ],
      biography:
        "Hi there! I'm Lim Lily, a passionate frontend developer with a knack for crafting immersive digital experiences. With years of experience in programming and video editing, I bring a unique blend of technical skills and creative flair to every project. From building sleek websites to editing engaging videos, I love turning ideas into reality and delivering impactful results. Let's create something amazing together!",
    },
    {
      profilePic: profile6,
      collaboratorName: "James Ng",
      ratingStar: "3",
      filters: [
        "Intermediate",
        "80/hr-100/hr",
        "Writing",
        "Content Creation",
        "Johor Bahru",
      ],
      biography:
        "Hi there! I'm James Ng, a passionate frontend developer with a knack for crafting immersive digital experiences. With years of experience in programming and video editing, I bring a unique blend of technical skills and creative flair to every project. From building sleek websites to editing engaging videos, I love turning ideas into reality and delivering impactful results. Let's create something amazing together!",
    },
  ];

  const filters = [
    {
      filterTitle: "EXPERIENCED LEVEL",
      filterTypes: ["Beginner", "Intermediate", "Expert"],
    },
    {
      filterTitle: "PRICE RATE",
      filterTypes: ["30/hr - 50/hr", "50/hr - 80/hr", "80/hr - 100/hr"],
    },
    {
      filterTitle: "SKILLS",
      filterTypes: ["Programming", "Editing", "Writing", "Content Creation"],
    },
    {
      filterTitle: "LOCATION",
      filterTypes: ["Kuala Lumpur", "Penang", "Johor Bahru", "Kuching","Remote"],
    },
    {
      filterTitle: "RATING",
      filterTypes: ["5", "4", "3", "2", "1"],
    }
  ];

   const filteredCollaborators = collaborators.filter((collaborator) => {
    return Object.keys(selectedFilters).every((filterTitle) => {
      const selectedValues = selectedFilters[filterTitle];
      return (
        selectedValues.length === 0 ||
        selectedValues.some((value) => collaborator.filters.includes(value))
      );
    });
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

          {slicedCollaborators.map((collaborator, index) => (
            <CollaboratorTab
              key={index}
              profilePic={collaborator.profilePic}
              collaboratorName={collaborator.collaboratorName}
              ratingStar={collaborator.ratingStar}
              filters={collaborator.filters}
              biography={collaborator.biography}
            />
          ))}
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

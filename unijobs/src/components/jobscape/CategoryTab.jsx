import React from "react";
import tech from "../../assets/icons/jobscape/tech.svg";
import creative from "../../assets/icons/jobscape/creative.svg";
import writing from "../../assets/icons/jobscape/writing.svg";
import education from "../../assets/icons/jobscape/education.svg";

const CategoryTab = ({ categoryImg, categoryType }) => (
  <div
    style={{
      width: "14%",
      height: "14%",
      margin: "10px",
      borderRadius: "10px",
      backgroundColor: "#FDFAF3",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      color: "#2D4877",
      padding: "10px",
    }}
  >
    <img
      src={categoryImg}
      style={{ width: "8vw", height: "30vh" }}
      alt="Category"
    />
    <p style={{ fontSize: "16px", marginTop: "5px", wordWrap: "break-word" }}>
      {categoryType}
    </p>
  </div>
);

const CategoryTabsContainer = ({ children }) => (
  <div style={{ display: "flex", justifyContent: "center" }}>{children}</div>
);

// Usage
const CategoryTabComponent = () => {
  return (
    <CategoryTabsContainer>
      <CategoryTab categoryImg={tech} categoryType="Technology & IT" />
      <CategoryTab categoryImg={creative} categoryType="Creative & Design" />
      <CategoryTab
        categoryImg={writing}
        categoryType="Writing & Content Creation"
      />
      <CategoryTab categoryImg={education} categoryType="Education & Training" />
    </CategoryTabsContainer>
  );
};

export default CategoryTabComponent;

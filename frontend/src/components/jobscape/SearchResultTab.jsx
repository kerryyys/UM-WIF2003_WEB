// SearchResultTab.jsx
import React from "react";
import { Tabs, Tab } from "react-bootstrap";

const SearchResultTab = ({ total, ProjectOrCollab,newOrRate }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end",
        margin: "3% 0 1% 0",
      }}
    >
      <div
        style={{
          padding: "5px 0",
          marginRight: "65%",
          fontSize: "14px",
          fontWeight: "700",
        }}
      >
        {total} {ProjectOrCollab}
      </div>
      <Tabs
        defaultActiveKey="newOrRate"
        id="search-result-tabs"
        style={{ borderBottom: "none", fontSize: "12px" }}
        className="custom-tabs"
      >
        <Tab
          eventKey="newOrRate"
          title={newOrRate}
          style={{
            borderBottom: "2px solid transparent",
            color: "#BCBCBC",
            borderTopLeftRadius: "4px",
            borderTopRightRadius: "4px",
          }}
        ></Tab>
        <Tab
          eventKey="hottest"
          title="HOTTEST"
          style={{
            borderBottom: "2px solid transparent",
            color: "#BCBCBC",
            borderTopLeftRadius: "4px",
            borderTopRightRadius: "4px",
          }}
        ></Tab>
      </Tabs>
    </div>
  );
};

export default SearchResultTab;

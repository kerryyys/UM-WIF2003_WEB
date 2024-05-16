import React, { useEffect, useState } from "react";
import { Form, Col, Container, Row } from "react-bootstrap";

const FilterTab = ({ filterTitle, filterTypes, onFilterChange }) => {
  // I commented these because I think no need to use it here
  // const [filterState, setFilterState] = useState(() => {
  //   // Initialize filter state based on the filterTypes array
  //   const initialState = {};
  //   filterTypes.forEach((filter, index) => {
  //     initialState[filter] = false;
  //   });
  //   return initialState;
  // });

  const [filterState, setFilterState] = useState([]); // Can ignore line 15:
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    console.log("name: " + name);
    onFilterChange(name, checked);
  };
  // For debugging - test filter are checked or not, can ignore
  useEffect(() => {
    console.log(
      "filterState from filterTab comp: " + JSON.stringify(filterState)
    );
  }, [filterState]);

  return (
    <Container style={{ marginBottom: "15px" }}>
      <Row>
        <Col>
          <hr style={{ width: "100%", margin: "0 0 5px" }} />
          <p style={{ fontSize: "16px", fontWeight: "600", margin: "15px 0" }}>
            {filterTitle}
          </p>

          <Form style={{ fontSize: "14px" }}>
            {filterTypes.map((filter, index) => (
              <Form.Group controlId={`filter${index + 1}`} key={index}>
                <Form.Check
                  type="checkbox"
                  label={filter}
                  name={filter}
                  checked={filterState[filter]}
                  onChange={handleCheckboxChange}
                />
              </Form.Group>
            ))}
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default FilterTab;

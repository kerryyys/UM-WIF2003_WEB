import React, { useState } from "react";
import { Form, Col, Container, Row } from "react-bootstrap";

const FilterTab = ({ filterTitle, filterTypes }) => {
  const [filterState, setFilterState] = useState(() => {
    // Initialize filter state based on the filterTypes array
    const initialState = {};
    filterTypes.forEach((filter, index) => {
      initialState[`filter${index + 1}`] = false;
    });
    return initialState;
  });

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setFilterState((prevFilters) => ({
      ...prevFilters,
      [name]: checked,
    }));
  };

  return (
    <Container style={{marginBottom:"15px"}}>
      <Row>
        <Col>
          <hr style={{ width: "100%", margin: "0 0 5px" }} />
          <p style={{ fontSize: "16px", fontWeight:"600", margin: "15px 0" }}>
            {filterTitle}
          </p>

          <Form style={{ fontSize: "14px" }}>
            {filterTypes.map((filter, index) => (
              <Form.Group controlId={`filter${index + 1}`} key={index}>
                <Form.Check
                  type="checkbox"
                  label={filter}
                  name={`filter${index + 1}`}
                  checked={filterState[`filter${index + 1}`]}
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

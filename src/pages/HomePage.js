import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import TrainingCard from "../components/TrainingCard";

const Homepage = () => {
  const exercises = [
    {
      title: "Fitness",
      "bg-img": "",
      variant: "danger",
    },
    {
      title: "Strength training",
      "bg-img": "",
      variant: "warning",
    },
    {
      title: "Cardio",
      "bg-img": "",
      variant: "success",
    },
    {
      title: "Stretches",
      "bg-img": "",
      variant: "info",
    },
  ];

  return (
    <Container className="h-100">
      <Row className="align-items-center h-100">
        {exercises.map((exercise) => (
          <Col xs="6" sm="3">
            <TrainingCard {...exercise} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Homepage;

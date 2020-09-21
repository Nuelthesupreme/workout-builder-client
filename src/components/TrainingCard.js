import React from "react";
import { Card, Button } from "react-bootstrap";

const TrainingCard = ({ variant, title }) => {
  return (
    <Card bg={variant} style={{ height: "400px" }}>
      <Card.Body className="text-center d-flex flex-column">
        <Card.Title className="mt-auto">{title}</Card.Title>
        <Button variant="dark" className="mt-auto">
          Create workout
        </Button>
      </Card.Body>
    </Card>
  );
};

export default TrainingCard;

import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function TrainingCard({ variant, title }) {
  const style = { height: "400px", backgroundSize: "cover" };

  if (title === "Fitness")
    style["backgroundImage"] =
      'url("https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80")';
  else if (title === "Strength training")
    style["backgroundImage"] =
      'url("https://images.unsplash.com/photo-1567013127542-490d757e51fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60")';
  else if (title === "Cardio")
    style["backgroundImage"] =
      'url("https://images.unsplash.com/photo-1516398810565-0cb4310bb8ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60")';
  else if (title === "Stretches")
    style["backgroundImage"] =
      'url("https://images.unsplash.com/photo-1539794830467-1f1755804d13?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60")';

  return (
    <Card className="shadow" bg={variant} style={style}>
      <Card.Body className="text-center d-flex flex-column">
        <Card.Title className="mt-auto text-white">{title}</Card.Title>
        <Button
          as={Link}
          variant="dark"
          to="/exercisebuilder"
          className="mt-auto"
        >
          Create workout
        </Button>
      </Card.Body>
    </Card>
  );
}

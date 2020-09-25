import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Card, Button, Spinner, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import { BASE_URL } from "../api/constants";
import UserContext from "../context/UserContext";

const Workouts = ({ title }) => {
  const { user } = useContext(UserContext);

  const [workouts, setWorkouts] = useState([]);

  const URL = `${BASE_URL}/user/workouts`;

  useEffect(() => {
    const getWorkouts = async () => {
      const { data } = await axios.get(URL, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });

      setWorkouts(data.allWorkouts);
    };

    getWorkouts();
  }, []);
  console.log(workouts);
  if (workouts.length !== 0) {
    return (
      <Row>
        {workouts.map((workout) => {
          return (
            <Card
              key={workout._id}
              className="text-center"
              style={{ width: "30%", padding: "15px", margin: "15px" }}
            >
              <Card.Title className="mt-auto">{workout.name}</Card.Title>

              {workout.exercises.map((exercise, index) => {
                return exercise.exercise ? (
                  <Card.Text key={index}>{exercise.exercise.name}</Card.Text>
                ) : null;
              })}

              <Row>
                <Col>
                  <Button
                    as={Link}
                    variant="dark"
                    to="/exercisebuilder"
                    className="mt-auto"
                    style={{
                      padding: "10px",
                      marginLeft: "5px",
                      marginRight: "5px",
                    }}
                  >
                    View workout
                  </Button>
                </Col>
                <Col>
                  <Button
                    as={Link}
                    variant="danger"
                    to="/exercisebuilder"
                    className="mt-auto"
                    style={{
                      padding: "10px",
                      marginLeft: "5px",
                      marginRight: "5px",
                    }}
                  >
                    Delete Workout
                  </Button>
                </Col>
              </Row>
            </Card>
          );
        })}
      </Row>
    );
  }
  return (
    <Container>
      <h1>Loading Workouts</h1>
      <Spinner animation="border" role="status" />
    </Container>
  );
};

export default Workouts;

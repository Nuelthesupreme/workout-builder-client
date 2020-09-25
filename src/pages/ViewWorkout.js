import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Container, Spinner, Row, Col, Card } from "react-bootstrap";
import axios from "axios";
import { BASE_URL } from "../api/constants";
import UserContext from "../context/UserContext";

const WORKOUTS = `${BASE_URL}/user/workouts`;

const ViewWorkout = () => {
  const { user } = useContext(UserContext);

  const [workout, setWorkout] = useState();

  const { id } = useParams();

  useEffect(() => {
    const getWorkout = async () => {
      const { data } = await axios.get(`${WORKOUTS}/${id}`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      setWorkout(data.workout);
    };
    getWorkout();
  }, [id]);

  if (workout) {
    return (
      <Container
        className="align-items-center justify-content-center"
        style={{ height: "100vh" }}
      >
        <Card
          style={{
            marginTop: "50px",
            marginLeft: "15px",
            marginRight: "15px",
            boxShadow: "-1px 7px 13px -1px rgba(61,61,61,1)",
            padding: "40px",
          }}
        >
          <h1>{workout.name}</h1>
          <h2>
            {workout.muscleGroup.name} - {workout.muscleGroup.description}
          </h2>

          <h3>Exercises:</h3>
          <ol>
            {workout.exercises.map((exercise) => {
              return (
                <li key={exercise._id}>
                  <Row>
                    <Col>
                      <h4>{exercise.exercise.name}</h4>
                    </Col>
                    <Col>
                      <h4>Sets: {exercise.sets}</h4>
                    </Col>
                    <Col>
                      <h4>
                        Reps:
                        {exercise.reps}
                      </h4>
                    </Col>
                  </Row>
                  <Row style={{ paddingLeft: "15px" }}>
                    <p>{exercise.exercise.description}</p>
                  </Row>
                  <Row style={{ paddingLeft: "15px" }}>
                    <p>
                      Equipment required:{" "}
                      {exercise.exercise.equipments.join(",")}
                    </p>
                  </Row>
                </li>
              );
            })}
          </ol>
        </Card>
      </Container>
    );
  }

  return (
    <Container>
      <h1>Loading Workout...</h1>
      <Spinner animation="border" role="status" />
    </Container>
  );
};

export default ViewWorkout;

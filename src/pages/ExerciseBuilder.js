import React, { useEffect, useState, useContext } from "react";
import { Container, Form, Row, Col, Button, Card } from "react-bootstrap";
import axios from "axios";
import UserContext from "../context/UserContext";
import { BASE_URL } from "../api/constants";

const ExerciseBuilder = () => {
  const { user } = useContext(UserContext);
  const authToken = user.token;

  const createNewExercisePlan = () => ({ exercise: "", sets: "", reps: "" });

  const [editable, setEditable] = useState(true);

  const [allMuscleGroups, setAllMuscleGroups] = useState([]);

  const [exerciseName, setExerciseName] = useState("");
  const [muscleGroup, setMuscleGroup] = useState("");
  const [exercisePlans, setExercisePlans] = useState([]);

  const selectedMuscleGroup = muscleGroup ? allMuscleGroups[muscleGroup] : {};

  const config = {
    headers: { Authorization: `Bearer ${authToken}` },
  };

  useEffect(() => {
    const getAllMuscleGroups = async () => {
      const { data } = await axios.get(`${BASE_URL}/api/muscleGroups`, config);
      setAllMuscleGroups(data);
    };
    getAllMuscleGroups();
  }, []);

  const saveWorkout = (event) => {
    event.preventDefault();

    const workout = {
      name: "Workout But Better",
      muscleGroup: selectedMuscleGroup._id,
      exercises: exercisePlans.map((exercisePlan) => {
        const { exercise, sets, reps } = exercisePlan;

        return {
          exerciseId: exercise
            ? selectedMuscleGroup.exercises[exercise]._id
            : selectedMuscleGroup.exercises[0]._id,
          sets: +sets,
          reps: +reps,
        };
      }),
    };

    console.log(workout);

    axios.post(`${BASE_URL}/user/workouts`, workout, config).then(console.log);
  };

  const handleAddExercisePlan = (e) => {
    e.preventDefault();

    setExercisePlans([...exercisePlans, createNewExercisePlan()]);
  };

  const handleUpdateExercisePlan = (event, index, prop) => {
    event.preventDefault();

    const newExercisePlans = exercisePlans.map((plan) => ({ ...plan }));

    newExercisePlans[index][prop] = event.target.value;

    setExercisePlans(newExercisePlans);
  };

  return (
    <Container className="h-100">
      {editable && (
        <Card className="my-5  shadow">
          <Card.Body>
            <Form>
              <Form.Group as={Row} controlId="formHorizontalEmail">
                <Form.Label column sm={2}>
                  Exercise name
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    type="text"
                    value={exerciseName}
                    placeholder="2 weeks abs builder"
                    onChange={(e) => setExerciseName(e.target.value)}
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="formHorizontalEmail">
                <Form.Label column sm={2}>
                  Muscle groups
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    as="select"
                    value={muscleGroup}
                    onChange={(e) => setMuscleGroup(e.target.value)}
                    custom
                  >
                    <option value="" disabled hidden>
                      Choose muscle group
                    </option>
                    {allMuscleGroups.map((muscleGroup, index) => (
                      <option key={index} value={index}>
                        {muscleGroup.name}
                      </option>
                    ))}
                  </Form.Control>
                </Col>
              </Form.Group>

              {exercisePlans.map((exercisePlan, index) => (
                <Form.Group key={index} as={Row}>
                  <Form.Label column sm={2}>
                    {" "}
                    Exercise plan {index + 1}
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Row>
                      <Form.Group as={Col} md="8">
                        <Form.Control
                          as="select"
                          value={exercisePlan.exercise}
                          onChange={(event) =>
                            handleUpdateExercisePlan(event, index, "exercise")
                          }
                          placeholder="Choose exercise"
                          custom
                        >
                          <option value="" disabled hidden>
                            Choose exercise
                          </option>
                          {selectedMuscleGroup.exercises.map(
                            (exercise, index) => (
                              <option key={index} value={index}>
                                {exercise.name}
                              </option>
                            )
                          )}
                        </Form.Control>
                      </Form.Group>
                      <Form.Group as={Col} md="2">
                        <Form.Control
                          type="number"
                          value={exercisePlan.sets}
                          min="0"
                          onChange={(e) =>
                            handleUpdateExercisePlan(e, index, "sets")
                          }
                          placeholder="Sets.."
                        />
                      </Form.Group>
                      <Form.Group as={Col} md="2">
                        <Form.Control
                          type="number"
                          value={exercisePlan.reps}
                          min="0"
                          onChange={(e) =>
                            handleUpdateExercisePlan(e, index, "reps")
                          }
                          placeholder="Reps.."
                        />
                      </Form.Group>
                    </Form.Row>
                  </Col>
                </Form.Group>
              ))}

              <Form.Group as={Row}>
                <Col sm={{ span: 10, offset: 2 }}>
                  <Button
                    variant="dark"
                    type="submit"
                    onClick={handleAddExercisePlan}
                    disabled={!!!muscleGroup}
                  >
                    Add exercise
                  </Button>
                  <Button
                    variant="success"
                    onClick={(e) => setEditable(false)}
                    className="ml-5"
                    type="submit"
                  >
                    Build
                  </Button>
                </Col>
              </Form.Group>
            </Form>
          </Card.Body>
        </Card>
      )}

      {!editable && (
        <Card className="shadow mt-5">
          <Card.Body>
            <Card.Title className="text-uppercase">
              {exerciseName || "Unnamed exercise"}
            </Card.Title>
            <Card.Subtitle className="text-uppercase mb-4">
              {selectedMuscleGroup && selectedMuscleGroup.name}
            </Card.Subtitle>
            <Row>
              {exercisePlans.map((exercisePlan, index) => (
                <Col key={index} lg="3">
                  <Card className="mb-4">
                    <Card.Body>
                      <Card.Title className="text-capitalize">
                        {selectedMuscleGroup && exercisePlan.exercise
                          ? selectedMuscleGroup.exercises[exercisePlan.exercise]
                              .name
                          : `Exercise ${++index}`}
                      </Card.Title>
                    </Card.Body>
                    <Card.Footer>
                      <Row className="text-center">
                        <Col className="h5 font-weight-light">
                          {exercisePlan.sets | "0"} sets
                        </Col>
                        <Col className="h5 font-weight-light">
                          {exercisePlan.reps | "0"} reps
                        </Col>
                      </Row>
                    </Card.Footer>
                  </Card>
                </Col>
              ))}
            </Row>

            <Button variant="dark" onClick={saveWorkout} className="mr-2 mb-2">
              Save
            </Button>
            <Button
              variant="dark"
              onClick={(e) => setEditable(true)}
              className="mr-2 mb-2"
            >
              Edit
            </Button>
          </Card.Body>
        </Card>
      )}
    </Container>
  );
};

export default ExerciseBuilder;

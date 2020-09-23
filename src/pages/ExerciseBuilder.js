import React, { useEffect, useState } from 'react';
import { Container, Form, Row, Col, Button, Card } from 'react-bootstrap';

import axios from 'axios';

export default function ExerciseBuilder() {
    const createNewExercisePlan = () => ({ exercise: '', sets: '', reps: '' });

    const [editable, setEditable] = useState(true);

    const [allMuscleGroups, setAllMuscleGroups] = useState([]);

    const [exerciseName, setExerciseName] = useState('');
    const [muscleGroup, setMuscleGroup] = useState('');
    const [exercisePlans, setExercisePlans] = useState([]);

    const selectedMuscleGroup = muscleGroup ? allMuscleGroups[muscleGroup] : {};

    const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmNjkwNmI0ODNjNzc3MjU1NGNiZWUyOSIsImVtYWlsIjoiZW5rZXlAZW1tYWlsLmNvbSIsImlhdCI6MTYwMDg5Mjk1MywiZXhwIjoxNjAwODk2NTUzfQ.SZY8uvfgTenpcWw5W-gbKxFHZKQJSBksPX6WlGzanfY'

    // Get muscle groups
    useEffect(() => {
        getAllMuscleGroups();
    }, [])

    const getPlanJSON = () => {
        return JSON.stringify({
            name: exerciseName,
            muscleGroup: selectedMuscleGroup._id,
            exercisePlans: exercisePlans.map(exercisePlan => {
                const { exercise, sets, reps } = exercisePlan;
                return { exerciseId: exercise ? selectedMuscleGroup.exercises[exercise]._id : '', sets, reps }
            })
        })
    }

    const getAllMuscleGroups = () => {
        const config = {
            headers: { Authorization: `Bearer ${authToken}` }
        }
        axios.get('http://localhost:8000/api/muscleGroups', config)
            .then(res => setAllMuscleGroups(res.data))
    }

    const handleSaveExercisePlan = e => {
        e.preventDefault();
        const payload = {
            exercisePlans: getPlanJSON()
        }
        const config = {
            headers: { Authorization: `Bearer ${authToken}` }
        }
        axios.put('http://localhost:8000/user/userworkouts', payload, config)
            .then(console.log);
    }

    const handleAddExercisePlan = e => {
        e.preventDefault();
        setExercisePlans([...exercisePlans, createNewExercisePlan()]);
    }

    const handleUpdateExercisePlan = (e, index, prop) => {
        e.preventDefault();
        const newExercisePlans = exercisePlans.map(plan => ({ ...plan }));
        newExercisePlans[index][prop] = e.target.value;
        setExercisePlans(newExercisePlans);
    }

    return (
        <Container className='h-100'>
            {editable &&
                <Card className='my-5  shadow'>
                    <Card.Body>
                        <Form>
                            <Form.Group as={Row} controlId="formHorizontalEmail">
                                <Form.Label column sm={2}>
                                    Exercise name
                </Form.Label>
                                <Col sm={10}>
                                    <Form.Control type="text" value={exerciseName} placeholder="2 weeks abs builder" onChange={e => setExerciseName(e.target.value)} />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="formHorizontalEmail">
                                <Form.Label column sm={2}>
                                    Muscle groups
                </Form.Label>
                                <Col sm={10}>
                                    <Form.Control as="select" value={muscleGroup} onChange={e => setMuscleGroup(e.target.value)} custom>
                                        <option value="">Choose muscle group</option>
                                        {allMuscleGroups.map((muscleGroup, index) =>
                                            <option key={index} value={index}>{muscleGroup.name}</option>
                                        )}
                                    </Form.Control>
                                </Col>
                            </Form.Group>

                            {exercisePlans.map((exercisePlan, index) =>
                                <Form.Group key={index} as={Row}>
                                    <Form.Label column sm={2}> Exercise plan {index + 1}</Form.Label>
                                    <Col sm={10}>
                                        <Form.Row>
                                            <Form.Group as={Col} md="8">
                                                <Form.Control as="select" value={exercisePlan.exercise} onChange={e => handleUpdateExercisePlan(e, index, 'exercise')} custom>
                                                    <option value="">Choose exercise</option>
                                                    {selectedMuscleGroup.exercises.map((exercise, index) =>
                                                        <option key={index} value={index}>{exercise.name}</option>
                                                    )}
                                                </Form.Control>
                                            </Form.Group>
                                            <Form.Group as={Col} md="2">
                                                <Form.Control type="number" value={exercisePlan.sets} min='0' onChange={e => handleUpdateExercisePlan(e, index, 'sets')} placeholder='Sets..' />
                                            </Form.Group>
                                            <Form.Group as={Col} md="2">
                                                <Form.Control type="number" value={exercisePlan.reps} min='0' onChange={e => handleUpdateExercisePlan(e, index, 'reps')} placeholder='Reps..' />
                                            </Form.Group>
                                        </Form.Row>
                                    </Col>
                                </Form.Group>
                            )}


                            <Form.Group as={Row}>
                                <Col sm={{ span: 10, offset: 2 }}>
                                    <Button variant='dark' type="submit" onClick={handleAddExercisePlan} disabled={!!!muscleGroup}>Add exercise plan</Button>
                                    <Button variant='success' onClick={e => setEditable(false)} className='ml-5' type="submit">Build</Button>
                                </Col>
                            </Form.Group>
                        </Form>
                    </Card.Body>
                </Card>
            }

            {!editable &&
                <Card className='shadow mt-5'>
                    <Card.Body>
                        <Card.Title className='text-uppercase'>{exerciseName || 'Unnamed exercise'}</Card.Title>
                        <Card.Subtitle className='text-uppercase mb-4'>{selectedMuscleGroup && selectedMuscleGroup.name}</Card.Subtitle>
                        <Row>
                            {exercisePlans.map((exercisePlan, index) =>
                                <Col key={index} lg='3'>
                                    <Card className='mb-4'>
                                        <Card.Body>
                                            <Card.Title className='text-capitalize'>{(selectedMuscleGroup && exercisePlan.exercise) ? selectedMuscleGroup.exercises[exercisePlan.exercise].name : `Exercise ${++index}`}</Card.Title>
                                        </Card.Body>
                                        <Card.Footer>
                                            <Row className='text-center'>
                                                <Col className='h5 font-weight-light'>{exercisePlan.sets | "0"} sets</Col>
                                                <Col className='h5 font-weight-light'>{exercisePlan.reps | "0"} reps</Col>
                                            </Row>
                                        </Card.Footer>
                                    </Card>
                                </Col>
                            )}
                        </Row>

                        <Button variant='dark' onClick={handleSaveExercisePlan} className='mr-2 mb-2'>Save</Button>
                        <Button variant='dark' onClick={e => setEditable(true)} className='mr-2 mb-2'>Edit</Button>
                        <Button variant='dark' className='mr-2 mb-2'>Delete</Button>
                    </Card.Body>
                </Card>
            }
        </Container>
    )
}
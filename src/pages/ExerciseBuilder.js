import React, { useState } from 'react';
import { Container, Form, Row, Col, Button, Card } from 'react-bootstrap';

export default function ExerciseBuilder() {
    const createNewExercisePlan = () => ({ exercise: '', sets: '', reps: '' });

    const [editable, setEditable] = useState(true);

    const [muscleGroup, setMuscleGroup] = useState('');
    const [exercisePlans, setExercisePlans] = useState([createNewExercisePlan()]);

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
    // returned data from the baclend call
    const muscleGroups = [
        {
            text: 'Choose muscle group',
            value: ''
        },
        {
            text: 'Chest',
            value: 'Chest'
        },
        {
            text: 'Back',
            value: 'Back'
        },
    ]

    return (
        <Container className='h-100'>
            {editable &&
                <Card className='my-5  shadow'>
                    <Card.Body>
                        <Form>
                            <Form.Group as={Row} controlId="formHorizontalEmail">
                                <Form.Label column sm={2}>
                                    Muscle groups
                                 </Form.Label>
                                <Col sm={10}>
                                    <Form.Control as="select" value={muscleGroup} onChange={e => setMuscleGroup(e.target.value)} custom>

                                        {muscleGroups.map(muscleGroup =>
                                            <option value={muscleGroup.value}>{muscleGroup.text}</option>
                                        )}
                                    </Form.Control>
                                </Col>
                            </Form.Group>

                            {exercisePlans.map((exercisePlan, index) =>
                                <Form.Group as={Row}>
                                    <Form.Label column sm={2}> Exercise plan {index + 1}</Form.Label>
                                    <Col sm={10}>
                                        <Form.Row>
                                            <Form.Group as={Col} md="8">
                                                <Form.Control as="select" value={exercisePlan.exercise} onChange={e => handleUpdateExercisePlan(e, index, 'exercise')} custom>
                                                    <option value="">Choose exercise</option>
                                                    <option value="bench press">bench press</option>
                                                    <option value="dumbell press">dumbell press</option>
                                                    <option value="hammer curls">hammer curls</option>
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
                                    <Button variant='dark' type="submit" onClick={handleAddExercisePlan}>Add exercise plan</Button>
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
                        <Card.Title className='display-4 text-uppercase'>{muscleGroup}</Card.Title>
                        {exercisePlans.map((exercisePlan, index) =>
                            <Card className='mb-4'>
                                <Card.Body>
                                    <Card.Title className='text-capitalize'>{exercisePlan.exercise}</Card.Title>
                                </Card.Body>
                                <Card.Footer>
                                    <Row className='text-center'>
                                        <Col className='h4 font-weight-normal'>{exercisePlan.sets | "0"} sets</Col>
                                        <Col className='h4 font-weight-normal'>{exercisePlan.reps | "0"} reps</Col>
                                    </Row>
                                </Card.Footer>
                            </Card>
                        )}

                        <Button variant='dark' className='mr-2 mb-2'>Save</Button>
                        <Button variant='dark' onClick={e => setEditable(true)} className='mr-2 mb-2'>Edit</Button>
                        <Button variant='dark' className='mr-2 mb-2'>Delete</Button>
                    </Card.Body>
                </Card>
            }
        </Container>
    )
}
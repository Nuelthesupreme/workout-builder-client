import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import { BASE_URL } from "../api/constants";
import UserContext from "../context/UserContext";

const Workouts = ({ title }) => {
  const { user } = useContext(UserContext);

  const [workouts, setWorkouts] = useState([]);

  const URL = `${BASE_URL}/api/workouts`;

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(URL, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      console.log(data);
    };

    fetchData();
  }, []);

  return (
    <Card className="text-right">
      <blockquote className="blockquote mb-0 card-body">
        <Card.Title className="mt-auto text-white">{title}</Card.Title>
        <footer className="blockquote-footer">
          <Button
            as={Link}
            variant="dark"
            to="/exercisebuilder"
            className="mt-auto"
          >
            View workout
        </Button>
        </footer>
      </blockquote>
    </Card>
  )
};

export default Workouts;

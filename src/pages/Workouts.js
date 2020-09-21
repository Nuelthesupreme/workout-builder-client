import React, { useContext, useEffect } from "react";
import axios from "axios";

import { BASE_URL } from "../api/constants";
import UserContext from "../context/UserContext";

const Workouts = () => {
  const { user } = useContext(UserContext);

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

  return <div>Workouts</div>;
};

export default Workouts;

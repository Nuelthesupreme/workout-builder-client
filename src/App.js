import React, { useState, createContext } from "react";
import {BrowserRouter as HashRouter, Router, Route} from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container } from 'react-bootstrap';


import Login from "./Login";
import SignUp from "./Signup";

export const AppContext = createContext();



function App () {
  const [user, setUser] = useState({});
  return (
    <HashRouter>
      <AppContext.Provider value={{ user, setUser }}>
       <Container className="App">
      <Container style={{height: 'calc(100vh - 40px - 16px)'}}>
        <Router>
          <Route exact path='/' render={props => <Homepage />} />
          <Route exact path='/build' render={props => <ExerciseBuilder />} />
          <Route exact path='/login' render={props => <Login />} />
          <Route exact path='/sogin' render={props => <SignUp />} />
        </Router>
      </Container>
    </Container>
    </AppContext.Provider>
    </HashRouter>
     
  );
}

export default App;

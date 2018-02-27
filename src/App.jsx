import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Grid, Row, Col } from 'react-bootstrap';
import * as firebase from 'firebase'

import Home from './components/Home';
import About from './components/About';
import SingUp from './components/SingUp';
import Navbar from './components/CustomNavbar';
import SideNav from './components/SideNav';

 // Initialize Firebase
const config = {
  apiKey: "AIzaSyBa7yOADK_7PR-ueajFEPjKf9sIPkMPWqw",
  authDomain: "mercury-50142.firebaseapp.com",
  databaseURL: "https://mercury-50142.firebaseio.com",
  projectId: "mercury-50142",
  storageBucket: "mercury-50142.appspot.com",
  messagingSenderId: "1013542528705"
};
firebase.initializeApp(config);

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Row>
            <Col sm={3} md={3}>
              < SideNav />
            </Col>
            <Col sm={9} md={9}>
              <Route exact path="/" component={Home} />
              <Route path="/About" component={About} />
              <Route path="/SingUp" component={SingUp} />
            </Col>
          </Row>
        </div>

      </Router>
    );
  }
}

export default App;

import React from 'react';
import './App.css';
import { Row, Col } from 'reactstrap';
import Home from "./components/Home";

function App() {
  return (
      <div className="App">
        <div className="container container-fluid">
        <Row>
          <Col md={{ size:6, offset:3}}>
           <h1 className="topTitle" >Energy Smart Vehicle</h1>
          </Col>
        </Row>
        <Row>
            <Home />
        </Row>
         </div>
      </div>
  );
}

export default App;

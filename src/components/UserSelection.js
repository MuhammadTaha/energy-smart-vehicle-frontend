import * as React from 'react';
import { Jumbotron, Container, Row, Col } from "reactstrap";

import DateTimePicker from 'react-datetime-picker';
// import "react-datepicker/dist/react-datepicker.css";


export default class UserSelection extends React.Component {

  state = {
    date: new Date(),
  }

  onChange = date => this.setState({ date })

    render() {
      return (
        <Container>
          <Row>
            <Col md={{ size: 8, offset: 2 }} className="topSpace">
                  <div className = "divUserInputs topSpace">
                      <Col md={{ size: 4 }}>
                          <label>Select route:</label>
                          <select >
                            <option>Ernst Reuter Platz to Tempelhof feld </option>
                            {/* <option>Route B</option> */}
                          </select>
                      </Col>
                      <Col md={8} className="clearfix topSpace">
                          <div className="float-left">
                          <DateTimePicker
                            onChange={this.onChange}
                            value={this.state.date}
                          />
                          <div className="custom-control custom-switch">
                            <input type="checkbox" className="custom-control-input" id="customSwitch1"/>
                            <label className="custom-control-label" for="customSwitch1">Minimize Energy consumption</label>
                          </div>
                          <div className="custom-control custom-switch">
                            <input type="checkbox" className="custom-control-input" id="customSwitch2"/>
                            <label className="custom-control-label" for="customSwitch2">Minimize Charging Cost</label>
                          </div>
                          <div className="custom-control custom-switch">
                            <input type="checkbox" className="custom-control-input" id="customSwitch3"/>
                            <label className="custom-control-label" for="customSwitch3">Minimize Driving Time</label>
                          </div>
                          </div>
                          <div className="float-right divMapImage">

                          <img alt="" src="https://picsum.photos/200/200?random=1"></img>
                          </div>
                      </Col>
                  </div>
            </Col>
          </Row>
        
          <Row>
            <Col md={{ size: 8, offset: 2 }} className="topSpace">
            <h5>Output</h5>
              <div className = "divUserInputs topSpace">
                 <Row>
                          <h6 className="alignResultText">Optimal Time for Departure</h6>
                  </Row>  
                  <Row>
                          <h6 className="alignResultText">Energy Consumed</h6>
                  </Row>
                  <Row>
                          <h6 className="alignResultText">Waiting Time</h6>
                  </Row>      
                </div>
            </Col>
        </Row>
      </Container>
      );
    }
}
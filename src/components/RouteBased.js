import * as React from 'react';
import { Table, Container, Row, Col, Input, Button, Form, CustomInput } from "reactstrap";

import DateTimePicker from 'react-datetime-picker';
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'

// import "react-datepicker/dist/react-datepicker.css";


export default class RouteBased extends React.Component {

  state = {
    date: new Date(),
    energy: 10, 
    waiting: 10, 
    driving: 10, 
  }

  onChange = date => this.setState({ date })

  submitForm(e){
    console.log(e);
  }

  handleOnChange = (event) => {
      console.log('change value', event.target.id, event.target.value);
      switch(event.target.id){
        case 'energyRange':
            this.setState({
                energy: event.target.value
            })
            break;
        case 'waitingRange':
            this.setState({
                waiting: event.target.value
            })
            break;
        case 'drivingRange':
            this.setState({
                driving: event.target.value
            })
            break;
      }
  }
    render() {

      let targetDate = new Date();
      targetDate.setDate(targetDate.getDate() + 7);
      let min = 0, max = 10, stepValue= 0.1;
      return (
        <Container>
            <Form onSubmit={this.submitForm}>
          <Row>
              <Col md={{ size: 10, offset: 1 }} className="topSpace">
              <h3>Route Based</h3>

                  <div className="divUserInputs topSpace">
                      <Row>
                          <Col md={{size:5}}>
                              <label>Select a route:</label>
                              <Input name="routeName" type="select">
                              <option value="ernstReuter" >Ernst Reuter Platz to Tempelhof feld </option>
                              </Input>
                          </Col>
                          <Col md={{size:5, offset: 1}}>
                              <label>Select a car:</label>
                              <Input name="carType" type="select">
                              <option value="nissanLeaf">Nissan Leaf</option>
                              </Input>
                          </Col>
                      </Row>

                      <Col md={12} className="clearfix topSpace">
                          <div>
                              <Row>
                                <Col md={{size:5}}>
                                  <DateTimePicker onChange={this.onChange} value={this.state.date} maxDate={targetDate} minDate={new Date()} className="form-control" name="arrivalTime" />
                                </Col>
                              </Row>
                              <Row>
                                  <Col md={8}>

                                      <Table>
                                          <thead>
                                              <th></th>
                                              <th>Priority Range</th>
                                              <th>Value</th>
                                          </thead>
                                          <tbody>
                                              <tr>
                                                  <td>
                                                      Minimize Energy consumption
                                                  </td>
                                                  <td>
                                                  <CustomInput type="range" id="energyRange" name="minEnergy" min={min} max={max} onChange={this.handleOnChange} />
                                                  </td>
                                                  <td>
                                                      <Input type="text" className="rangeDisplay" id="minEnergyValue" name="minEnergyValue" value={this.state.energy} readOnly></Input>
                                                    </td>
                                              </tr>
                                              <tr>
                                                  <td>
                                                      Minimize Waiting Time
                                                  </td>
                                                  <td>
                                                    <CustomInput type="range" id="waitingRange" name="minWaiting" min={min} max={max} onChange={this.handleOnChange} />
                                                  </td>
                                                  <td>
                                                    <Input type="text" className="rangeDisplay" id="minWaitingValue" name="minWaitingValue" value={this.state.waiting} readOnly></Input>
                                                  </td>
                                              </tr>
                                              <tr>
                                                  <td>
                                                      Minimize Driving Time
                                                  </td>
                                                  <td>
                                                    <CustomInput type="range" id="drivingRange" name="minDriving" min={min} max={max} onChange={this.handleOnChange} />
                                                  </td>
                                                  <td>
                                                    <Input type="text" className="rangeDisplay" id="minDrivingValue" name="minDrivingValue" value={this.state.driving} readOnly></Input>
                                                  </td>
                                              </tr>
                                          </tbody>

                                      </Table>

                                  </Col>
                                  <Col md={3}>
                                      <div>
                                          <img alt="" src="https://picsum.photos/200/200?random=1"></img>
                                      </div>
                                  </Col>
                              </Row>
                              <Row>
                                <Col md={11} style={{marginTop:'1%'}}>
                                  <Button classname="submitButton" type="submit" className="float-right">Submit</Button>
                                </Col>
                              </Row>
                          </div>

                      </Col>
                  </div>
              </Col>
          </Row>

          <Row>
              <Col md={{ size: 10, offset: 1 }} style={{marginBottom:"4%"}}>
                  <Row>
                    <Col><h5>Output</h5></Col>
                  </Row>
                  <div className="divUserInputs topSpace">
                      <Row>
                        <Col>
                          <h6 className="alignResultText">Optimal Time for Departure</h6>
                          </Col>
                          <Col>
                          <h6 className="alignResultText">Recommended Route</h6>
                          </Col>
                      </Row>
                      <Row>
                        <Col>
                          <h6 className="alignResultText">Energy Consumed</h6>
                          </Col>
                          <Col>
                          <h6 className="alignResultText">Waiting Duration</h6>
                          </Col>
                      </Row>
                      <Row>
                        <Col>
                          <h6 className="alignResultText">Driving Duration</h6>
                        </Col>
                        <Col>
                          <h6 className="alignResultText"></h6>
                        </Col>
                      </Row>
                  </div>
              </Col>
          </Row>
          </Form>
      </Container>
      );
    }
}
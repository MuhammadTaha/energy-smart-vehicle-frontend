import * as React from 'react';
import { Table, Container, Row, Col, Input, Button, Form } from "reactstrap";

import DateTimePicker from 'react-datetime-picker';
// import "react-datepicker/dist/react-datepicker.css";


export default class RouteBased extends React.Component {

  state = {
    date: new Date(),
  }

  onChange = date => this.setState({ date })

  submitForm(e){
    console.log(e);
  }

    render() {

      let targetDate = new Date();
      targetDate.setDate(targetDate.getDate() + 7);

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
                              <Input name="" type="select">
                              <option>Nissan Leaf </option>
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
                                              <th>High</th>
                                              <th>Medium</th>
                                              <th>Low</th>
                                          </thead>
                                          <tbody>
                                              <tr>
                                                  <td>
                                                      Minimize Energy consumption
                                                  </td>
                                                  <td>
                                                      <Input type="radio" className="radio-priority" checked name="minEnergy" />
                                                  </td>
                                                  <td>
                                                      <Input type="radio" className="radio-priority" name="minEnergy" />
                                                  </td>
                                                  <td>
                                                      <Input type="radio" className="radio-priority" name="minEnergy" />
                                                  </td>
                                              </tr>
                                              <tr>
                                                  <td>
                                                      Minimize Waiting Time
                                                  </td>
                                                  <td>
                                                      <Input type="radio" className="radio-priority" checked name="minWaiting" />
                                                  </td>
                                                  <td>
                                                      <Input type="radio" className="radio-priority" name="minWaiting" />
                                                  </td>
                                                  <td>
                                                      <Input type="radio" className="radio-priority" name="minWaiting" />
                                                  </td>
                                              </tr>
                                              <tr>
                                                  <td>
                                                      Minimize Driving Time
                                                  </td>
                                                  <td>
                                                      <Input type="radio" className="radio-priority" checked name="minDriving" />
                                                  </td>
                                                  <td>
                                                      <Input type="radio" className="radio-priority" name="minDriving" />
                                                  </td>
                                                  <td>
                                                      <Input type="radio" className="radio-priority" name="minDriving" />
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
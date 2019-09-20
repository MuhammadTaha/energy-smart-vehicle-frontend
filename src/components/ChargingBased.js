import * as React from 'react';
import { Row, Col, Input, Container, Button, Table } from 'reactstrap';

import DateTimePicker from 'react-datetime-picker';


export default class ChargingBased extends React.Component {

  state = {
    date: new Date(),
  }

  onChange = date => this.setState({ date })

  render() {

    let targetDate = new Date();
      targetDate.setDate(targetDate.getDate() + 7);

      return (
        <Container>
        <Row>
            <Col md={{ size: 10, offset: 1 }} className="topSpace">
              <h3>Charging Based</h3>
                <div className="divUserInputs topSpace">
                    <Row>
                        <Col md={{size:5}}>
                            <label>Charging Type</label>
                            <Input type="select">
                            <option>10 kW </option>
                            <option>15 kW </option>
                            <option>20 kW </option>
                            </Input>
                        </Col>
                        <Col md={{size:5, offset: 1}}>
                            <label>Select a car:</label>
                            <Input type="select">
                            <option>Nissan Leaf </option>
                            </Input>
                        </Col>
                    </Row>

                    {/* <Col md={12} className="clearfix topSpace"> */}
                            <Row>
                              <Col md={{size:5}} style={{marginLeft:"1.5%"}}>
                              <label>Arrival Time</label>
                                <DateTimePicker onChange={this.onChange} value={this.state.date} maxDate={targetDate} minDate={new Date()} className="form-control" name="arrivalTime" />
                              </Col>
                              <Col md={{size:5, offset:1}}>
                              <label>Departure Time</label>
                                <DateTimePicker onChange={this.onChange} value={this.state.date} maxDate={targetDate} minDate={new Date()} className="form-control" name="arrivalTime" />
                              </Col>
                            </Row>
                            <Row>
                              <Col md={{size:5}}>
                                  <label>Select a city:</label>
                                  <Input type="select">
                                  <option>Berlin </option>
                                  </Input>
                              </Col>
                              <Col md={{size:5, offset: 1}}>
                                  <label>Charging Status</label>
                                  <Input type="select">
                                      <option>10%</option>
                                      <option>20%</option>
                                      <option>30%</option>
                                      <option>40%</option>
                                  </Input>
                              </Col>
                            </Row>
                            
                            <Row>
                              <Col md={11} style={{marginTop:'1%'}}>
                                <Button classname="submitButton" type="submit" className="float-right">Submit</Button>
                              </Col>
                            </Row>

                    {/* </Col> */}
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
                    <Table>
                                          <thead>
                                              <th>Hour</th>
                                              <th>Amount Energy Transferred</th>
                                              <th>Cost of Energy</th>
                                          </thead>
                                          <tbody>
                                              <tr>
                                                  <td>
                                                  </td>
                                                  <td>
                                                  </td>
                                                  <td>
                                                  </td>
                                              </tr>
                                              <tr>
                                                  <td>
                                                  </td>
                                                  <td>
                                                  </td>
                                                  <td>
                                                  </td>
                                              </tr>
                                              
                                          </tbody>

                                      </Table>
                      {/* <Col>
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
                      </Col> */}
                    </Row>
                </div>
                {/* </div>
            </Col>
            <Col md={{ size: 5 }} className="divUserInputs">
                {/* <div className="topSpace"> */}
                    {/* <Row> */}
                        {/* <h6 className="alignResultText">Optimal Time for Departure</h6> */}
                    {/* </Row> */}
                    {/* <Row> */}
                        {/* <h6 className="alignResultText">Energy Consumed</h6> */}
                    {/* </Row> */}
                    {/* <Row> */}
                        {/* <h6 className="alignResultText">Waiting Time</h6> */}
                    {/* </Row> */}
                {/* </div> */}
            </Col>
        </Row>
    </Container>
      );
    }
}
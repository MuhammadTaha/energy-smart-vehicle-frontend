import * as React from 'react';
import { Table, Container, Row, Col, Input, Button, Form, CustomInput } from "reactstrap";

import DateTimePicker from 'react-datetime-picker';
import 'react-rangeslider/lib/index.css'

export default class RouteBased extends React.Component {

    constructor(props){
        super(props);
        
        // setting initial state for the the application
        this.state = {
            date: new Date(),
            energy: 10, 
            waiting: 10, 
            driving: 10,
            optimalTime: "",
            energyConsumed: "",
            energyPrice: "",
            drivingDuration: "",
            recRoute: "",
            waitingDuration: "",
            waitingCost: "",
            drivingCost: "",
          }
        
        // binding function to the component
        this.submitForm = this.submitForm.bind(this);
     
    }


  //  updating state on changing datetime
  onChange = date => this.setState({ date })

  submitForm(e){
    e.preventDefault();
    const data = new FormData(e.target);

    // setting header for CORS request
    const myHeaders = new Headers({
        "Access-Control-Allow-Origin": "*",
        'origin': '*'
      })
       
    // Request route based end point for sending and recieving results 
    fetch('http://127.0.0.1:5000/route-based', {
        headers: myHeaders,
        method: 'POST',
        body: JSON.stringify(Object.fromEntries(data)),
      })
      .then((response) => response.json())
      .then((data) => {
        
        // updating states with values
        this.setState({
          waitingCost:data['waitingCost'],
          drivingCost:data['drivingCost'],
          optimalTime: data['departureTIme'],
          energyConsumed: data['energyConsumed'],
          energyPrice: data['energyPrice'],
          drivingDuration: data['drivingTime'],
          recRoute: data['recommendedRoute'],
          waitingDuration:data['waitingTime'],
        });
      })
  }




  handleOnChange = (event) => {
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
      let min = 0, max = 10;
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
                                  <Col md={7}>

                                      <Table>
                                          <thead>
                                              <tr>
                                                <th></th>
                                                <th>Priority Range</th>
                                                <th>Value</th>
                                              </tr>
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
                                  <Col md={5}>
                                      <div>
                                          <img id="imgMap" alt="" src='/images/map.png'></img>
                                      </div>
                                  </Col>
                              </Row>
                              <Row>
                                <Col md={11} style={{marginTop:'1%'}}>
                                  <Button className="submitButton" type="submit" className="float-right">Submit</Button>
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
                          <h6 className="alignResultText">Optimal Time for Departure (HH:mm): <strong className="valueDisplay">{this.state.optimalTime}</strong></h6>
                          </Col>
                          <Col>
                          <h6 className="alignResultText">Recommended Route (City/Highway): <strong className="valueDisplay">{this.state.recRoute}</strong></h6>
                          </Col>
                      </Row>
                      <Row>
                        <Col>
                          <h6 className="alignResultText">Energy Consumed : <strong className="valueDisplay">{this.state.energyConsumed} kWh</strong><strong className="valueDisplay">{this.state.energyPrice} euro</strong></h6>
                          </Col>
                          <Col>
                          <h6 className="alignResultText">Waiting Duration : <strong className="valueDisplay">{this.state.waitingDuration} min</strong><strong className="valueDisplay">{this.state.waitingCost} euro</strong></h6>
                          </Col>
                      </Row>
                      <Row>
                        <Col>
                          <h6 className="alignResultText">Driving Duration: <strong className="valueDisplay">{this.state.drivingDuration} min</strong> <strong className="valueDisplay">{this.state.drivingCost} euro</strong></h6>
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
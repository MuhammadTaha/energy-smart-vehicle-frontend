import * as React from 'react';
import { Row, Col, Input, Container, Button, Table, Form, Strong } from 'reactstrap';

import DateTimePicker from 'react-datetime-picker';


export default class ChargingBased extends React.Component {


  constructor(props){
    super(props);

    // binding submit form function to the component
    this.submitForm = this.submitForm.bind(this);
 
  }

  // setting initial state for the the application
  state = {
    arrivalDate: new Date(),
    departureDate: new Date(),
    totalEnergy: 0,
    minChargingCost: 0,
    chargingDuration: 0,
    chargingPrices:[]
  }

  // datetime on change functions to set the state 
  onArrivalChange = arrivalDate => this.setState({ 
    arrivalDate
  });

  onDepartureChange = departureDate => this.setState({ 
    departureDate
  });


  componentDidMount(){

  }

  submitForm(e){
    e.preventDefault();
    const data = new FormData(e.target);

    // preparing header for the CORS request
    const myHeaders = new Headers({
        "Access-Control-Allow-Origin": "*",
        'origin': '*'
      })

    // Request charging based end point for sending and recieving results 
    fetch('http://127.0.0.1:5000/charging-based', {
        headers: myHeaders,
        method: 'POST',
        body: JSON.stringify(Object.fromEntries(data)),
      })
      .then((response) => response.json())
      .then((data) => {
        
        this.setState({
          totalEnergy: data['sumTransferedEnergy'],
          minChargingCost: data['minimumChargingCost'],
          chargingDuration: data['UsedChargingTime'],
          chargingPrices:data['ChargingPrices']
        });
      })

  }

  render() {

    let targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 7);
    let count = 0;
    let items = [];
    if(Object.keys(this.state.chargingPrices).length > 0 ){
    Object.keys(this.state.chargingPrices).map((arr) => {

      for (const v of this.state.chargingPrices[arr]) {
            count++;
            items.push(
            <tr>
              <td>{count}</td>
              <td>{arr}</td>
              <td>{v}</td>
            </tr>)
          }
        });
    }

    return (
        <Container>
    <Form onSubmit={this.submitForm}>
        <Row>
            <Col md={{ size: 10, offset: 1 }} className="topSpace">
                <h3>Charging Based</h3>
                <div className="divUserInputs topSpace">
                    <Row>
                        <Col md={{size:5}}>
                            <label>Charging Type</label>
                            <Input name="powerSelection" type="select">
                            <option value={3.3}>3.3 kW (Slow Charging AC)</option>
                            <option value={46}>46 kW (Fast Charging DC)</option>
                            </Input>
                        </Col>
                        <Col md={{size:5, offset: 1}}>
                            <label>Select a car:</label>
                            <Input name="carType" type="select">
                            <option>Nissan Leaf </option>
                            </Input>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={{size:5}} style={{marginLeft: "1.5%"}}>
                            <label>Arrival Time</label>
                            <DateTimePicker onChange={this.onArrivalChange} value={this.state.arrivalDate} maxDate={targetDate} minDate={new Date()} className="form-control" name="arrivalTime" />
                        </Col>
                        <Col md={{size:5, offset:1}}>
                            <label>Departure Time</label>
                            <DateTimePicker onChange={this.onDepartureChange} value={this.state.departureDate} maxDate={targetDate} minDate={new Date()} className="form-control" name="departureTime" />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={{size:5}}>
                            <label>Select a city:</label>
                            <Input name="city" type="select">
                            <option value="Berlin">Berlin </option>
                            </Input>
                        </Col>
                        <Col md={{size:3, offset: 1}}>
                            <label>Charging Status</label>
                            <Input className="chargingDropdowns" name="chargingStatus" type="select">
                            <option value={10}>10%</option>
                            <option value={20}>20%</option>
                            <option value={30}>30%</option>
                            <option value={40}>40%</option>
                            <option value={50}>50%</option>
                            <option value={60}>60%</option>
                            <option value={70}>70%</option>

                            </Input>
                        </Col>
                        <Col md={3} style={{marginLeft :"-5%"}}>
                            <label>Desired Charging Level</label>
                            <Input className="chargingDropdowns" name="chargingStatus" type="select">
                            <option value={40}>40%</option>
                            <option value={50}>50%</option>
                            <option value={60}>60%</option>
                            <option value={70}>70%</option>
                            <option value={80}>80%</option>
                            </Input>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={11} style={{marginTop: '1%'}}>
                            <Button className="submitButton" type="submit" className="float-right">Submit</Button>
                        </Col>
                    </Row>

                </div>
            </Col>
        </Row>

        <Row className="outputSection">
            <Col md={{ size: 10, offset: 1 }} style={{marginBottom: "4%"}}>
                <Row>
                    <Col>
                        <h5>Output</h5></Col>
                </Row>
                <div className="divUserInputs topSpace">
                  <Row>
                    <Col md={4}>
                      <label><strong>Total Energy Transferred(kWh)</strong></label>
                    </Col>
                    <Col md={4}>
                      <label><strong>Minimum Possible Charging Cost (Cents)</strong></label>
                    </Col>
                    <Col md={4}>
                      <label><strong>Total Charging Duration(hours)</strong></label>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={4}>
                      <label className="outputData"><strong>{this.state.totalEnergy} </strong></label>
                    </Col>
                    <Col md={4}>
                      <label className="outputData"><strong> {this.state.minChargingCost}</strong></label>
                    </Col>
                    <Col md={4}>
                      <label className="outputData"><strong>{this.state.chargingDuration}</strong></label>
                    </Col>
                  </Row>
                    <Row>
                        <Table className="outTable">
                            <thead>
                              <tr>
                                <th>Hour (h)</th>
                                <th>Amount Energy Transferred (kWh)</th>
                                <th>Cost of Energy (Cents)</th>
                              </tr>
                            </thead>
                            <tbody>
                              {items}
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

                    </Row>
                </div>

            </Col>
        </Row>
    </Form>
</Container>
      );
    }
}
import * as React from 'react';
import { Row, Col, Input, Container, Button, Table, Form } from 'reactstrap';

import DateTimePicker from 'react-datetime-picker';


export default class ChargingBased extends React.Component {

  state = {
    arrivalDate: new Date(),
    departureDate: new Date(),
  }

  onArrivalChange = arrivalDate => this.setState({ 
    arrivalDate
  })
  onDepartureChange = departureDate => this.setState({ 
    departureDate
  })

  submitForm(e){
    e.preventDefault();
    const data = new FormData(e.target);
    const myHeaders = new Headers({
        "Access-Control-Allow-Origin": "*",
        'origin': '*'
      })

    fetch('http://127.0.0.1:5000/charging-based', {
        headers: myHeaders,
        method: 'POST',
        body: JSON.stringify(Object.fromEntries(data)),
      }).then((response)=>{
       
            console.log(response.headers); // returns a Headers{} object
            // response.blob().then(function(myBlob) {
            //   var objectURL = URL.createObjectURL(myBlob);
            //   myImage.src = objectURL;
            // });
         
      })
  }

  render() {

    let targetDate = new Date();
      targetDate.setDate(targetDate.getDate() + 7);

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

        <Row>
            <Col md={{ size: 10, offset: 1 }} style={{marginBottom: "4%"}}>
                <Row>
                    <Col>
                        <h5>Output</h5></Col>
                </Row>
                <div className="divUserInputs topSpace">
                    <Row>
                        <Table>
                            <thead>
                              <tr>
                                <th>Hour</th>
                                <th>Amount Energy Transferred</th>
                                <th>Cost of Energy</th>
                              </tr>
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

                    </Row>
                </div>

            </Col>
        </Row>
    </Form>
</Container>
      );
    }
}
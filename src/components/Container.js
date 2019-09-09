import * as React from 'react';
import UserSelection from "./UserSelection";
import { Row, Col } from 'reactstrap';
export default class Container extends React.Component {
    render() {
      return <div className="container container-fluid">
        <Row>
          <Col md={{ size:6, offset:3}}>
           <h1 style={{textAlign:"center"}}>Energy Smart Vehicle</h1>
          </Col>
        </Row>
        <UserSelection/>
      </div>;
    }
}
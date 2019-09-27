import * as React from 'react';
import { Row, Col } from 'reactstrap';
import RouteBased  from "./RouteBased";
import { NavLink, BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import ChargingBased from './ChargingBased';

export default class Home extends React.Component {
  render() {
      return (
      <Router>
        <div className = "container container-fluid" style={{width:"81%"}}>
            <Row style={{backgroundColor : "white", padding:"1%"}}>
              <Col md={{size:6}}>
                <NavLink to="/route-based" style={{textAlign:"center"}} > Route Based </NavLink>
                <NavLink to="/charging-based" style={{textAlign:"center", marginLeft:"4%"}} > Charging Based </NavLink>

              </Col>
            </Row>
          </div>
        <Switch>
          <Route path="/route-based" exact component={RouteBased} />
          <Route path="/charging-based" exact component={ChargingBased} />
        </Switch>
        <Redirect to="/route-based" />

      </Router>
      );
    }
}


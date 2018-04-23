import React from "react";
import { Route, Link, Redirect } from "react-router-dom";
import { Grid, Row, Col, Glyphicon } from "react-bootstrap";
import { getUserFromToken } from "../../utils";
import { ColleaguesList, ColleagueDetails } from "../Colleagues";
import "./Home.css";

const Home = ({ location }) => {
  const user = location.state || getUserFromToken();
  console.log(user);
  return (
    <Grid className="home">
      <Row>
        <Col className="left" md={2}>
          <Row>
            <Col md={12}>
              <div className="profile">
                <img
                  className="img-responsive img-circle"
                  alt=""
                  src={`https://www.gravatar.com/avatar/${user.emailHash}`}
                />
                <span>{user.fullname}</span>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <ul className="menu">
                <li className="active">
                  <Link to="/home">
                    <Glyphicon glyph="thumbs-up" /> Colleagues
                  </Link>
                </li>
                <li>
                  <Link to="/settings">
                    <Glyphicon glyph="cog" /> Settings
                  </Link>
                </li>
                <li>
                  <Link to="/login" onClick={() => localStorage.clear()}>
                    <Glyphicon glyph="log-out" /> Logout
                  </Link>
                </li>
              </ul>
            </Col>
          </Row>
        </Col>
        <Col className="right" md={10}>
          <Route exact path="/home" component={ColleaguesList} />
          <Route path="/colleagues/:id" component={ColleagueDetails} />
          {!user.fullname && <Redirect to="/login" />}
        </Col>
      </Row>
    </Grid>
  );
};

export default Home;

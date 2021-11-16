import React from "react";
import {
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
  Button,
  Row,
  Col,
} from "react-bootstrap";
import blackLogo from "../../assets/Icon/blackLogo.png";
import { Link } from "react-router-dom";
import room1 from "../../assets/Image/room1.png";
import room2 from "../../assets/Image/room2.png";
import room3 from "../../assets/Image/room3.png";
import "./Details.css";

const Details = () => {
  return (
    <div>
      <Container>
        <Navbar expand="lg">
          <Container fluid>
            <Navbar.Brand href="#">
              <img src={blackLogo} alt="logo" />
            </Navbar.Brand>
            {/* <Navbar.Toggle aria-controls="navbarScroll" /> */}
            <Navbar.Collapse id="navbarScroll">
              <Form className="">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2 search-box"
                  aria-label="Search"
                />
              </Form>

              <div className="nav-link">
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: "100px" }}
                  navbarScroll
                >
                  <Nav.Link
                    href="#action1"
                    style={{ color: "black", marginRight: "50px" }}
                  >
                    News
                  </Nav.Link>
                  <Nav.Link
                    href="#action2"
                    style={{ color: "black", marginRight: "50px" }}
                  >
                    Destination
                  </Nav.Link>
                  <Nav.Link
                    href="#"
                    style={{ color: "black", marginRight: "50px" }}
                  >
                    Blog
                  </Nav.Link>
                  <Nav.Link
                    href="#"
                    style={{ color: "black", marginRight: "50px" }}
                  >
                    Contact
                  </Nav.Link>
                  <Link to="/login">
                    <button className="login-button">Login</button>
                  </Link>
                </Nav>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
      <main className="details-body">
        <Container>
          <Row>
            <Col md={6}>
              <Row className="room-row">
                <Col md={5}>
                  <img src={room1} alt="room1" className="room" />
                </Col>
                <Col md={7} className="room-row-col-7">
                  <h5>Light bright airy stylish apt & safe peaceful stay</h5>
                  <p>4 guests   2 bedrooms   2 beds   2 baths</p>
                  <p>Wif Air conditioning Kitchen</p>
                  <p>Cancellation fexibility availiable</p>
                </Col>
              </Row>
              <Row className="room-row">
                <Col md={5}>
                  <img src={room2} alt="room2" className="room" />
                </Col>
                <Col md={7} className="room-row-col-7">
                    <h5>Apartment in Lost Panorama</h5>
                    <p>4 guests   2 bedrooms   2 beds   2 baths</p>
                    <p>Wif Air conditioning Kitchen</p>
                    <p>Cancellation fexibility availiable</p>
                </Col>
              </Row>
              <Row className="room-row">
                <Col md={5}>
                  <img src={room3} alt="room3" className="room" />
                </Col>
                <Col md={7} className="room-row-col-7">
                    <h5>AR Lounge & Pool (r&r + b&b)</h5>
                    <p>4 guests   2 bedrooms   2 beds   2 baths</p>
                    <p>Wif Air conditioning Kitchen</p>
                    <p>Cancellation fexibility availiable</p>
                </Col>
              </Row>
            </Col>
            <Col md={6}>Half</Col>
          </Row>
        </Container>
      </main>
    </div>
  );
};

export default Details;

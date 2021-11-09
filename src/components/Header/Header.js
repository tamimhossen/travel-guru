import {
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
  Button,
} from "react-bootstrap";
// import Button from "@restart/ui/esm/Button";
import React from "react";
// import { Badge } from "react-bootstrap";
import styles from "./Header.css";
import logo from "../../assets/Icon/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="nav-container">
      <Container>
        <Navbar expand="lg">
          <Container fluid>
            <Navbar.Brand href="#">
              <img src={logo} alt="logo" />
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

              {/* <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Login</Button>
              </Form> */}
              <div className="nav-link">
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: "100px" }}
                  navbarScroll
                >
                  <Nav.Link
                    href="#action1"
                    style={{ color: "white", marginRight: "50px" }}
                  >
                    News
                  </Nav.Link>
                  <Nav.Link
                    href="#action2"
                    style={{ color: "white", marginRight: "50px" }}
                  >
                    Destination
                  </Nav.Link>
                  <Nav.Link
                    href="#"
                    style={{ color: "white", marginRight: "50px" }}
                  >
                    Blog
                  </Nav.Link>
                  <Nav.Link
                    href="#"
                    style={{ color: "white", marginRight: "50px" }}
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
    </div>
  );
};

export default Header;

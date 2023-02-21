import React from "react";
import Main from "./components/Main";
import { Navbar, Nav } from "react-bootstrap";
import "./styling/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, NavLink } from "react-router-dom";

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <div className="App">
          <Navbar
            className="topnav"
            collapseOnSelect
            expand="lg"
            bg="dark"
            variant="dark"
          >
            <Navbar.Brand as={NavLink} to="/">

              <div id="motto" className="brandName">
                MuscleMinds Gym
                <h1>Place for the Strong & Smart</h1>
              </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="collapsedNav">
              <Nav className="mr-auto" id="navElements">
                <Nav.Link as={NavLink} to="/workout" className="navBarElement blue-text">
                  Workout
                </Nav.Link>
                <Nav.Link as={NavLink} to="/nutrition" className="navBarElement blue-text">
                  Nutrition Plans
                </Nav.Link>
                <Nav.Link as={NavLink} to="/contact" className="navBarElement blue-text">
                  Contact Us
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <div className="page-content">
            <Main />
          </div>

          <div>
            <Navbar
              className="justify-content-md-center color-footer"
              sticky="bottom"
              expand="lg"
              variant="light"
            >
              <Navbar.Brand>
                <h6 className="text-muted">
                  &copy;{new Date().getFullYear()} Justin Lowell
                </h6>
              </Navbar.Brand>
            </Navbar>
          </div>
        </div>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
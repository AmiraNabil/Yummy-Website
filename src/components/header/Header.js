import React from "react";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
import Offcanvas from 'react-bootstrap/Offcanvas';
import './Header.css'

export default function AppHeader(){
    return(
      <>
        <header>
          {['xl'].map((expand) => (
            <Navbar key={expand} expand={expand} className="mb-3 header" fixed="top">
              <Container>
                <Navbar.Brand href="#" className="logo">Yummy<span>.</span></Navbar.Brand>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                <Navbar.Offcanvas
                  id={`offcanvasNavbar-expand-${expand}`}
                  aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                  placement="end"
                >
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    </Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <Nav className="pe-3 ms-auto">
                    <Nav.Link href="#hero">Home</Nav.Link>
                    <Nav.Link href="#about">About</Nav.Link>
                    <Nav.Link href="#menu">Menu</Nav.Link>
                    <Nav.Link href="#events">Events</Nav.Link>
                    <Nav.Link href="#chefs">Chefs</Nav.Link>
                    <Nav.Link href="#gallery">Gallery</Nav.Link>
                      <NavDropdown
                        title="Dropdown" href="#drop"
                        id={`offcanvasNavbarDropdown-expand-${expand}`}
                      >
                        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">
                          Another action
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action5">
                          Something else here
                        </NavDropdown.Item>
                      </NavDropdown>
                      <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                    <div href="" className="ms-auto book">
                        <a className="btn btn-primary" href="#">Book a Table</a>
                    </div>
                  </Offcanvas.Body>
                </Navbar.Offcanvas>
              </Container>
            </Navbar>
          ))}
        </header>
      </>
    )
}
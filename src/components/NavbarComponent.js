import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/navbar.css';
import logo from '../logo_stroked.png';
import logo2 from '../logo2.png';

function NavbarComponent() {
    return (
        <div>
            <Navbar className="CustomNav navbar-dark" expand="lg">
                <Container className="" > 
                    <Navbar.Brand className=" justify-content-start" href="#home"> <img src={logo}  alt="logo" className="logo-img"/> Vegas Kings Test</Navbar.Brand>
                    {/* Nav toggler right */}
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className="justify-content-end"/>
                    <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                    <Nav className="justify-content-end" >
                        <Nav.Item>
                            <Nav.Link href="/home">
                                <span>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="headset" className="svg-inline--fa fa-headset fa-w-16 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" color="var(--color-q4-navy--a50)"><path fill="currentColor" d="M192 208c0-17.67-14.33-32-32-32h-16c-35.35 0-64 28.65-64 64v48c0 35.35 28.65 64 64 64h16c17.67 0 32-14.33 32-32V208zm176 144c35.35 0 64-28.65 64-64v-48c0-35.35-28.65-64-64-64h-16c-17.67 0-32 14.33-32 32v112c0 17.67 14.33 32 32 32h16zM256 0C113.18 0 4.58 118.83 0 256v16c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-16c0-114.69 93.31-208 208-208s208 93.31 208 208h-.12c.08 2.43.12 165.72.12 165.72 0 23.35-18.93 42.28-42.28 42.28H320c0-26.51-21.49-48-48-48h-32c-26.51 0-48 21.49-48 48s21.49 48 48 48h181.72c49.86 0 90.28-40.42 90.28-90.28V256C507.42 118.83 398.82 0 256 0z"></path>
                                    </svg>
                                </span>
                                Support
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/home">
                                <span>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user-circle" className="svg-inline--fa fa-user-circle fa-w-16 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" color="var(--color-q4-navy--a50)"><path fill="currentColor" d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z"></path>
                                    </svg>
                                </span>
                                Account
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/home">
                                <span>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="sign-out-alt" className="svg-inline--fa fa-sign-out-alt fa-w-16 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" color="var(--color-q4-navy--a50)"><path fill="currentColor" d="M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z"></path>
                                    </svg>
                                </span>
                                Logout
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                    </Navbar.Collapse>
                    <Navbar.Brand className=" justify-content-end" href="#home"> <img src={logo2}  alt="logo" className="logo-img"/> </Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavbarComponent;

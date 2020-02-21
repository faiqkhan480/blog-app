import React, {Component} from "react";
import {Button, Container, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";

class Nav extends Component {
    handleClick() {
        localStorage.clear();
    }

    render() {
        return (
            <Container fluid className="shadow-sm mb-b sticky-top bg-white">
                <Navbar>
                    <Navbar.Brand href="/">Home</Navbar.Brand>
                    <Navbar.Collapse className="justify-content-end">
                        <NavLink to="/form" onClick={this.handleClick.bind(this)}>
                            Create New Post
                        </NavLink>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        );
    }
}

export default Nav
import React, {Component} from "react";
import {Container, Navbar} from "react-bootstrap";
import {Link, NavLink} from "react-router-dom";

class Nav extends Component {
    handleClick() {
        localStorage.clear();
    }

    render() {
        return (
            <Container fluid className="shadow-sm mb-b sticky-top bg-white">
                <Navbar>
                    <Link to='/'>
                        <Navbar.Brand>Home</Navbar.Brand>
                    </Link>
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
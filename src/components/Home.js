import React, {Component} from "react";
import {connect} from "react-redux";
import { getPosts } from "../actions/actions";
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import {BrowserRouter as Router, NavLink} from "react-router-dom";

class HomePage extends Component{
    componentDidMount() {
        this.props.dispatch(getPosts());
    }

    render() {
        const {posts} = this.props;
        return (
            <div>
                <Container className="App">
                    <Row>
                    {posts.map((post, i) => (
                        <Col key={i}>
                            <Card key={i} border="primary" style={{ width: '18rem' }} className="my-2">
                                <Card.Header>User: {post.userId}</Card.Header>
                                <Card.Body>
                                    <Card.Title>{post.title}</Card.Title>
                                    <NavLink to="/details" className="link btn btn-link">Details</NavLink>
                                </Card.Body>
                                <Card.Body>
                                    <Button variant="primary" className="m-3">Edit</Button>
                                    <Button variant="danger" className="m-3">Delete</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                    </Row>
                </Container>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.post
    }
};

export default connect(mapStateToProps)(HomePage)
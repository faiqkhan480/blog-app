import React, {Component} from "react";
import {connect} from "react-redux";
import {setDetails, getPosts} from "../actions/actions";
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import {NavLink} from "react-router-dom";

class HomePage extends Component{
    componentDidMount() {
        this.props.dispatch(getPosts());
    }

    getPostId(id) {
        localStorage.setItem('postId', id)
    }

    render() {
        const {posts} = this.props;
        return (
            <div>
                <Container className="App">
                    <Row>
                    {posts.map((post, i) => (
                        <Col key={i} lg={4} md={6} sm={12} xs={12}>
                            <Card key={i} border="primary"  className="my-2">
                                <Card.Header>User: {post.userId}</Card.Header>
                                <Card.Body>
                                    <Card.Title>{post.title}</Card.Title>
                                    <NavLink to="/details" onClick={this.getPostId.bind(this, post.id)} className="link btn btn-link">Details</NavLink>
                                    {/*<Button onClick={this.handleDetails.bind(this, post.id)}>Details</Button>*/}
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
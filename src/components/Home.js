import React, {Component} from "react";
import {connect} from "react-redux";
import {getPosts, deletePost} from "../actions/actions";
import {Button, Card, Col, Container, Row, Spinner} from "react-bootstrap";
import {NavLink} from "react-router-dom";

class HomePage extends Component{
    componentDidMount() {
        // console.log(this.props.stateKey, 'mount=-=-')
        // console.log(this.props.posts, 'mount=-=-')
        if (this.props.stateKey) {
            this.props.dispatch(getPosts());
        }
        // console.log(this.props.posts, 'mount=-=-')
    }

    setPostId(id) {
        localStorage.setItem('postId', id);
        this.props.history.push('/form')
    }

    handleDelete(id) {
        this.props.dispatch(deletePost(id));
    }

    render() {
        const {posts, loading} = this.props;
        return (
            <div>
                <Container>
                    {loading ?
                        <Container className="App-Loading">
                            <Spinner animation="border" variant="primary" style={{width: '9rem', height: '9rem'}}/>
                        </Container>
                        :
                        <Row>
                            {posts.map((post, i) => (
                                <Col key={i} lg={4} md={6} sm={12} xs={12}>
                                    <Card key={i} border="primary"  className="my-2">
                                        <Card.Body>
                                            <Card.Title>{post.title}</Card.Title>
                                            <Card.Text>{post.body}</Card.Text>
                                            <NavLink to="/details" onClick={this.setPostId.bind(this, post.id)} className="link btn btn-link">Details</NavLink>
                                            {/*<Button onClick={this.handleDetails.bind(this, post.id)}>Details</Button>*/}
                                        </Card.Body>

                                        <Card.Footer>
                                            <Button onClick={this.setPostId.bind(this, post.id)} variant="primary" className="button m-3 w-25">Edit</Button>
                                            <Button variant="danger" onClick={this.handleDelete.bind(this, post.id)} className="ml-3 w-25">Delete</Button>
                                        </Card.Footer>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    }
                </Container>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.data,
        loading: state.loading,
        stateKey: state.key,
    }
};

export default connect(mapStateToProps)(HomePage)
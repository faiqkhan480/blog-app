import React, {Component} from "react";
import {connect} from "react-redux";
import {getDetail} from "../actions/actions";
import {Button, Card, Container, Spinner} from "react-bootstrap";

class Details extends Component {
    componentDidMount() {
        const id = localStorage.getItem('postId');
        this.props.dispatch(getDetail(id));
    }

    render() {
        const {post, loading} = this.props;
        console.log(loading, 'loading')
        return (
            <Container className="text-center my-5">
                {loading ?
                    <Container className="App-Loading">
                        <Spinner animation="border" variant="primary" style={{width: '9rem', height: '9rem'}}/>
                    </Container>
                    :
                    <Card border="info">
                        <Card.Body>
                            <Card.Title>{post.title}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">User: {post.userId}</Card.Subtitle>
                            <Card.Text>
                                {post.body}
                            </Card.Text>
                            <Button variant="outline-primary" color="danger" className="mx-3">Edit</Button>
                            <Button variant="outline-danger" className="mx-3">Delete</Button>
                        </Card.Body>
                    </Card>
                }
            </Container>
        );
    }

}
const mapStateToProps = (state) => {
    return {
        post: state.details,
        loading: state.key,
    }
}

export default connect(mapStateToProps)(Details)
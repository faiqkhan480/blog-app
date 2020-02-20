import React, {Component} from "react";
import {connect} from "react-redux";
import {getDetails} from "../actions/actions";
import {Button, Card, Container} from "react-bootstrap";

class Details extends Component {
    componentDidMount() {
        const id = localStorage.getItem('postId');
        this.props.dispatch(getDetails(id));
    }

    render() {
        const {post} = this.props;
        return (
            <Container className="text-center my-5">
                {post?
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
                    :
                    <h3>Waiting....</h3>
                }
            </Container>
        );
    }

}
const mapStateToProps = (state) => {
    return {
        post: state.details
    }
}

export default connect(mapStateToProps)(Details)
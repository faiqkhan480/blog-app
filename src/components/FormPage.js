import React, {Component} from "react";
import {connect} from "react-redux";
import {createPost, getDetail, updatePost} from "../actions/actions";
import {Button, Container, Form, Spinner} from "react-bootstrap";

class FormPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: localStorage.getItem('postId'),
            userId: '',
            title: '',
            body: '',
        };
        console.log('constructor runs')
    }
    async componentDidMount() {
        if(this.state.id) {
            await this.props.dispatch(getDetail(this.state.id));
            console.log(this.props, 'componetDidMount')
            this.setState({userId: this.props.post.userId, title: this.props.post.title, body: this.props.post.body})
        }
    }

    handleChange(e) {
        this.setState({[e.target.name] : e.target.value});
    }

    handleUpdate(event) {
        event.preventDefault();
        const {history} = this.props;
        const article = {
            userId: this.state.userId,
            title: this.state.title,
            body: this.state.body,
        };
         this.props.dispatch(updatePost(this.state.id, article, history));
    }

    handleSubmit(event) {
        event.preventDefault();
        const {history} = this.props;
        const post = {
            title: this.state.title,
            body: this.state.body,
        };
        this.props.dispatch(createPost(post, history));
    }

    render() {
        const {loading} = this.props;
        const {id, userId, title, body} = this.state;
        return (
            <Container className="text-center my-5">
                {loading ?
                    <Container className="App-Loading">
                        <Spinner animation="border" variant="primary" style={{width: '9rem', height: '9rem'}}/>
                    </Container>
                    :
                    <Form onSubmit={id ? this.handleUpdate.bind(this) : this.handleSubmit.bind(this)}>
                        {id ?
                            <Form.Group>
                                <Form.Label>User Id</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="userId"
                                    value={userId}
                                    onChange={this.handleChange.bind(this)}
                                    placeholder="User Id" />
                            </Form.Group>
                            : ''
                        }

                        <Form.Group>
                            <Form.Label>Post Title</Form.Label>
                            <Form.Control
                                type="text"
                                name="title"
                                value={title}
                                onChange={this.handleChange.bind(this)}
                                placeholder="Title" />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Post</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows="5"
                                name="body"
                                value={body}
                                onChange={this.handleChange.bind(this)}
                                placeholder="Post" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            {id ? "Update" : "Submit"}
                        </Button>
                    </Form>
                }
            </Container>
        );
    }

}
const mapStateToProps = ({details, loading}) => {
    return {
        post: details,
        loading: loading,
    }
}

export default connect(mapStateToProps)(FormPage)
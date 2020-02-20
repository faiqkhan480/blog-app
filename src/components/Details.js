import React, {Component} from "react";
import {connect} from "react-redux";
import {postsDetails} from "../actions/actions";
import {Container} from "react-bootstrap";

class Details extends Component {
    componentDidMount() {
        this.props.dispatch(postsDetails())

    }

    render() {
        return (
            <Container>
                <h1>Details Page</h1>
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
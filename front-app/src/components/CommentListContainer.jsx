import React, { Component } from "react";
import { commentListFetch, commentListUnload } from "../actions/actions";
import { connect } from "react-redux";
import Spinner from "./Spinner";
import CommentList from "./CommentList.jsx";
import CommentForm from "./CommentForm.jsx";

const mapStateToProps = (state) => ({
  ...state.CommentList,
  isAuthenticated: state.Auth.isAuthenticated,
});

const mapDispatchToProps = {
  commentListFetch,
  commentListUnload,
};

class CommentListContainer extends Component {
  componentDidMount() {
    this.props.commentListFetch(this.props.blogPostId);
  }
  componentWillUnmount() {
    this.props.commentListUnload();
  }
  render() {
    const { fetching, commentList, isAuthenticated, blogPostId } = this.props;

    if (fetching) {
      return <Spinner></Spinner>;
    }
    return (
      <div>
        <CommentList commentList={commentList}></CommentList>
        {isAuthenticated && <CommentForm blogPostId={blogPostId} />}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentListContainer);

import React, { Component } from "react";
import { blogPostFetch, blogPostUnload } from "../actions/actions";
import { connect } from "react-redux";
import BlogPost from "./BlogPost.jsx";
import CommentListContainer from "./CommentListContainer.jsx";
import Spinner from "./Spinner";

const mapStateToProps = (state) => ({
  ...state.BlogPost,
});

const mapDispatchToProps = {
  blogPostFetch,
  blogPostUnload,
};

class BlogPostContainer extends Component {
  componentDidMount() {
    this.props.blogPostFetch(this.props.match.params.id);
  }
  componentWillUnmount() {
    this.props.blogPostUnload();
  }
  render() {
    const { fetching, post } = this.props;

    if (fetching) {
      return <Spinner></Spinner>;
    }
    return (
      <div>
        <BlogPost fetching={fetching} post={post} />
        {post && (
          <CommentListContainer blogPostId={this.props.match.params.id} />
        )}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogPostContainer);

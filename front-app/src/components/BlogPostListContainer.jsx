import React, { Component } from "react";
import { connect } from "react-redux";
import { blogPostListFetch } from "../actions/actions.js";
import BlogPostList from "./BlogPostList.jsx";

const mapStateToProps = (state) => ({
  ...state.BlogPostList,
});

const mapDispatchToProps = {
  blogPostListFetch,
};

class BlogPostListContainer extends Component {
  componentDidMount() {
    this.props.blogPostListFetch();
  }
  render() {
    const { posts, fetching } = this.props;
    return <BlogPostList posts={posts} fetching={fetching} />;
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BlogPostListContainer);

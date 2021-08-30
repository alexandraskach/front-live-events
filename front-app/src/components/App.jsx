import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import LoginForm from "./LoginForm.jsx";
import BlogPostListContainer from "./BlogPostListContainer.jsx";
import Header from "./Header.jsx";
import BlogPostContainer from "./BlogPostContainer.jsx";
import { requests } from "../agent";
import { connect } from "react-redux";
import { userProfileFetch, userSetId, userLogout } from "../actions/actions.js";
import RegistrationForm from "./RegistrationForm.jsx";

const mapStateToProps = (state) => ({
  ...state.Auth,
});

const mapDispatchToProps = {
  userProfileFetch,
  userSetId,
  userLogout,
};

class App extends Component {
  constructor(props) {
    super(props);
    const token = window.localStorage.getItem("jwtToken");

    if (token) {
      requests.setToken(token);
    }
  }

  componentDidMount() {
    const userId = window.localStorage.getItem("userId");
    const { userSetId } = this.props;

    if (userId) {
      userSetId(userId);
    }
  }
  componentDidUpdate(prevProps) {
    const { userId, userProfileFetch, userData } = this.props;
    if (prevProps.userId !== userId && userId !== null && userData === null) {
      userProfileFetch(userId);
    }
  }
  render() {
    const { isAuthenticated, userData, userLogout } = this.props;
    console.log("props", this.props);
    return (
      <div>
        <Header
          isAuthenticated={isAuthenticated}
          userData={userData}
          logout={userLogout}
        ></Header>
        <Switch>
          <Route path="/connexion" component={LoginForm} />
          <Route path="/actualites/:id" component={BlogPostContainer} />
          <Route path="/register" component={RegistrationForm} />
          <Route path="/" component={BlogPostListContainer} />
        </Switch>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
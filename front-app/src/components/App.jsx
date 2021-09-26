import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import LoginForm from "./LoginForm.jsx";
import BlogPostListContainer from "./BlogPostListContainer.jsx";
import Header from "./Header.jsx";
import BlogPostContainer from "./BlogPostContainer.jsx";
import { requests } from "../agent";
import { connect } from "react-redux";
import { userProfileFetch, userSetId, userLogout } from "../actions/actions.js";
import RegistrationContainer from "./RegistrationContainer.jsx";
import BlogPostForm from "./BlogPostForm.jsx";
import Footer from "./Footer.jsx";
import Faq from "./Faq.jsx";
import ConcertListContainer from "./ConcertListContainer.jsx";
import ConcertContainer from "./ConcertContainer.jsx";
import Home from "./Home.jsx";
import ConcertForm from "./ConcertForm.jsx";
import PrivacyPolicy from "./PrivacyPolicy.jsx";
import Partners from "./Partners.jsx";

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
          <Route path="/actualites-form" component={BlogPostForm} />
          <Route path="/actualites/:id" component={BlogPostContainer} />
          <Route path="/register" component={RegistrationContainer} />
          <Route path="/concerts-form" component={ConcertForm} />
          <Route path="/partenaires" component={Partners} />
          <Route path="/concerts/:id" component={ConcertContainer} />
          <Route path="/concerts" component={ConcertListContainer} />
          <Route path="/faq" component={Faq} />
          <Route
            path="/politique-de-confidentialite"
            component={PrivacyPolicy}
          />
          <Route path="/actualites" component={BlogPostListContainer} />
          <Route path="/" component={Home} />
        </Switch>
        <Footer></Footer>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

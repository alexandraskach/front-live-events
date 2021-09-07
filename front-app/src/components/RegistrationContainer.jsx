import React, { Component } from "react";
import { connect } from "react-redux";
import RegistrationForm from "./RegistrationForm.jsx";
import ConfirmationForm from "./ConfirmationForm.jsx";
import { Container } from "react-bootstrap";
import { userRegisterComplete } from "../actions/actions";

const mapStateToProps = (state) => ({
  ...state.Registration,
});

const mapDispatchToProps = {
  userRegisterComplete,
};

class RegistrationContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 10 };
  }

  componentDidUpdate(prevProps, prevState) {
    const { confirmationSuccess, history, userRegisterComplete } = this.props;

    if (
      prevProps.confirmationSuccess !== confirmationSuccess &&
      confirmationSuccess
    ) {
      this.timer = setInterval(() => {
        console.log(this.state.counter);
        this.setState((prevState) => ({ counter: prevState.counter - 1 }));
      }, 1000);
    }
    if (prevState.counter !== this.state.counter && this.state.counter <= 0) {
      userRegisterComplete();
      history.push("/");
    }
  }

  componentWillUnmount() {
    this.props.userRegisterComplete();

    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  render() {
    const { registrationSuccess, confirmationSuccess } = this.props;
    console.log("conf", confirmationSuccess);
    if (!registrationSuccess) {
      return <RegistrationForm></RegistrationForm>;
    }
    if (!confirmationSuccess) {
      return <ConfirmationForm></ConfirmationForm>;
    }

    return (
      <Container>
        <h4>
          Vous avez confirmé votre compte. Vous serez rédirigé vers la page
          d'accueil dans {this.state.counter} secondes.
        </h4>
      </Container>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegistrationContainer);

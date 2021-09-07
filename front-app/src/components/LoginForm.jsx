import React, { Component } from "react";
import RenderField from "../form";
import { Formik } from "formik";
import { Button, Container, Alert } from "react-bootstrap";
import { connect } from "react-redux";
import { userLoginAttempt } from "../actions/actions";
import * as Yup from "yup";
import "../index.css";

const mapStateToProps = (state) => ({
  ...state.Auth,
});

const mapDispatchToProps = {
  userLoginAttempt,
};

class LoginForm extends Component {
  componentDidUpdate(prevProps) {
    if (prevProps.token !== this.props.token) {
      console.log(prevProps);
      console.log(this.props);
      this.props.history.push("/");
    }
  }
  render() {
    return (
      <Container>
        <h3 className="mb-3">Connexion</h3>
        <Formik
          initialValues={{ username: "", password: "" }}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            console.log("form data", values);
            setSubmitting = "false";
            resetForm();
            return this.props.userLoginAttempt(
              values.username,
              values.password
            );
          }}
          validationSchema={Yup.object({
            username: Yup.string().required(
              <Alert variant="danger" className="mt-2">
                Nom d'utilisateur requis
              </Alert>
            ),
            password: Yup.string().required(
              <Alert variant="danger" className="mt-2">
                Mot de passe requis
              </Alert>
            ),
          })}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit}>
              <RenderField
                label="Nom d'utilisateur"
                type="text"
                name="username"
              ></RenderField>
              <RenderField
                label="Mot de passe"
                type="password"
                name="password"
              ></RenderField>
              <Button
                className="button-colored"
                variant="primary"
                type="submit"
                disabled={isSubmitting}
              >
                Envoyer
              </Button>
            </form>
          )}
        </Formik>
      </Container>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);

import React, { Component } from "react";
import RenderField from "../form";
import { Formik } from "formik";
import { Button, Container, Alert, Form } from "react-bootstrap";
import { connect } from "react-redux";
import { userLoginAttempt } from "../actions/actions";
import * as Yup from "yup";

const mapStateToProps = (state) => ({
  ...state.Auth,
});

const mapDispatchToProps = {
  userLoginAttempt,
};

class RegistrationForm extends Component {
  render() {
    return (
      <Container>
        <h3 className="mb-3">Création de compte</h3>
        <Formik
          initialValues={{
            username: "",
            password: "",
            retypedPassword: "",
            name: "",
            mail: "",
          }}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            console.log("form data", values);
            setSubmitting = "false";
            resetForm();
            // return this.props.userLoginAttempt(
            //   values.username,
            //   values.password
            // );
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
              <RenderField label="Prénom" type="text" name="name"></RenderField>
              <RenderField
                label="Nom d'utilisateur (exemple: adrien12)"
                type="text"
                name="username"
              ></RenderField>
              <RenderField
                label="Mot de passe"
                type="password"
                name="password"
              ></RenderField>
              <RenderField
                label="Répéter le mot de passe"
                type="password"
                name="retypedPassword"
              ></RenderField>
              <RenderField
                label="E-mail"
                type="email"
                name="email"
              ></RenderField>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  label="J'ai lu et j'accepte la politique de confidentialité."
                />
              </Form.Group>
              <Button variant="primary" type="submit" disabled={isSubmitting}>
                Envoyer
              </Button>
            </form>
          )}
        </Formik>
      </Container>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);

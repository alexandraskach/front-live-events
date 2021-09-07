import React, { Component } from "react";
import RenderField from "../form";
import { Formik } from "formik";
import { Button, Container, Alert, Form } from "react-bootstrap";
import { connect } from "react-redux";
import { userRegister } from "../actions/actions";
import * as Yup from "yup";
import "../index.css";

const mapDispatchToProps = {
  userRegister,
};

class RegistrationForm extends Component {
  render() {
    const lowerCaseRegex = /(?=.*[a-z])/;
    const upperCaseRegex = /(?=.*[A-Z])/;
    const numericRegex = /(?=.*[0-9])/;
    return (
      <Container>
        <h3 className="mb-3">Création de compte</h3>
        <Formik
          initialValues={{
            name: "",
            username: "",
            password: "",
            retypedPassword: "",
            mail: "",
          }}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            console.log("form data", values);
            setSubmitting = "false";
            return this.props
              .userRegister(
                values.name,
                values.username,
                values.password,
                values.retypedPassword,
                values.mail
              )
              .then(() => {
                resetForm();
              });
          }}
          validationSchema={Yup.object({
            name: Yup.string()
              .required(
                <Alert variant="danger" className="mt-2">
                  Prénom requis
                </Alert>
              )
              .min(
                3,
                <Alert variant="danger" className="mt-2">
                  Prénom est trop court. Il doit avoir au moins 3 caractères
                </Alert>
              ),
            username: Yup.string()
              .required(
                <Alert variant="danger" className="mt-2">
                  Nom d'utilisateur requis
                </Alert>
              )
              .min(
                6,
                <Alert variant="danger" className="mt-2">
                  Nom d'utilisateur est trop court. Il doit avoir au moins 6
                  caractères
                </Alert>
              ),
            password: Yup.string()
              .required(
                <Alert variant="danger" className="mt-2">
                  Mot de passe requis
                </Alert>
              )
              .min(
                7,
                <Alert variant="danger" className="mt-2">
                  Le mot de passe doit comporter au moins 7 lettres
                </Alert>
              )
              .matches(
                lowerCaseRegex,
                "Le mot de passe doit comporter au moins 1 minuscule"
              )
              .matches(
                upperCaseRegex,
                "Le mot de passe doit comporter au moins 1 majuscule"
              )
              .matches(
                numericRegex,
                "Le mot de passe doit comporter au moins 1 chiffre"
              ),
            retypedPassword: Yup.string()
              .required(
                <Alert variant="danger" className="mt-2">
                  Veuillez répéter le mot de passe
                </Alert>
              )
              .oneOf(
                [Yup.ref("password")],
                <Alert variant="danger" className="mt-2">
                  Le mot de passe ne correspond pas
                </Alert>
              ),
            mail: Yup.string().required(
              <Alert variant="danger" className="mt-2">
                Email requis
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
                name="mail"
              ></RenderField>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  label="J'ai lu et j'accepte la politique de confidentialité."
                  required
                />
              </Form.Group>
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

export default connect(null, mapDispatchToProps)(RegistrationForm);

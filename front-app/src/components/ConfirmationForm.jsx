import React, { Component } from "react";
import RenderField from "../form";
import { Formik } from "formik";
import { Button, Container, Alert } from "react-bootstrap";
import { connect } from "react-redux";
import { userConfirm } from "../actions/actions";
import * as Yup from "yup";

const mapDispatchToProps = {
  userConfirm,
};

class ConfirmationForm extends Component {
  render() {
    return (
      <Container>
        <h3 className="mb-3">
          Merci de confirmer votre compte avec le code que vous avez reçu par
          mail
        </h3>
        <Formik
          initialValues={{
            confirmationToken: "",
          }}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            console.log("form data", values);
            setSubmitting = "false";
            return this.props.userConfirm(values.confirmationToken).then(() => {
              resetForm();
            });
          }}
          validationSchema={Yup.object({
            confirmationToken: Yup.string().required(
              <Alert variant="danger" className="mt-2">
                Code requis
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
                label="Veuillez entrer le code de confirmation : "
                type="text"
                name="confirmationToken"
              ></RenderField>
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

export default connect(null, mapDispatchToProps)(ConfirmationForm);

import React, { Component } from "react";
import RenderField from "../form";
import { Formik } from "formik";
import { Button, Container, Alert, Card } from "react-bootstrap";
import * as Yup from "yup";
import { connect } from "react-redux";
import { commentAdd } from "../actions/actions";

const mapDispatchToProps = {
  commentAdd,
};

class CommentForm extends Component {
  render() {
    return (
      <Container>
        <Card className="mt-4">
          <Card.Body>
            <Formik
              initialValues={{ content: "", actualite: "" }}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                const { commentAdd, blogPostId } = this.props;
                values.actualite = blogPostId;
                console.log("form data", values);
                setSubmitting = "false";
                resetForm();
                console.log(values.actualite);
                return commentAdd(values.content, values.actualite);
              }}
              validationSchema={Yup.object({
                content: Yup.string()
                  .required(
                    <Alert variant="danger" className="mt-3">
                      Veuillez écrire un commentaire
                    </Alert>
                  )
                  .min(
                    5,
                    <Alert variant="danger" className="mt-3">
                      Ce commentaire est très court
                    </Alert>
                  )
                  .max(
                    255,
                    <Alert variant="danger" className="mt-3">
                      Ce commentaire est très long
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
                    label="Ecrire un commentaire"
                    type="textarea"
                    name="content"
                  ></RenderField>
                  <Button
                    variant="primary"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Ajouter le commentaire
                  </Button>
                </form>
              )}
            </Formik>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

export default connect(null, mapDispatchToProps)(CommentForm);

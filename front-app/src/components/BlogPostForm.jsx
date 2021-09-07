import React, { Component } from "react";
import RenderField from "../form";
import { Formik } from "formik";
import { Button, Container, Alert } from "react-bootstrap";
import { connect } from "react-redux";
import {
  blogPostAdd,
  blogPostFormUnload,
  imageDelete,
} from "../actions/actions";
import * as Yup from "yup";
import ImageUpload from "./ImageUpload.jsx";
import ImagePreview from "./ImagePreview";

const mapStateToProps = (state) => ({
  userData: state.Auth.userData,
  ...state.BlogPostForm,
});

const mapDispatchToProps = {
  blogPostAdd,
  blogPostFormUnload,
  imageDelete,
};

class BlogPostForm extends Component {
  componentWillUnmount() {
    this.props.blogPostFormUnload();
  }
  render() {
    const { images, imageDelete, imageReqInProgress } = this.props;
    return (
      <Container>
        <h3 className="mb-3">Création de nouveau post</h3>
        <Formik
          initialValues={{ title: "", content: "" }}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            console.log("form data", values);
            setSubmitting = "false";
            return this.props
              .blogPostAdd(values.title, values.content, images)
              .then(() => {
                resetForm();
                this.history.push("/actualites");
              });
          }}
          validationSchema={Yup.object({
            title: Yup.string()
              .required(
                <Alert variant="danger" className="mt-2">
                  Titre requis
                </Alert>
              )
              .min(
                10,
                <Alert variant="danger" className="mt-2">
                  Titre est trop court. Il doit avoir au moins 10 caractères
                </Alert>
              ),
            content: Yup.string()
              .required(
                <Alert variant="danger" className="mt-2">
                  Contenu requis
                </Alert>
              )
              .min(
                20,
                <Alert variant="danger" className="mt-2">
                  Contenu est trop court. Il doit avoir au moins 20 caractères
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
              <RenderField label="Titre" type="text" name="title"></RenderField>
              <RenderField
                label="Contenu"
                type="textarea"
                name="content"
              ></RenderField>
              <ImageUpload />
              <ImagePreview
                images={images}
                deleteHandler={imageDelete}
                isLocked={imageReqInProgress}
              />
              <Button
                variant="primary"
                type="submit"
                disabled={isSubmitting || imageReqInProgress}
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

export default connect(mapStateToProps, mapDispatchToProps)(BlogPostForm);

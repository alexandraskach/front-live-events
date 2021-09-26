import React, { Component } from "react";
import RenderField from "../renderField.js";
import { Formik } from "formik";
import { Button, Container, Alert } from "react-bootstrap";
import { connect } from "react-redux";
import { concertAdd, concertFormUnload, imageDelete } from "../actions/actions";
import * as Yup from "yup";
import ImageUpload from "./ImageUpload.jsx";
import ImagePreview from "./ImagePreview";
import DateField from "../dateField.js";

const mapStateToProps = (state) => ({
  userData: state.Auth.userData,
  ...state.ConcertForm,
});

const mapDispatchToProps = {
  concertAdd,
  concertFormUnload,
  imageDelete,
};

class ConcertForm extends Component {
  componentWillUnmount() {
    this.props.concertFormUnload();
  }
  render() {
    const { images, imageDelete, imageReqInProgress } = this.props;
    return (
      <Container>
        <h3 className="mb-3">Création de nouveau concert</h3>
        <Formik
          initialValues={{
            artiste: "",
            style: "",
            date: "",
            scene: "",
          }}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            console.log("typeof date", typeof values.date);
            console.log("form data", values);
            setSubmitting = "false";
            return this.props
              .concertAdd(
                values.artiste,
                values.style,
                values.date,
                values.scene,
                images
              )
              .then(() => {
                console.log("date", values.date);
                resetForm();
              });
          }}
          validationSchema={Yup.object({
            artiste: Yup.string()
              .required(
                <Alert variant="danger" className="mt-2">
                  Titre requis
                </Alert>
              )
              .max(
                20,
                <Alert variant="danger" className="mt-2">
                  Titre est trop long. Il doit avoir au moins 10 caractères
                </Alert>
              ),
            style: Yup.string()
              .required(
                <Alert variant="danger" className="mt-2">
                  Style requis
                </Alert>
              )
              .max(
                20,
                <Alert variant="danger" className="mt-2">
                  Style est trop long. Il doit avoir au moins 20 caractères
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
            handleReset,
            setFieldValue,
          }) => (
            <form onSubmit={handleSubmit}>
              <RenderField
                label="Artiste"
                type="text"
                name="artiste"
              ></RenderField>
              <RenderField label="Style" type="text" name="style"></RenderField>
              <RenderField
                label="Scène"
                type="number"
                name="scene"
              ></RenderField>
              <DateField label="Date" type="date" name="date"></DateField>
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

export default connect(mapStateToProps, mapDispatchToProps)(ConcertForm);

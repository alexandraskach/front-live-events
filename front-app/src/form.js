import { useField, ErrorMessage } from "formik";
import React from "react";
import { Form, FormControl } from "react-bootstrap";

function RenderField({ label, ...props }) {
  const [field] = useField(props);
  return (
    <div>
      <Form.Group className="mb-3">
        <Form.Label htmlFor={field.name}>{label}</Form.Label>
        <FormControl {...field} {...props} autoComplete="off" />
        <ErrorMessage name={field.name}></ErrorMessage>
      </Form.Group>
    </div>
  );
}

export default RenderField;

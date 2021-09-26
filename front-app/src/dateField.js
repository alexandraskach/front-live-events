import { useField, ErrorMessage, useFormikContext } from "formik";
import React from "react";
import { Form } from "react-bootstrap";
import "./index.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function DateField({ label, ...props }) {
  const { setFieldValue } = useFormikContext();
  const [field] = useField(props);
  return (
    <div>
      <Form.Label htmlFor={field.name}>{label}</Form.Label>
      <DatePicker
        {...field}
        {...props}
        selected={(field.value && new Date(field.value)) || null}
        onChange={(val) => {
          setFieldValue(field.name, val);
        }}
        showTimeSelect
        dateFormat="MM/dd/yyyy HH:mm:ss"
      />
      <ErrorMessage name={field.name}></ErrorMessage>
    </div>
  );
}

export default DateField;

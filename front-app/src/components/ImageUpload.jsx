import React, { Component } from "react";
import { FormControl, Form } from "react-bootstrap";
import { connect } from "react-redux";
import { imageUpload } from "../actions/actions";

const mapDispatchToProps = {
  imageUpload,
};

class ImageUpload extends Component {
  onChange(e) {
    console.log(e.target.files[0]);
    const file = e.target.files[0];
    this.props.imageUpload(file);
  }
  render() {
    return (
      <div className="mt-2 mb-2">
        <Form.Label>Image</Form.Label>
        <FormControl
          style={{ width: "25rem" }}
          type="file"
          onChange={this.onChange.bind(this)}
        ></FormControl>
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(ImageUpload);

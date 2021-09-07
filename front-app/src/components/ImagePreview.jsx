import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";

class ImagePreview extends Component {
  render() {
    const { images, deleteHandler, isLocked } = this.props;
    return (
      <div>
        {images.map((image) => {
          const onImageDeleteClick = (event) => {
            event.preventDefault();
            deleteHandler(image.id);
          };
          return (
            <div className="col-md-6 col-md-4" key={image.id}>
              <div className="mt-2 mb-2">
                <img
                  alt="Blog post"
                  src={`http://localhost:8000${image.url}`}
                  className="img-fluid"
                />
              </div>
              <Button
                className="mb-2"
                variant="outline-danger"
                onClick={onImageDeleteClick}
                disabled={isLocked}
              >
                Supprimer
              </Button>
            </div>
          );
        })}
      </div>
    );
  }
}

export default connect(null, null)(ImagePreview);

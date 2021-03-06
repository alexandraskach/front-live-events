import React from "react";
import { Card } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import timeago from "timeago.js";
import Spinner from "./Spinner";

function BlogPost(props) {
  const { post, fetching } = props;

  if (fetching) {
    return <Spinner></Spinner>;
  }

  if (null === post) {
    return <div>L'article n'existe pas</div>;
  }

  return (
    <div>
      <Container>
        <Row>
          <Card style={{ width: "40rem" }}>
            <Card.Img
              variant="top"
              src={`http://localhost:8000${post.images[0].url}`}
            />
            <Card.Body>
              <Card.Title>{post.title}</Card.Title>
              <Card.Text>{post.content}</Card.Text>
              <Card.Text>
                {timeago().format(post.date)} par {post.author.name}
              </Card.Text>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </div>
  );
}

export default BlogPost;

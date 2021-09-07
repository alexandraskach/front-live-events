import React from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import timeago from "timeago.js";
import Spinner from "./Spinner";
import "../index.css";

function BlogPostList(props) {
  const { posts, fetching } = props;

  if (fetching) {
    return <Spinner></Spinner>;
  }

  if (null === posts || 0 === posts.length) {
    return <div>Les actualités n'existent pas</div>;
  }

  return (
    <div>
      <Container>
        <Row>
          {posts &&
            posts.map((post) => (
              <Card
                key={post.id}
                style={{ width: "18rem" }}
                className="p-2 m-2"
              >
                <Card.Body>
                  <Card.Title>{post.title}</Card.Title>
                  <Card.Text>{post.content}</Card.Text>
                  <Card.Text>{timeago().format(post.date)}</Card.Text>
                  <Button
                    className="button-colored"
                    href={`/actualites/${post.id}`}
                    variant="primary"
                  >
                    Lire plus
                  </Button>
                </Card.Body>
              </Card>
            ))}
        </Row>
      </Container>
    </div>
  );
}

export default BlogPostList;

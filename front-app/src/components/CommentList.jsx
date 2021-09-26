import React from "react";
import { Card } from "react-bootstrap";
import { Container } from "react-bootstrap";
import timeago from "timeago.js";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./CommentList.css";

function CommentList(props) {
  const { commentList } = props;

  if (null === commentList || 0 === commentList.length) {
    return (
      <Container className="mt-4">Aucun commentaire pour le moment</Container>
    );
  }
  console.log(commentList);
  return (
    <Container className="mt-3">
      <TransitionGroup>
        {commentList.map((comment) => {
          return (
            <CSSTransition key={comment.id} timeout={500} classNames="fade">
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Text>{comment.content}</Card.Text>
                  <Card.Text className="mb-2 text-muted">
                    {timeago().format(comment.published)} par{" "}
                    {comment.author.name}
                  </Card.Text>
                </Card.Body>
              </Card>
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    </Container>
  );
}

export default CommentList;

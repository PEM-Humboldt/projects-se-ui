import React from "react";
import { Container, Row, Col, Card as CardBS, Button } from "react-bootstrap";

const Card = ({ projectInfo }) => {
  return (
    <div>
      <CardBS className="m-2">
        <CardBS.Body>
          <CardBS.Title>{projectInfo.title}</CardBS.Title>
          <CardBS.Text>{projectInfo.description}</CardBS.Text>
          <CardBS.Link>{projectInfo.url}</CardBS.Link>
          <Button variant="primary" className="mb-2">
            Expand
          </Button>
        </CardBS.Body>
      </CardBS>
    </div>
  );
};

export { Card };

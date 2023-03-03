import React from "react";
import { Container, Row, Col, Card as CardBS, Button } from "react-bootstrap";
import { PlusSquareFill, ArrowRightSquareFill } from "react-bootstrap-icons";

const Card = ({ projectInfo }) => {
  return (
    <div>
      <CardBS className="m-2">
        <CardBS.Body>
          <CardBS.Title className="cardTitle">{projectInfo.title}</CardBS.Title>
          <CardBS.Text className="cardInfo">
            {projectInfo.description}
          </CardBS.Text>
          {/* <CardBS.Link>{projectInfo.url}</CardBS.Link> */}
          <PlusSquareFill type="button" className="expandBtn" />
        </CardBS.Body>
      </CardBS>
    </div>
  );
};

export { Card };

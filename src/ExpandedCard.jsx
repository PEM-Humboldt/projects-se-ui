import { Card as CardBS, Col } from "react-bootstrap";

const ExpandedCard = ({ projectInfo }) => {
  return (
    <Col xs={12} md={12} lg={12} xl={12}>
      <CardBS className="cardsm">
        <CardBS.Body>
          <CardBS.Title className="cardTitle">{projectInfo.title}</CardBS.Title>
          <CardBS.Text className="cardInfo">
            {projectInfo.description}
          </CardBS.Text>
          <CardBS.Link>{projectInfo.url}</CardBS.Link>
        </CardBS.Body>
      </CardBS>
    </Col>
  );
};

export { ExpandedCard };

import { Card as CardBS, Col, Row } from "react-bootstrap";
import { PlusSquareFill } from "react-bootstrap-icons";

const Card = ({ projectInfo, expand }) => {
  return (
    <Col>
      <CardBS className="cardsm shortInfo">
        <CardBS.Body>
          <Row>
            <Col md={10}>
              <CardBS.Title className="cardTitle">
                {projectInfo.title}
              </CardBS.Title>
            </Col>
            <Col md={1}>
              <PlusSquareFill
                type="button"
                className="expandBtn"
                onClick={expand}
              />
            </Col>
          </Row>
          <CardBS.Text className="cardInfo">
            {projectInfo.description}
          </CardBS.Text>
        </CardBS.Body>
      </CardBS>
    </Col>
  );
};

export { Card };

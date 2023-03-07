import { Card as CardBS, Col } from "react-bootstrap";
import { PlusSquareFill } from "react-bootstrap-icons";

const Card = ({ projectInfo, expand }) => {
  return (
    <Col>
      <CardBS className="cardsm">
        <CardBS.Body>
          <CardBS.Title className="cardTitle">{projectInfo.title}</CardBS.Title>
          <CardBS.Text className="cardInfo">
            {projectInfo.description}
          </CardBS.Text>
          <PlusSquareFill
            type="button"
            className="expandBtn"
            onClick={expand}
          />
        </CardBS.Body>
      </CardBS>
    </Col>
  );
};

export { Card };

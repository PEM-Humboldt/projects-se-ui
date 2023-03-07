import { Card as CardBS } from "react-bootstrap";
import { PlusSquareFill } from "react-bootstrap-icons";

const Card = ({ projectInfo }) => {
  return (
    <div>
      <CardBS className="m-2">
        <CardBS.Body>
          <CardBS.Title className="cardTitle">{projectInfo.title}</CardBS.Title>
          <CardBS.Text className="cardInfo">
            {projectInfo.description}
          </CardBS.Text>
          <PlusSquareFill type="button" className="expandBtn" />
        </CardBS.Body>
      </CardBS>
    </div>
  );
};

export { Card };

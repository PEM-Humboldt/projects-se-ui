import { Card as CardBS } from "react-bootstrap";

const ExpandedCard = ({ projectInfo }) => {
  return (
    <CardBS className="">
      <CardBS.Body>
        <CardBS.Title className="cardTitle">{projectInfo.title}</CardBS.Title>
        <CardBS.Text className="cardInfo">
          {projectInfo.description}
        </CardBS.Text>
        <CardBS.Link>{projectInfo.url}</CardBS.Link>
      </CardBS.Body>
    </CardBS>
  );
};

export { ExpandedCard };

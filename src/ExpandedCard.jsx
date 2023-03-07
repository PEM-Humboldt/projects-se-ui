import { useState } from "react";
import { Card as CardBS, Col, Row, Tab, Tabs } from "react-bootstrap";
import { ArrowLeftSquareFill, BoxSeamFill } from "react-bootstrap-icons";

const ExpandedCard = ({ projectInfo, collapse }) => {
  const [tabKey, setTabKey] = useState("people");
  return (
    <Col xs={12} md={12} lg={12} xl={12}>
      <CardBS className="cardsm">
        <CardBS.Body>
          <Row>
            <Col md={11}>
              <CardBS.Title className="cardTitle">
                {projectInfo.title}
              </CardBS.Title>
            </Col>
            <Col className="dpInline">
              <ArrowLeftSquareFill
                type="button"
                className="expandBtn"
                onClick={collapse}
              />
              <BoxSeamFill
                type="button"
                className="expandBtn"
                onClick={collapse}
              />
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <CardBS.Subtitle className="cardSubt">
                Description
              </CardBS.Subtitle>
              <CardBS.Text className="cardInfo">
                {projectInfo.description}
              </CardBS.Text>
              <CardBS.Subtitle className="cardSubt">
                Main Contact
              </CardBS.Subtitle>
              <CardBS.Text className="cardInfo">
                {projectInfo.contact}
              </CardBS.Text>
              <CardBS.Subtitle className="cardSubt">URL</CardBS.Subtitle>
              <CardBS.Link>{projectInfo.url}</CardBS.Link>
            </Col>
            <Col md={6}>
              <Tabs
                id="maintab"
                activeKey={tabKey}
                onSelect={(k) => setTabKey(k)}
                className="mb-3"
              >
                <Tab eventKey="people" title="People">
                  <div>Here is people</div>
                </Tab>
                <Tab eventKey="actors" title="Actors">
                  <div>Here is actors</div>
                </Tab>
              </Tabs>
            </Col>
          </Row>
        </CardBS.Body>
      </CardBS>
    </Col>
  );
};

export { ExpandedCard };

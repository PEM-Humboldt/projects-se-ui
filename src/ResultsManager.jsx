import { useState } from "react";
import { Collapse } from "react-bootstrap";
import { Card } from "./Card";
import { ExpandedCard } from "./ExpandedCard";

const ResultsManager = ({ results = [] }) => {
  const [expanded, setExpanded] = useState(null);
  return (
    <>
      {results.map((result) => {
        if (expanded === result.id) {
          return (
            <ExpandedCard
              key={result.id}
              projectInfo={result}
              collapse={() => setExpanded(null)}
            />
          );
        } else {
          return (
            <Card
              key={result.id}
              projectInfo={result}
              expand={() => setExpanded(result.id)}
            />
          );
        }
      })}
    </>
  );
};

export { ResultsManager };

import { useState } from "react";
import {
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
  Form,
  Button,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import { Card } from "./Card";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [searchText, setSearchText] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [selectedTaxonomic, setSelectedTaxonomic] = useState("");
  const [selectedCountries, setSelectedCountries] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    // perform search based on search parameters
    console.log(
      `Searching for ${searchText} between ${startDate} and ${endDate}, selected Taxonomic: ${selectedTaxonomic}, selected Countries: ${selectedCountries}`
    );
    const fakeResults = [
      {
        id: 1,
        title: "Result 1",
        description: "This is the first result.",
        url: "https://example.com/result1",
        details: "Details for result 1.",
      },
      {
        id: 2,
        title: "Result 2",
        description: "This is the second result.",
        url: "https://example.com/result2",
        details: "Details for result 2.",
      },
      {
        id: 3,
        title: "Result 3",
        description: "This is the third result.",
        url: "https://example.com/result3",
        details: "Details for result 3.",
      },
      {
        id: 4,
        title: "Result 4",
        description: "This is the fourth result.",
        url: "https://example.com/result4",
        details: "Details for result 4.",
      },
      {
        id: 5,
        title: "Result 5",
        description: "This is the fifth result.",
        url: "https://example.com/result5",
        details: "Details for result 5.",
      },
      {
        id: 6,
        title: "Result 6",
        description: "This is the sixth result.",
        url: "https://example.com/result6",
        details: "Details for result 6.",
      },
    ];
    setResults(fakeResults);
  };

  return (
    <Container fluid>
      <Row>
        <Col md={4}>
          <div>Textico</div>
        </Col>
        <Col md={4}>
          <Container>
            <Row>
              <Col>
                <Form.Label htmlFor="open-query">Open Query</Form.Label>
                <InputGroup className="mb-3">
                  <FormControl
                    id="open-query"
                    placeholder="Enter search query"
                    aria-label="Open Query Area"
                    aria-describedby="query-text"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                  />
                </InputGroup>
              </Col>
            </Row>
            <Row>
              <Col md={8}>
                <Row>
                  <Col md={6}>
                    <Form.Label htmlFor="open-query">Start Date</Form.Label>
                    <InputGroup className="mb-3">
                      <FormControl
                        type="date"
                        aria-label="Start Date"
                        aria-describedby="start-date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                      />
                    </InputGroup>
                  </Col>
                  <Col md={6}>
                    <Form.Label htmlFor="open-query">End Date</Form.Label>
                    <InputGroup className="mb-3">
                      <FormControl
                        type="date"
                        aria-label="End Date"
                        aria-describedby="end-date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                      />
                    </InputGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <DropdownButton
                      id="dropdown-basic-button"
                      title={selectedTaxonomic || "Select Taxonomic Group"}
                    >
                      <Dropdown.Item
                        onClick={() => setSelectedTaxonomic("Taxonomic 1")}
                      >
                        Taxonomy 1
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => setSelectedTaxonomic("Taxonomic 2")}
                      >
                        Taxonomy 2
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => setSelectedTaxonomic("Taxonomic 3")}
                      >
                        Taxonomy 3
                      </Dropdown.Item>
                    </DropdownButton>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <DropdownButton
                      id="dropdown-basic-button"
                      title={selectedCountries || "Select Countries"}
                    >
                      <Dropdown.Item
                        onClick={() => setSelectedCountries("Countries 1")}
                      >
                        Country 1
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => setSelectedCountries("Countries 2")}
                      >
                        Country 2
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => setSelectedCountries("Countries 3")}
                      >
                        Country 3
                      </Dropdown.Item>
                    </DropdownButton>
                  </Col>
                </Row>
              </Col>
              <Col md={4}>
                <Button
                  variant="outline-secondary"
                  id="button-addon2"
                  onClick={handleSearch}
                >
                  Search
                </Button>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
      <Row>
        <Col md={8}>
          <Row>
            <Col lg={8}>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4>{results.length} Results</h4>
              </div>
              <div className="d-flex flex-wrap">
                {results.map((result, index) => (
                  <Card key={index} projectInfo={result} />
                ))}
              </div>
            </Col>
            <Col lg={4}>
              <div>Small Column</div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export { App };

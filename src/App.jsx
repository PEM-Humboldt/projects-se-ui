import React, { useState } from "react";
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
import {
  Search,
  GeoAltFill,
  Unity,
  TagFill,
  EyeFill,
} from "react-bootstrap-icons";
import logo from "./img/logoBIAB.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

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
        description:
          "This is the first result. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
        url: "https://example.com/result1",
        details: "Details for result 1.",
      },
      {
        id: 2,
        title: "Result 2",
        description:
          "Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.",
        url: "https://example.com/result2",
        details: "Details for result 2.",
      },
      {
        id: 3,
        title: "Result 3",
        description:
          "This is the third result. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
        url: "https://example.com/result3",
        details: "Details for result 3.",
      },
      {
        id: 4,
        title: "Result 4",
        description:
          "This is the fourth result. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
        url: "https://example.com/result4",
        details: "Details for result 4.",
      },
      {
        id: 5,
        title: "Result 5",
        description:
          "This is the fifth result. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
        url: "https://example.com/result5",
        details: "Details for result 5.",
      },
      {
        id: 6,
        title: "Result 6",
        description:
          "This is the sixth result. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
        url: "https://example.com/result6",
        details: "Details for result 6.",
      },
    ];
    setResults(fakeResults);
  };

  return (
    <Container fluid>
      <Row className="searchArea d-flex justify-content-center align-items-center">
        <Col md={6} className="title">
          <h1>Biodiversity Projects</h1>
          <h3>
            <b>Who</b> is doing <b>What</b> and <b>Where</b>
          </h3>
          <h4>
            Search an open query and apply filters to find projects or people
            working in biodiversity around the world.{" "}
          </h4>
        </Col>
        <Col md={6}>
          <Container className="searchBox">
            <Row>
              <Col>
                <Form.Label htmlFor="open-query" className="openQ">
                  Open Query
                </Form.Label>
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
              <Col md={4} className="searchBtnArea">
                <div>here goes checkbox</div>
                <Button
                  variant="outline-secondary"
                  id="button-addon2"
                  onClick={handleSearch}
                  className="searchBtn"
                >
                  <Search className="searchBtnIcn" />
                </Button>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
      <img src={logo} alt={"logo"} className="logoBiab" />
      <Row className="resultsArea d-flex justify-content-center">
        <Row>
          <Col lg={10}>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4>
                <b>{results.length}</b> Results
              </h4>
            </div>
            <div className="d-flex flex-wrap cardsArea">
              {results.map((result, index) => (
                <Card key={index} projectInfo={result} />
              ))}
            </div>
          </Col>
          <Col lg={2} className="resultsNav gy-5">
            <Button className="bigNavBtn">
              map
              <GeoAltFill />
            </Button>
            <Button className="bigNavBtn">
              network
              <Unity />
            </Button>
            <Row className="taRight navLinks">
              <div className="bigNavTitle">
                Results
                <EyeFill />
              </div>
              <a className="linkActive" href="#">
                Most viewed
              </a>
              <a href="#">Least studied</a>
              <a href="#">Latest</a>
            </Row>
            <Row className="taRight">
              <div className="bigNavTitle">
                Tags
                <TagFill />
              </div>
              <div className="tags">
                <a href="#" className="tag">
                  rivers
                </a>
              </div>
            </Row>
          </Col>
        </Row>
      </Row>
    </Container>
  );
}

export { App };

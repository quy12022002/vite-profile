import { Card, Col, Container, Row } from "react-bootstrap";
import { FaTag } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { GoLinkExternal } from "react-icons/go";
import imgProject from "../../assets/test.png";

const Projects = () => {
  return (
    <div className="project-container" id="project">
      <Container>
        <h2 className="project-title text-center">Personal Projects</h2>
        <p className="text-center pb-4">
          A collection of projects I've built to explore new technologies and
          solve interesting problems.
        </p>
        <Row>
          <Col xs={12} sm={12} md={6} lg={4} xl={4}>
            <Card>
              <Card.Img variant="top" src={imgProject} alt="image Project" />
              <Card.Body>
                <Card.Title>My Dev Profile</Card.Title>
                <Card.Text>
                  This template provides a clean and professional foundation for
                  showcasing your skills, projects, and experience. Built with
                  flexibility in mind, it allows for easy customization to
                  reflect your unique personal brand and style. Whether you're a
                  developer looking to display your coding prowess or a designer
                  eager to exhibit your creative work, this template offers a
                  straightforward and effective way to build your online
                  presence.
                </Card.Text>
                <div className="tags pt-4">
                  <span className="tag">
                    <FaTag />
                    Vite
                  </span>
                  <span className="tag">
                    <FaTag />
                    React
                  </span>
                  <span className="tag">
                    <FaTag />
                    TypeScript
                  </span>
                  <span className="tag">
                    <FaTag />
                    Bootstrap
                  </span>
                  <span className="tag">
                    <FaTag />
                    SASS
                  </span>
                </div>
                <div className="card-footer">
                  <div className="d-flex align-items-center gap-2">
                    <a
                      href="https://github.com/quy12022002/vite-profile"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-none icon-github"
                    >
                      <FiGithub />
                      <span>Code</span>
                    </a>
                  </div>
                  <a href="#" className="text-decoration-none">
                    <GoLinkExternal />
                    <span>Demo</span>
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Projects;

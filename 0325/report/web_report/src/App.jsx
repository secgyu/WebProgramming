import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import ContactForm from "./components/ContactForm";
import "bootstrap/dist/css/bootstrap.min.css";
import ContactList from "./components/ContactList";

function App() {
  return (
    <>
      <h1 className="title">연락처</h1>
      <Container>
        <Row>
          <Col>
            <ContactForm />
          </Col>
          <Col>
            <ContactList />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;

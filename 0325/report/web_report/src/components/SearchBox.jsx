import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { usecontactStore } from "../store/store";

const SearchBox = () => {
  const [keyword, setKeyword] = useState("");
  const { searchByUserName } = usecontactStore();
  const searchByNameWrapper = (event) => {
    event.preventDefault();
    searchByUserName(keyword);
  };
  return (
    <Form onSubmit={searchByNameWrapper} className="search-form">
      <Row>
        <Col>
          <Form.Control type="text" placeholder="name" onChange={(event) => setKeyword(event.target.value)} />
        </Col>
        <Col>
          <Button type="submit">찾기</Button>
        </Col>
      </Row>
    </Form>
  );
};

export default SearchBox;

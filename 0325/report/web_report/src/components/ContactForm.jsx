import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { usecontactStore } from "../store/store";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(0);
  const { addContact } = usecontactStore();

  const getName = (event) => {
    setName(event.target.value);
  };

  const getPhoneNumber = (event) => {
    setPhoneNumber(event.target.value);
  };

  const addContactWrapper = (event) => {
    event.preventDefault();
    addContact({ name, phoneNumber });
  };

  return (
    <div>
      <Form onSubmit={addContactWrapper}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>이름</Form.Label>
          <Form.Control type="text" placeholder="이름을 입력해주세요" onChange={getName} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formContact">
          <Form.Label>전화번호</Form.Label>
          <Form.Control type="number" placeholder="전화번호를 입력해주세요" onChange={getPhoneNumber} />
        </Form.Group>

        <Button variant="primary" type="submit">
          추가
        </Button>
      </Form>
    </div>
  );
};

export default ContactForm;

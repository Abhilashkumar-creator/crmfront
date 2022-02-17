import React from "react";
import { useNavigate } from "react-router-dom";
import { Form,Button } from "react-bootstrap";

const Contact = (props) => {
  const navigate = useNavigate();
  return (
    <>
     <Form>
<Form.Group className="mb-3" controlId="formGroupEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formGroupPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
</Form>
      <button onClick={() => navigate(-1)}>Go Back</button>
      </>
  );
};

export default Contact;
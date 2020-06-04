import React from 'react';
import './AddStudent.scss';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const AddStudent = () => {
  const saveStudent = (event: any) => {
    event.preventDefault();
    console.log(event);
  };
  return (
    <div className="add-student">
      <h1>Add Student</h1>
      <Form className="col-9 mx-auto mt-4">
        <Form.Group controlId="formFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group controlId="formLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group controlId="formLastName">
          <Form.Label>Phone</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group controlId="formLastName">
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group controlId="formLastName">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group controlId="formLastName">
          <Form.Label>GPA</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AddStudent;

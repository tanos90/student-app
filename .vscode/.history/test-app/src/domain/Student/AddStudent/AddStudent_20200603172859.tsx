import React from 'react';
import './AddStudent.scss';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Student } from 'stores/StudentStore/StudentModel';
import { inject, observer } from 'mobx-react';
import { AppStoresProps } from 'commons/AppProps';
import { ID } from 'commons/Utils';

const AddStudent = inject('store')(
  observer((props: AppStoresProps) => {
    const saveStudent = (event: any) => {
      event.preventDefault();
      let form = event.target;
      const { elements } = form;
      const student = {
        id: ID(),
        firstName: elements.formFirstName.value,
        lastName: elements.formLastName.value,
        phone: elements.formPhone.value,
        gpa: elements.formGpa.value,
        address: elements.formAddress.value,
        city: elements.formCity.value,
      } as Student;
      props.store.studentStore.addStudent(student);
      props.history.push('/student/list');
    };
    return (
      <div className="add-student">
        <h1>Add Student</h1>
        <Form className="col-9 mx-auto mt-4" onSubmit={saveStudent}>
          <Form.Group controlId="formFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group controlId="formLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group controlId="formPhone">
            <Form.Label>Phone</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group controlId="formAddress">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group controlId="formCity">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group controlId="formGpa">
            <Form.Label>GPA</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  })
);

export default AddStudent;

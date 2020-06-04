import React from 'react';
import './StudentList.css';
import { AppStoresProps } from 'commons/AppProps';
import { inject, observer } from 'mobx-react';
import Table from 'react-bootstrap/Table';
import { Student } from 'stores/StudentStore/StudentModel';
import Button from 'react-bootstrap/Button';

const StudentTable = inject('store')(
  observer((props: AppStoresProps) => {
    const store = props.store.studentStore;
    const students: Student[] = store.studentList;

    return (
      <Table striped bordered hover size="sm" variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone</th>
            <th>GPA</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => {
            return (
              <tr key={student.firstName + student.lastName}>
                <td>{index + 1}</td>
                <td>{student.firstName}</td>
                <td>{student.lastName}</td>
                <td>{student.phone}</td>
                <td>{student.gpa}</td>
                <td>
                  <Button
                    variant="primary"
                    className="table-button"
                    onClick={(event: any) =>
                      props.showStudentDetail(event, student)
                    }
                  >
                    Detail
                  </Button>
                  <Button
                    variant="error"
                    className="table-button"
                    onClick={(event: any) =>
                      props.deleteStudent(event, student)
                    }
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    );
  })
);

export default StudentTable;

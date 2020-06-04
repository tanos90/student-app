import React, { useEffect } from 'react';
import './StudentList.css';
import { AppStoresProps } from 'commons/AppProps';
import { inject, observer } from 'mobx-react';
import Table from 'react-bootstrap/Table';
import { StudentStore } from 'stores/StudentStore/StudentStore';
import { Student } from 'stores/StudentStore/StudentModel';

const StudentTable = inject('store')(
  observer((props: AppStoresProps) => {
    useEffect(() => {}, []);

    const store = props.store.studentStore;
    const students: Student[] = store.studentList;
    const showStudentDetail = (event: any, student: Student) => {
      console.log(event);
      console.log(student);
    };

    return (
      <Table striped bordered hover size="sm" variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone</th>
            <th>GPA</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => {
            return (
              <tr
                key={student.firstName + student.lastName}
                onClick={(event) => {
                  showStudentDetail(event, student);
                }}
              >
                <td>{index + 1}</td>
                <td>{student.firstName}</td>
                <td>{student.lastName}</td>
                <td>{student.gpa}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    );
  })
);

export default StudentTable;

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

    return (
      <Table striped bordered hover size="sm" variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => {
            return (
              <tr key={student.firstName + student.lastName}>
                <td>1</td>
                <td>{student.firstName}</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
            );
          })}

          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
        </tbody>
      </Table>
    );
  })
);

export default StudentTable;

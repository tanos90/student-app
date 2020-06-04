import React, { useEffect } from 'react';
import './StudentList.css';
import { AppProps } from 'commons/AppProps';
import { inject, observer } from 'mobx-react';
import Table from 'react-bootstrap/Table';

const StudentTable = inject('store')(
  observer((props: AppProps) => {
    useEffect(() => {
      console.log(props);
    }, []);

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
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
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

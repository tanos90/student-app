import React, { useEffect } from 'react';
import './StudentList.css';
import { AppStoresProps } from 'commons/AppProps';
import { inject, observer } from 'mobx-react';
import StudentTable from './StudentTable';

const StudentList = inject('store')(
  observer((props: AppStoresProps) => {
    const store = props.store.studentStore;
    useEffect(() => {
      store.getStudents();
      console.log(store.studentList);
    }, [store]);

    return (
      <div className="student-list">
        <h1>Student List</h1>
        <div className="col-9 justify-content-center ">
          <StudentTable></StudentTable>
        </div>
      </div>
    );
  })
);

export default StudentList;

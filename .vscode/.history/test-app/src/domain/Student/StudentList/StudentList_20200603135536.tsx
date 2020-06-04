import React, { useEffect } from 'react';
import './StudentList.css';
import { AppStoresProps } from 'commons/AppProps';
import { StudentStore } from 'stores/StudentStore/StudentStore';
import { inject, observer } from 'mobx-react';

const StudentList = inject('store')(
  observer((props: AppStoresProps) => {
    const store = props.store.studentStore;
    useEffect(() => {
      store.getStudents();
      console.log(store.studentList);
    }, []);

    return (
      <div className="student-list">
        <h1>Student List</h1>
      </div>
    );
  })
);

export default StudentList;

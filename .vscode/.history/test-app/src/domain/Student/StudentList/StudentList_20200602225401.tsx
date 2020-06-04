import React, { useEffect } from 'react';
import './StudentList.css';
import { AppStoresProps } from 'commons/AppProps';
import { StudentStore } from 'stores/StudentStore/StudentStore';
import { inject, observer } from 'mobx-react';

const StudentList = inject('store')(
  observer((props: AppStoresProps) => {
    useEffect(() => {
      console.log(props.store);
    }, [props]);

    return (
      <div className="student-list">
        <h1>Student List</h1>
      </div>
    );
  })
);

export default StudentList;

import React from 'react';
import './StudentDetail.css';
import { AppProps, AppStoresProps } from 'commons/AppProps';
import { inject, observer } from 'mobx-react';

const StudentDetail = inject('store')(
  observer((props: AppStoresProps) => {
    const store = props.store.studentStore;
    const params = props.match.params as any;

    return (
      <div className="student-detail">
        {store.studentList.map((student) => {
          console.log(student);
          console.log(params.id);
          if (student.id === params.id) {
            return <h1>Student Detail</h1>;
          }
        })}
      </div>
    );
  })
);

export default StudentDetail;

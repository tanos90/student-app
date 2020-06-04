import React, { useEffect } from 'react';
import './StudentDetail.scss';
import { AppProps, AppStoresProps } from 'commons/AppProps';
import { inject, observer } from 'mobx-react';

const StudentDetail = inject('store')(
  observer((props: AppStoresProps) => {
    const store = props.store.studentStore;
    const params = props.match.params as any;
    useEffect(() => {
      console.log(store.studentList.length);
    }, [store]);

    return (
      <div className="student-detail">
        {store.studentList
          .filter((student) => student.id === params.id)
          .map((student) => {
            return (
              <div key={student.id}>
                <h1>Student Detail</h1>
                <h4>
                  <img src="/user.svg" className="student-image"></img>
                  {student.firstName} {student.lastName}
                </h4>
              </div>
            );
          })}
      </div>
    );
  })
);

export default StudentDetail;

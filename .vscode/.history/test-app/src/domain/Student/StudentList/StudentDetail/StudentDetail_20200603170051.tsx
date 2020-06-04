import React, { useEffect } from 'react';
import './StudentDetail.css';
import { AppProps, AppStoresProps } from 'commons/AppProps';
import { inject, observer } from 'mobx-react';

const StudentDetail = inject('store')(
  observer((props: AppStoresProps) => {
    const store = props.store.studentStore;
    const params = props.match.params as any;
    useEffect(() => {
      console.log(store.studentList.length);
      console.log(params.id);
    }, [{}]);

    return (
      <div className="student-detail">
        {store.studentList.map((student) => {
          console.log(student);
          console.log(params.id);
          if (student.id !== params.id) {
            console.log(student);
            return (
              <div>
                <h1>Student Detail</h1>
                <h4>
                  {student.firstName} {student.lastName}
                </h4>
              </div>
            );
          }
          return null;
        })}
      </div>
    );
  })
);

export default StudentDetail;

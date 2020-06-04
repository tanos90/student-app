import React from 'react';
import './StudentDetail.css';
import { AppProps, AppStoresProps } from 'commons/AppProps';
import { inject, observer } from 'mobx-react';

const StudentDetaiil = inject('store')(
  observer((props: AppStoresProps) => {
    const store = props.store.studentStore;
    const params = props.match.params as any;
    console.log(params.id);

    return (
      <div className="student-detail">
        <h1>Student Detail</h1>
      </div>
    );
  })
);

export default StudentDetail;

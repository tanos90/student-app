import React, { useEffect } from 'react';
import './StudentDetail.scss';
import { AppStoresProps } from 'commons/AppProps';
import { inject, observer } from 'mobx-react';

const StudentDetail = inject('store')(
  observer((props: AppStoresProps) => {
    const store = props.store.studentStore;
    const params = props.match.params as any;

    return (
      <div className="student-detail">
        {store.studentList
          .filter((student) => student.id === params.id)
          .map((student) => {
            return (
              <div key={student.id}>
                <h1>Student Detail</h1>
                <h4>
                  <div className="row student-detail-container">
                    <div className="col image-container">
                      <img
                        src="/user.svg"
                        alt="user-icon"
                        className="student-image"
                      ></img>
                    </div>
                    <div className="col info-container">
                      <span>First Name: {student.firstName} </span>
                      <span>Last Name: {student.lastName} </span>
                      <span>Phone: {student.phone} </span>
                      <span>Address: {student.address} </span>
                    </div>
                  </div>
                </h4>
              </div>
            );
          })}
      </div>
    );
  })
);

export default StudentDetail;

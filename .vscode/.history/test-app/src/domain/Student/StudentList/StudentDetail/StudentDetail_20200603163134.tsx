import React from 'react';
import './StudentDetail.css';
import { AppProps } from 'commons/AppProps';

const StudentDetail = (props: AppProps) => {
  console.log(props.match.params);
  return (
    <div className="student-detail">
      <h1>Student Detail</h1>
    </div>
  );
};

export default StudentDetail;

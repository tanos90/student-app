import React from 'react';
import './StudentDetail.css';
import { AppProps } from 'commons/AppProps';

const StudentDetail = (props: AppProps) => {
  const params = props.match.params as any;
  console.log(params.id);
  return (
    <div className="student-detail">
      <h1>Student Detail</h1>
    </div>
  );
};

export default StudentDetail;

import React from 'react';
import './StudentList.css';
import { AppStoresProps } from 'commons/AppProps';
import { inject, observer } from 'mobx-react';
import StudentTable from './StudentTable';
import { Student } from 'stores/StudentStore/StudentModel';

const StudentList = inject('store')(
  observer((props: AppStoresProps) => {
    const store = props.store.studentStore;

    const showStudentDetail = (event: any, student: Student) => {
      props.history.push(`/student/detail/${student.id}`);
    };

    const deleteStudent = (event: any, student: Student) => {
      event.preventDefault();
      store.deleteStudent(student);
    };

    return (
      <div className="student-list">
        <h1>Student List</h1>
        <div className="col-9 mx-auto mt-4">
          <StudentTable
            showStudentDetail={showStudentDetail}
            deleteStudent={deleteStudent}
            {...props}
          ></StudentTable>
        </div>
      </div>
    );
  })
);

export default StudentList;

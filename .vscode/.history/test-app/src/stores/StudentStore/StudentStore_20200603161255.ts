import { observable } from 'mobx';
import { Student } from './StudentModel';

export enum FETCH_STATUS {
  FETCH_SUCCEEDED = 'FETCH_SUCCEEDED',
  FETCH_FAILED = 'FETCH_FAILED',
  FETCH_ONGOING = 'FETCH_ONGOING',
  NONE = 'NONE',
}

export class StudentStore {
  @observable studentList: Student[] = [];
  @observable fetchStudentsStatus: FETCH_STATUS = FETCH_STATUS.NONE;
  constructor() {
    console.log('Student Store Created!.');
  }

  async getStudents() {
    this.fetchStudentsStatus = FETCH_STATUS.FETCH_ONGOING;

    this.studentList.push({
      firstName: 'John',
      lastName: 'Connor',
      address: '1st Avenue #213',
      city: 'LA',
      phone: '1-23-1231-1233',
      gpa: 3.4,
    } as Student);

    this.fetchStudentsStatus = FETCH_STATUS.FETCH_SUCCEEDED;
  }

  async addStudent(student: Student) {
    this.studentList.push(student);
    console.log(this.studentList);
  }

  async deleteStudent(student: Student) {
    this.studentList.filter(
      (s) =>
        s.firstName === student.firstName && s.lastName === student.lastName
    );
  }
}

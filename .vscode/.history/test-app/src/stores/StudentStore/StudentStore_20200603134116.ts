import { observable } from 'mobx';

export class StudentStore {
  @observable
  StudentList!: Student[];
}

export enum FETCH_STATUS {
  FETCH_SUCCEDED = 'FETCH_SUCCEDED',
  FETCH_FAILED = 'FETCH_FAILED',
  FETCH_ONGOING = 'FETCH_ONGOING',
  NONE = 'NONE',
}

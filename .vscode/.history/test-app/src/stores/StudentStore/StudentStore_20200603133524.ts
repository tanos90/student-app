import { observable } from 'mobx';

export class StudentStore {
  @observable StudentList: [string] = ['john'];
}

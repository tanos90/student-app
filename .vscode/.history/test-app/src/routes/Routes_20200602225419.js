import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import AddStudent from 'domain/Student/AddStudent/AddStudent';
import StudentDetail from 'domain/Student/StudentDetail/StudentDetail';
import StudentList from 'domain/Student/StudentList/StudentList';
import { inject, observer } from 'mobx-react';

const Routes = inject('store')(
  observer((props) => {
    return (
      <Switch>
        <Redirect exact from="/" to="/students" />
        <Route component={StudentList} exact path="/students" />
        <Route path="/student/add" component={AddStudent} />
        <Route path="/student/list" component={StudentList} />
        <Route path="/student/detail/:id" component={StudentDetail} />
      </Switch>
    );
  })
);

export default Routes;

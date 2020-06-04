import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { Router } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import { LinkContainer } from 'react-router-bootstrap';
import { createBrowserHistory } from 'history';
import Routes from 'routes/Routes';
import { Provider } from 'mobx-react';
import { StudentStore } from 'stores/StudentStore/StudentStore';
import { InjectionContext } from 'commons/AppProps';

const browserHistory = createBrowserHistory();

let studentStore: StudentStore = new StudentStore();
studentStore.getStudents();

let injectionContext: InjectionContext = {
  studentStore: studentStore,
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Student App<h1/>
      </header>
      <div className="main-container">
        <Provider store={injectionContext}>
          <Router history={browserHistory}>
            <ButtonToolbar className="nav-btn-toolbar">
              <LinkContainer to="/student/add">
                <Button>Add Student</Button>
              </LinkContainer>
              <LinkContainer to="/student/list">
                <Button>Students</Button>
              </LinkContainer>
            </ButtonToolbar>
            <div className="separator"></div>
            <Routes />
          </Router>
        </Provider>
      </div>
    </div>
  );
}

export default App;

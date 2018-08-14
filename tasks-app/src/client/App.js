import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import AddTasksCont from './containers/AddTasksCont'
import TaskListCont from './containers/TaskListCont'
import HeaderComp from './components/HeaderComp'
import SideBar from './components/SideBar'
import Login from './components/authenticate/Login'
import auth from '../client/components/authenticate/auth';
import {PrivateRoute} from '../client/components/authenticate/privateroute';


const App = () => {
  return (
    <Router>
      <div className="container-fluid">
        <HeaderComp></HeaderComp>
        <div className="content">
          <Route path="/projects" component={AddTasksCont}></Route>
          <Route exact path="/" component={Login}></Route>
          <PrivateRoute authed={auth.isAuthenticated} path="/tasks" component={AddTasksCont} />
          <PrivateRoute authed={auth.isAuthenticated} path="/tasks" component={TaskListCont} />
        </div>
      </div>
    </Router>
  );
}

export default App

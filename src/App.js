import React, { Component } from 'react';
import Header from './components/layout/header'
import { Switch, Route } from 'react-router-dom'

import Home from './components/home'
import Posts from './components/posts'
import Users from './components/users'
import AddPost from './components/addPost'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <div className="container">
          <Switch>
            <Route className="p-2 text-dark" exact path='/' component={Home}/>
            <Route className="p-2 text-dark" path='/posts' component={Posts}/>
            <Route className="p-2 text-dark" path='/addPost' component={AddPost}/>
            <Route className="p-2 text-dark" path='/users' component={Users}/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;

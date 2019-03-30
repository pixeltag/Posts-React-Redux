import React, { Component } from 'react';
import Header from './components/layout/header'
import PageHeader from './components/layout/pageHeader'
import { Switch, Route } from 'react-router-dom'

import Home from './components/home'
import Posts from './components/posts'
import AddPost from './components/addPost'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <PageHeader></PageHeader>
        <Switch>
                <Route className="p-2 text-dark" exact path='/' component={Home}/>
                {/* both /roster and /roster/:number begin with /roster */}
                <Route className="p-2 text-dark" path='/posts' component={Posts}/>
                <Route className="p-2 text-dark" path='/addPost' component={AddPost}/>
            </Switch>
      </div>
    );
  }
}

export default App;

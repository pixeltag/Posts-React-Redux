import React, { Component } from 'react'
import {  NavLink } from 'react-router-dom'



export default class header extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
            <h5 className="my-0 mr-md-auto font-weight-normal">Company name</h5>
            <nav className="my-2 my-md-0 mr-md-3">
                <NavLink activeClassName={"active"} className="p-2 text-dark" to='/'>Home</NavLink>
                <NavLink activeClassName={"active"} className="p-2 text-dark" to='/users'>Users</NavLink>
                <NavLink activeClassName={"active"} className="p-2 text-dark" to='/posts'>Posts</NavLink>
                <NavLink activeClassName={"active"} className="btn btn-outline-primary" to='/addpost'>Add Post</NavLink>
            </nav>
            </div>
      </React.Fragment>
    )
  }
}

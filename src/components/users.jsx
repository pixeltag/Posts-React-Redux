import React, { Component } from 'react'
import PageHeader from './layout/pageHeader'
import axios from 'axios'
import GridItem from './items/gridItem'

export default class users extends Component {

  constructor(props) {
    super(props)
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      this.setState({users : response.data})
    })
  }
    state = {
        title : 'Users',
        users : [],
    };

  render() {
    let users = this.state.users;
    return (
        <React.Fragment>
            <PageHeader title={this.state.title}></PageHeader>
            <div className="table-responsive">
            <table className="table table-striped table-sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Username</th>
                  <th>Website</th>
                </tr>
              </thead>
              <tbody>
                {users.map(user => <GridItem key={user.id} user={user} /> )}
              </tbody>
            </table>
          </div>
        </React.Fragment>
    )
  }
}

import React, { Component } from 'react'

export default class gridItem extends Component {
  render() {
      let user = this.props.user;
    return (
      <React.Fragment>
        <tr>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.username}</td>
            <td>{user.website}</td>
        </tr>
      </React.Fragment>
    )
  }
}

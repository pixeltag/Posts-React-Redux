import React, { Component } from 'react'
import PageHeader from '../components/layout/pageHeader'


export default class addPosts extends Component {
  state = {
    title : 'Add New Post',
};
  render() {
    return (
      <React.Fragment>
            <PageHeader title={this.state.title}></PageHeader>
      </React.Fragment>
    )
  }
}

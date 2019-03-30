import React, { Component } from 'react'
import PageHeader from '../components/layout/pageHeader'


export default class posts extends Component {
    state = {
        title : 'Posts'
    };
  render() {
    return (
        <React.Fragment>
            <PageHeader title={this.state.title}></PageHeader>
        </React.Fragment>
    )
  }
}

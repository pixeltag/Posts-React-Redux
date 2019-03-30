import React, { Component } from 'react'
import PageHeader from '../components/layout/pageHeader'

export default class home extends Component {
    
    state = {
        title : 'HomePage'
    };
    render() {
    return (
      <React.Fragment>
            <PageHeader title={this.state.title}></PageHeader>
      </React.Fragment>
    )
  }
}




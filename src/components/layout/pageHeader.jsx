import React, { Component } from 'react'

export default class pageHeader extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
            <h1 className="display-4">{this.props.title}</h1>
            </div>
      </div>
    )
  }
}

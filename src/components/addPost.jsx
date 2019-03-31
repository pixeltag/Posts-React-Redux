import React, { Component } from 'react'
import PageHeader from '../components/layout/pageHeader'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createPost } from '../actions/postAction';

import Posts from './posts'

class addPosts extends Component {
  
  state = {
    pagetitle : 'Add New Post',
      title : '',
      body : ''
  };
  
  onChange = (e) => {
    this.setState({ [e.target.name] : e.target.value } );
  }
  
  addPost(e) {
    e.preventDefault();
    let post = { title : this.state.title , body : this.state.body }     
    this.props.createPost(post)
  }
  
  render() {
    return (
      <React.Fragment>
            <PageHeader title={this.state.pagetitle}></PageHeader>
            <form onSubmit={(e) => this.addPost(e)}>
              <div className="form-group">
                <label>Post Title</label>
                <input type="text"  name="title" value={this.state.title || ''} className="form-control" onChange={(e) => this.onChange(e)}/>
              </div>
              <div className="form-group">
                <label>Post Body</label>
                <textarea name="body" value={this.state.body || ''} className="form-control" onChange={(e) => this.onChange(e)}/>
              </div>
              <div className="form-group">
                <button className="btn btn-primary" type="submit">Add Post</button>
              </div>


              <Posts />
            </form>
      </React.Fragment>
    )
  }
}

addPosts.propTypes = {
  createPost : PropTypes.func.isRequired
}
export default connect(null , { createPost })(addPosts)
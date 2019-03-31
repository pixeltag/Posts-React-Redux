import React, { Component } from 'react'
import PageHeader from '../components/layout/pageHeader'
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postAction';
import PropTypes from 'prop-types'

class posts extends Component {
  constructor(props) {
    super(props)
    this.props.fetchPosts();
  }
    state = {
        title : 'Posts',
    };

  componentWillReceiveProps(nextProps) {
    if(nextProps.newPost) {
      // console.log(nextProps.newPost);
      this.props.posts.unshift(nextProps.newPost.data);
    }
  }

  render() {
    let post = this.props.posts.map( p => <div key={p.id}  className="card mb-4"><div className="card-body">
            <h5 className="card-title">{p.title}</h5>
            <p className="card-text">{p.body}</p>
          </div></div>);
    return (
        <React.Fragment>
            <PageHeader title={this.state.title}></PageHeader>
            {post}
        </React.Fragment>
    )
  }
}

posts.propTypes = {
  fetchPosts : PropTypes.func.isRequired,
  posts : PropTypes.array.isRequired,
  newPost : PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  posts: state.posts.items,
  newPost: state.posts.item
})

export default connect(mapStateToProps , { fetchPosts } )(posts)
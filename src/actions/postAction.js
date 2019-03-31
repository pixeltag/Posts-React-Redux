import { FETCH_POSTS , NEW_POST} from './types';
import Axios from 'axios';

export const fetchPosts = () => dispatch => {
        Axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => { 
            dispatch({
              type: FETCH_POSTS,
              payload: response.data
          })
        })
        .catch(err => {
          console.log(err);
        })
}


export const createPost = (postData) => dispatch => {
    console.log(postData)
    Axios.post('https://jsonplaceholder.typicode.com/posts' , postData)
    .then(post => {
        dispatch({
            type: NEW_POST,
            payload: post
        })
    })
    .catch(err => {
      console.log(err);
    })
}

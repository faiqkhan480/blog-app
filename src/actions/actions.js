import axios from 'axios'

export const getPosts = () =>  async dispatch => {
     await axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res) => {
            dispatch({
                type: 'POSTS',
                payload: res.data,
            })
            console.log(res, 'axios response getPosts')
        })
        .catch(err => {console.log(err, 'from get the posts')})
};

export const postsDetails = (postId) =>  async dispatch => {
    // const url = 'https://jsonplaceholder.typicode.com/posts';
    await axios.get(`https://jsonplaceholder.typicode.com/posts${postId}`)
        .then((res) => {
            dispatch({
                type: 'POSTS',
                payload: res.data,
            });
            console.log(res, 'axios response postsDetails')
        })
        .catch(err => {console.log(err, 'from get the posts')})
};


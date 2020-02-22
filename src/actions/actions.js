import axios from 'axios'

export const getPosts = () =>  async dispatch => {
     await axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res) => {
            dispatch({
                type: 'POSTS',
                payload: res.data,
            })
            // console.log(res, 'axios response getPosts')
        })
        .catch(err => {console.log(err.message)})
};

export const getDetail = (postId) =>  async dispatch => {
    await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then((res) => {
            dispatch({
                type: 'DETAILS',
                payload: res.data,
            });
            // console.log(res.data, 'axios response postsDetails')
        })
        .catch(err => {console.log(err.message)})
};


export const updatePost = (postId, article, history) =>  async dispatch => {
    await axios.put(`https://jsonplaceholder.typicode.com/posts/${postId}`, article)
        .then((res) => {
            console.log('update post action')
            dispatch({
                type: 'UPDATE',
                payload: res.data,
            });
            history.push('/')
        })
        .catch(err => {console.log(err.message)})
};

export const createPost = (data, history) =>  async dispatch => {
    console.log(data, 'action post')
    await axios.post('https://jsonplaceholder.typicode.com/posts', data)
        .then((res) => {
            console.log('update post action')
            dispatch({
                type: 'CREATE',
                payload: res.data,
            });
            history.push('/')
        })
        .catch(err => {console.log(err.message)})
};

export const deletePost = (id) => ({
    type: 'DEL_ITEMS',
    payload: id,
});
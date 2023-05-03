export const getPosts = async (dispatch) => {
    try {
        dispatch({type: 'getPosts_onfetch'})
        await fetch('http://localhost:3900/posts')
            .then(res => res.json())
            .then(res => {

                if (res) {
                    dispatch({type: 'getPosts_success', posts: res, loading: false, success: true})
                }
            })
    } catch (error){
        dispatch({type: 'getPosts_error', posts: [], loading: false, success: false, errMsg: 'Error on loading api'})
    }
}

/*
export const getPost = async (dispatch, id) => {
    try {
        console.log(id)
        dispatch({type: 'getPost_onfetch'})
        await fetch(`http://localhost:3900/post/${id}`)
            .then(res => res.json())
            .then(res => {
                console.log(res)
                    dispatch({type: 'getPost_success', post: res.post, loading: false, success: true})
            })
    } catch (error){
        dispatch({type: 'getPost_error', posts: [], loading: false, success: false, errMsg: 'Error on loading api'})
    }
}*/

export const getPost = (id) => {
    return async (dispatch) => {
        try {
            console.log(id);
            dispatch({ type: 'getPost_onfetch' });
            const response = await fetch(`http://localhost:3900/post/${id}`);
            const data = await response.json();
            console.log(data);
            dispatch({
                type: 'getPost_success',
                post: data.post,
                loading: false,
                success: true,
            });
        } catch (error) {
            dispatch({
                type: 'getPost_error',
                posts: [],
                loading: false,
                success: false,
                errMsg: 'Error on loading API',
            });
        }
    };
};

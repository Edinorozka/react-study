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

export const getPost = (id) => {
    return async (dispatch) => {
        dispatch({ type: 'getPost_onfetch' });

        try {
            const response = await fetch(`http://localhost:3900/post/${id}`);
            const data = await response.json();

            if (response.ok) {
                dispatch({ type: 'getPost_success', post: data , loading: false, success: true});
            } else {
                dispatch({ type: 'getPost_error', errMsg: data.error });
            }
        } catch (error) {
            dispatch({ type: 'getPost_error', errMsg: 'An error occurred while fetching the post.' });
        }
    };
};

export const updatePost = async (dispatch, id, data) => {
    try {
        setTimeout(async () => {
            dispatch({ type: 'getPost_onfetch' })

            await fetch(`http://localhost:3900/post/${id}/update`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(res => {
                    console.log('getPost_success')
                    if (res.ok && typeof res.post == 'object') {
                            dispatch({ type: 'updatePost_success', posts: [...res.post], loading: false, success: true })
                    }
                })
        }, 0)
    } catch (error) {
        dispatch({ type: 'getPost_error', posts: [], loading: false, success: false, errMsg: 'Ошибка при загрузки апи' })
    }
}

export const createPost = async (dispatch, data) => {
    try {
        setTimeout(async () => {
            dispatch({type: 'getPost_onfetch'})

            await fetch(`http://localhost:3900/post/add`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(res => {
                    console.log(res)
                    if (res.ok && typeof res.postId == 'string') {
                            dispatch({type: 'createPost_success', postId: [res.postId], loading: false, success: true})
                    }
                })
        }, 0)
    } catch (error) {
        dispatch({type: 'getPost_error', posts: [], loading: false, success: false, errMsg: 'Ошибка при загрузки апи'})
    }
}
const initState = {
    loading: true,
    success: false,
    errMsg: '',
    posts: [],
    post: {},
}

export const postReducer = (state = initState, action) => {
    switch (action.type) {
        case 'getPosts_success':
        return {...state, ...action}
        break;
        case 'getPosts_onfetch':
            return {...state, posts: [], loading: true, success: false }
            break;
        case 'getPosts_error':
            return {...state, ...action }
            break;
        case 'getPost_success':
            return {...state, ...action}
            break;
        case 'getPost_onfetch':
            return {...state, post: {}, loading: true, success: false }
            break;
        case 'getPost_error':
            return {...state, ...action }
            break;
        default:
            return {...state }
        break;
    }
}
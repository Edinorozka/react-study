const initState = {
    loading: true,
    success: false,
    errMsg: '',
    userId: '',
    post: {},
    UserLogin: false,
}

export const userReducer = (state = initState, action) => {
    switch (action.type) {
        case 'User_success':
            return {...state, ...action }
        case 'User_onfetch':
            return {...state, post: {}, loading: true, success: false }
        case 'User_error':
            return {...state, ...action }
        case 'SET_USER_LOGIN':
            return { ...state, UserLogin: false }
        default:
            return {...state }

    }
}
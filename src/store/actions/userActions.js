export const createUser = async (dispatch, data) => {
    try {
        setTimeout(async () => {
            dispatch({type: 'User_onfetch'})

            await fetch(`http://localhost:3900/registration`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(res => {
                    console.log(res)
                    if (res.ok && typeof res.userId == 'string') {
                        dispatch({type: 'User_success', userId: [res.userId], loading: false, success: true})
                    }
                })
        }, 0)
    } catch (error) {
        dispatch({type: 'User_error', user: {}, loading: false, success: false, errMsg: 'Ошибка при регестрации акаунта'})
    }
}

export const loadingUser = async (dispatch, data) => {
    try {
        setTimeout(async () => {
            dispatch({type: 'User_onfetch'})

            await fetch('http://localhost:3900/login', {method: 'POST',
                headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
                .then(res => res.json())
                .then(res => {
                    if (res) {
                        localStorage.setItem('token', res.token)
                        dispatch({type: 'User_success', UserLogin: true, loading: false, success: true, user: res.user})
                    }
                })
        }, 0)
    } catch (error) {
        dispatch({type: 'User_error', user: {}, loading: false, success: false, errMsg: 'Ошибка при регестрации акаунта'})
    }
}

export const exitUser = (dispatch) => {
    dispatch({type: 'User_success', UserLogin: false})
}
import React, {useEffect} from "react";
import {exitUser} from "../../store/actions/userActions";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {Button} from "antd";

const Exit = () => {
    const dispatch = useDispatch();
    const navigation = useNavigate();

    const exitMethod = () => {

    }

    useEffect(() => {
        dispatch(exitUser)
        localStorage.removeItem('token')
        //navigation('/login')
    }, [])


    return (<div>
                <div>
                    <h1>You need exit</h1>
                </div>
                <Button onClick={() => exitMethod}>Yes</Button>
            </div>)
}

export default Exit
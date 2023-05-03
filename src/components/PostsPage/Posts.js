import React, { useEffect, useState } from 'react'
import {Card, Skeleton} from "antd";
import {ButtonUI} from "../ui/ButtonUI/ButtonUI";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getPosts} from "../../store/actions/postsActions";

export const Posts = () => {
    const navigation = useNavigate();
    const dispatch = useDispatch();
    const {posts, loading, success} = useSelector((state) => state.posts)
    useEffect(() => {
        dispatch(getPosts)
    }, [dispatch])


    const goToPost = (id = '') => {
        navigation(`/post/${id}`)
    }
    return(
        <div>
            {loading && !success &&
                <Skeleton active />
            }
            {!loading && posts && posts.length > 0 &&
                posts.map((item, index) => {
                    return <Card key={Math.random()} title={item.title}>
                        <p style={{wordBreak: 'break-all'}}>{item.short_desc}</p>
                        <span>{new Date(item.create_date).toUTCString()}</span>
                        <br/>
                        <br/>
                        <ButtonUI label="Open" onClick={() => goToPost(item._id)}></ButtonUI>
                    </Card>
                })
            }
        </div>
    )
}
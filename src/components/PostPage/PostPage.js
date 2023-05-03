import React, { useEffect, useState } from 'react'
import {useLocation, useParams} from "react-router-dom";
import {Spin, Typography} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {getPost} from "../../store/actions/postsActions";

const {Title} = Typography
export const PostPage = () => {
    const params = useParams()
    const { id } = params
    const dispatch = useDispatch()
    const {loading, success, post} = useSelector((state) => state.posts)

    useEffect(() => {
        dispatch(getPost(id))
        //getPost(dispatch, id)
    }, [dispatch, id])


    return(
        <div style={{margin: '0 auto', width: '100%', textAlign: 'center'}}>
            {loading && !success &&
                <Spin tip="Loading" size="large"/>
            }

            {!loading && success && post &&
                (<div>
                       <div>
                           <Title level={1}>{post.title}</Title>
                       </div>
                       <div>
                           <Title level={5}>{post.full_desc}</Title>
                       </div>
                       <div>
                           <Title type="secondary"
                                  style={{fontSize: 12}}>{new Date(post.create_date).toUTCString()}</Title>
                       </div>
                </div>)
            }
        </div>
    )
}
import React, { useEffect, useState } from 'react'
import {useParams, useNavigate} from "react-router-dom";
import {Button, Form, Spin, Typography, Input} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {getPost, updatePost} from "../../store/actions/postsActions";

const {Title} = Typography
export const PostPage = () => {
    const {UserLogin} = useSelector(state => state.user)
    const params = useParams()
    const { id } = params
    const navigation = useNavigate()

    const dispatch = useDispatch()
    const {loading, success, post} = useSelector((state) => state.posts)

    const [editedPost, setEditedPost] = useState({
        title: '',
        short_desc: '',
        full_desc: '',
    })
    const [showEditForm, setShowEditForm] = useState(false)

    useEffect(() => {
        dispatch(getPost(id));
    }, [dispatch, id]);

    useEffect(() => {
        setEditedPostMethod()
    }, [post]);

    const setEditedPostMethod = () => {
        if (post){
            setEditedPost({
                ...editedPost,
                title: post.title,
                short_desc: post.short_desc,
                full_desc: post.full_desc
            })
        }
    }

    const updatePostMethod = () => {
        updatePost(dispatch, id, editedPost)
        navigation('/posts')
    }

    return(
        <div style={{margin: '0 auto', width: '100%', textAlign: 'center'}}>
            {!loading && !success &&
                <Spin tip="Loading" size="large"/>
            }
            {!loading && !showEditForm && UserLogin &&
                <Button type = 'primary' onClick={() => setShowEditForm(!showEditForm)}>Edit</Button>
            }

            {!loading && showEditForm &&
                <div>
                    <Form>
                        <Form.Item label={'title'}>
                            <Input value = {editedPost.title} onChange={(e) => setEditedPost({...editedPost, title: e.target.value})}/>
                        </Form.Item>
                        <Form.Item label={'Small text'}>
                            <Input.TextArea value = {editedPost.short_desc} onChange={(e) => setEditedPost({...editedPost, short_desc: e.target.value})}/>
                        </Form.Item>
                        <Form.Item label={'All text'}>
                            <Input.TextArea value = {editedPost.full_desc} onChange={(e) => setEditedPost({...editedPost, full_desc: e.target.value})}/>
                        </Form.Item>

                        <Form.Item>
                            <Button onClick={() => updatePostMethod()}>Save</Button>
                        </Form.Item>
                    </Form>
                </div>
            }

            {!loading && !showEditForm && success && post &&
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

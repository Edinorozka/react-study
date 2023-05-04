import React, { useEffect, useState } from 'react'
import {Button, Card, Form, Input, Skeleton, Typography} from "antd";
import {ButtonUI} from "../ui/ButtonUI/ButtonUI";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {createPost, getPosts} from "../../store/actions/postsActions";

export const Posts = () => {
    const {UserLogin} = useSelector(state => state.user)
    const navigation = useNavigate();
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        title: '',
        short_desc: '',
        full_desc: ''
    })
    const [addPostFlag, setAddPostFlag] = useState(false)
    const {posts, loading, success} = useSelector((state) => state.posts)
    useEffect(() => {
        dispatch(getPosts)
    }, [dispatch])


    const goToPost = (id = '') => {
        navigation(`/post/${id}`)
    }
    const createPostMethod = async () => {
        await createPost(dispatch, formData)
        navigation(0)
    }

    return(
        <div>
            {loading && !success &&
                <Skeleton active />
            }
            {!loading && !addPostFlag && UserLogin &&
                <div style={{marginBottom: 10}}>
                    <ButtonUI label='Add new post' onClick={() => setAddPostFlag(true)}/>
                </div>
            }

            {!loading && addPostFlag &&
                <Form>
                    <Form.Item label={'title'}>
                        <Input value = {formData.title} onChange={(e) => setFormData({...formData, title: e.target.value})}/>
                    </Form.Item>
                    <Form.Item label={'Small text'}>
                        <Input.TextArea value = {formData.short_desc} onChange={(e) => setFormData({...formData, short_desc: e.target.value})}/>
                    </Form.Item>
                    <Form.Item label={'All text'}>
                        <Input.TextArea value = {formData.full_desc} onChange={(e) => setFormData({...formData, full_desc: e.target.value})}/>
                    </Form.Item>
                    <Form.Item>
                        <Button onClick={() => createPostMethod()}>Create</Button>
                    </Form.Item>
                </Form>
            }

            {!loading && !addPostFlag && posts && posts.length > 0 &&
                posts.map((item, index) => {
                    return <Card key={Math.random()} title={item.title} style={{margin: 5}}>
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
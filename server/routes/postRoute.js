import express from 'express'
import Post from '../db/schemas/postSchema.js'
import checkToken from "../middlewares/auth.js";

const router = express.Router()

router.get('/posts', async (req, res) => {
    const response = {
        ok: false,
        errMsg: 'Ошибка получения постов'
    }

    try {
        const posts = await Post.find({})

        response.ok = true
        response.errMsg = ''

        res.status(200).send(posts)
    } catch (error) {
        res.status(400).json(response).send()
    }
})

router.get('/post/:id', async (req, res) => {
    const response = {
        ok: false,
        errMsg: 'Ошибка получения поста'
    }

    const { id } = req.params

    try {
        const post = await Post.findOne({ '_id': id })

        response.ok = true
        response.errMsg = ''
        response.post = post || []

        res.status(200).send(post)
    } catch (error) {
        res.status(400).json(response).send()
    }
})

router.post('/post/add', checkToken, async (req, res) => {
    const response = {
        ok: false,
        errMsg: 'Ошибка при добавлении поста'
    }

    const { body } = req
    try {
        const post = await Post.create({
            title: body.title,
            short_desc: body.short_desc,
            full_desc: body.full_desc,
        })
        res.status(200).send(post)
    } catch (error){console.log(error)}
})

router.post('/post/:id/update', checkToken, async (req, res) => {
    const response = {
        ok: false,
        errMsg: 'Ошибка обления поста'
    }

    const { id } = req.params
    const { body } = req

    console.log('body', body)

    try {
        const post = await Post.findOne({ '_id': id })

        post.title = body.title
        post.short_desc = body.short_desc
        post.full_desc = body.full_desc

        await post.save()

        response.ok = true
        response.errMsg = ''
        response.post = post || []

        res.status(200).json(response).send()
    } catch (error) {
        res.status(400).json(response).send()
    }
})

export default router
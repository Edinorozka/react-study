import express from 'express'
import User from "../db/schemas/userSchema.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import {JWT_SECRET} from "../config.js";

const router = express.Router()

/*router.post('/login', async (req,res) => {
    try{
        const { name, login, password } = req.body
        const user = await User.findOne({ login })
        if (password !== user.password) throw new Error("Неверный логи или пароль")
        res.status(200).send(user)
    }catch (error){console.log('login ', error)}
})

router.post('/registration', async (req,res) => {
    try{
        const { name, login, password } = req.body
        const user = await User.create({
            name, login, password
        })
        res.status(200).send(user)
    }catch (error){console.log('registration ', error)}
})*/

router.post('/login', async (req, res) => {
    const response = {
        ok: false,
        errMsg: 'login error'
    }

    const { body } = req
    try {
        const user = await User.findOne({login: body.login})

        const isPassed = await bcrypt.compare(body.password, user.password)
        if(!isPassed) {
            response.ok = false;
            response.errMsg = 'login or password is not true';
            response.user = user
            res.status(200).json(response).send()
        }

            const token = await jwt.sign({
                id: user._id
            }, JWT_SECRET, {
                expiresIn: '2m'
            })
            response.ok = true;
            response.errMsg = '';
            response.user = user
            response.token = token
            res.status(200).json(response).send()
    } catch (error) {res.status(400).json(response).send()}
})

router.post('/registration', async (req, res) => {
    const response = {
        ok: false,
        errMsg: 'registration error'
    }

    const { body } = req
    try {
        await bcrypt.hash(body.password, 3,  async (err, result) => {
            if(err) res.status(400).json(response).send()
            const user = new User({
                login: body.login,
                password: result,
                name: body.name,
                fullname: body.fullname,
            })

            await user.save();
            response.ok = true;
            response.errMsg = '';
            response.user = user
            res.status(200).json(response).send()
        })
    } catch (error) {res.status(400).json(response).send()}
})

export default router
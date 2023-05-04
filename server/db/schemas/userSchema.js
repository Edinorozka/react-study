import mongoose from 'mongoose'

const User = new mongoose.Schema({
    name: {type: String, required: true},
    fullName: {type: String},
    login: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    banned: {type:Boolean, default: false},
    role: {type: String, default: 'user'},
    create_date: {type: Date}
})

const model = mongoose.model('User', User)

export default model;
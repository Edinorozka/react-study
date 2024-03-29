import mongoose from 'mongoose'

const Post = new mongoose.Schema({
    title: { type: String, default: 'DEFAULT TITLE' },
    short_desc: { type: String },
    full_desc: { type: String },
    create_date: { type: Date,
                    default: Date.now},
    author: { type: mongoose.Types.ObjectId, ref: 'User' }
})

const model = mongoose.model('Post', Post)

export default model;
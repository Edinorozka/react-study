import express from 'express'
import cors from 'cors'
import { dbConnect } from './db/db.js';

import mainRoute from './routes/mainRoute.js'
import postsRoute from './routes/postRoute.js'
import {PORT} from "./config.js";

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.json())
app.use(cors())


app.use(mainRoute)
app.use(postsRoute)


app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
    dbConnect()
})
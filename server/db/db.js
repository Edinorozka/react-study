import mongoose from 'mongoose'
import {MONGODB_URL} from "../config.js";



export const dbConnect = async () => {
    mongoose
        .connect(MONGODB_URL,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            family: 4,
        })
        // eslint-disable-next-line no-console
        .then(() => console.log('Успешное подключение к БД'))
        // eslint-disable-next-line no-console
        .catch(() => console.log('Ошибка подключения к базе данных'));
}
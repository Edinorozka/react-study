import mongoose from 'mongoose'

const mongodbUrl = "mongodb://localhost/"
const dbName = "techDb"

export const dbConnect = async () => {
    mongoose
        .connect(`${mongodbUrl}${dbName}`,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            family: 4,
        })
        // eslint-disable-next-line no-console
        .then(() => console.log('Успешное подключение к БД'))
        // eslint-disable-next-line no-console
        .catch(() => console.log('Ошибка подключения к базе данных'));

    /*try {
        await mongoose.connect(`${mongodbUrl}${dbName}`)
        console.log("\x1b[32m", '[DB] Connect success')
    } catch (error) {
        console.log("error get", error);
        //console.log("\x1b[31m", '[DB] Connect error')
    }*/
}
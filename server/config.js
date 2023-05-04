import dotenv from 'dotenv'

dotenv.config();

const {PORT = 3901, MONGODB_URL = "http://127.0.0.1/techDb", JWT_SECRET = 'secret'} = process.env;

export {PORT, MONGODB_URL, JWT_SECRET}
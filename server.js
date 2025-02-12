import express from 'express';
import {SERVER_PORT, APP_URL} from './config';
import cors from 'cors';


const app = express();
const router = express.Router();

app.use(cors({
    origin: APP_URL,
    methods : ["POST"],
    credentials : true
}));

app.use(express.json());
app.use(express.urlencoded({extended: true}));



let server = app.listen(APP_PORT, () => {
    console.log(`Server started on port ${APP_PORT}`)
})

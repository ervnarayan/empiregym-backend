import express from 'express';
import {SERVER_PORT, APP_URL} from './config';
import cors from 'cors';
import router from './routers';


const app = express();
app.use(cors({
    origin: APP_URL,
    methods : ["POST"],
    credentials : true
}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api', router);


let server = app.listen(SERVER_PORT, () => {
    console.log(`Server started on port ${SERVER_PORT}`)
})

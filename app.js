import express, { Router, urlencoded } from "express";
import {router} from './router.js'
const PORT = process.env.PORT || 5000
const app = express();

app.use(express.json());

app.use(urlencoded({extended:false}))



app.use('/api/users', router)


app.listen(PORT, ()=>{
    console.log(`server starts at PORT ${PORT}`)
})
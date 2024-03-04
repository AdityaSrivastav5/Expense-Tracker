const express = require('express')
const cors = require('cors');
const { db } = require('./db/db');
const {readdirSync} = require('fs');
const app = express();

require('dotenv').config()

const PORT = process.env.PORT || 3004

const corsConfig = {
    origin : "expense-tracker-pw9d-g5zgic8ce-adityas-projects-557137f9.vercel.app/",
    credential: true,
    methods: ["GET","POST","DELETE","PUT"]

};

//middlewares
app.use(express.json());
app.options("",cors(corsConfig));
app.use(cors());

//routes
readdirSync('./routes').map((route)=> app.use('/',require('./routes/'+ route)))

const server = () => {
    db()
    app.listen(PORT,()=>{
        console.log('listening to port:',PORT)
    })
} 

server()

//mongodb+srv://adityasrivastav863:iamaditya05@cluster0.bqful37.mongodb.net/?retryWrites=true&w=majority

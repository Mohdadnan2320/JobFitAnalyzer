const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const { connectDB } = require('./db/db');
const uploadRoute = require('./routes/uploadRoute')
const app = express();


app.use(cors({
    origin: process.env.FRONTENR_URL,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'], 
    credentials: true  
}));


app.use(express.json())
app.use(express.urlencoded({extended: true}))

const PORT = process.env.PORT;
connectDB();

app.use('/api', uploadRoute)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
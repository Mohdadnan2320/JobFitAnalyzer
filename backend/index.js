const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const { connectDB } = require('./db/db');
const uploadRoute = require('./routes/uploadRoute')
const app = express();

// app.use(cors({
//     origin: process.env.FRONTEND_URL,
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type', 'Authorization'], 
//     credentials: true  
// }));

// const corsOptions = {
//     origin: process.env.FRONTEND_URL,  // Make sure this matches the frontend URL
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],  // Allow these methods
//     allowedHeaders: ['Content-Type', 'Authorization'],  // Allow these headers
//     credentials: true,  // Allow cookies if needed (for authorization)
//   };

// // Apply CORS middleware
// app.use(cors(corsOptions));

// // Handle preflight OPTIONS requests
// app.options('*', cors(corsOptions));

const allowedOrigins = process.env.FRONTEND_URL;
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", process.env.FRONTEND_URL);
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
  });

const corsOptions = {
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    credentials: true,
    optionsSuccessStatus: 200 
};

app.use(cors(corsOptions))

app.use(express.json())
app.use(express.urlencoded({extended: true}))

const PORT = process.env.PORT;
connectDB();

app.use('/api', uploadRoute)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
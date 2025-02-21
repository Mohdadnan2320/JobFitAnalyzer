const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const { connectDB } = require('./db/db');
const uploadRoute = require('./routes/uploadRoute')
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}))

const PORT = process.env.PORT;
connectDB();
const allowedOrigins = process.env.VITE_BACKEND_URL .split(",");
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", process.env.VITE_BACKEND_URL );
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


app.use('/api', uploadRoute)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
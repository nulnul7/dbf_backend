import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from "dotenv";
import colors from 'colors'
import PortfolioRoute from './routes/portfolioRoute.js'
import BlogRoute from './routes/blogRoute.js'
import userRoute from './routes/userRoute.js';
import authRoute from './routes/authRoute.js'
import cookieParser from "cookie-parser";
import cookies from 'cookie-parser'


const app = express();
dotenv.config();

const port = process.env.PORT || 5500;


const connectDB = async () => {
    try {
        mongoose.connect(process.env.MONGO_URI)
        console.log('monggoDB connected'.cyan);
    } catch (error) {
        throw error;
    }
}

// middlewares

//sama dengan kode yang dibawah
// const allowedOrigins = ['http://localhost:3001', 'http://localhost:3000'];

// app.use(cors({
//     credentials: true,
//     origin: function (origin, callback) {
//         if (!origin || allowedOrigins.includes(origin)) {
//             callback(null, true);
//         } else {
//             callback(new Error('Origin not allowed by CORS'));
//         }
//     }
// }));

app.use(cors({
    credentials: true, origin: ['http://localhost:3001', 'http://localhost:3000', 'https://api.cloudinary.com']
}))

app.use(express.json());
app.use(cookieParser());
app.use(cookies());

app.use('/5R2I/portfolio', PortfolioRoute)
app.use('/5R2I/blog', BlogRoute)
app.use('/5R2I/user', userRoute)
app.use('/5R2I/auth', authRoute)




// next error handler
app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || 'terjadi Error pada BACKEND'

    return res.status(status).json({
        success: false,
        status: status,
        message: message,
        stack: err.stack
    })
})

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
    app.use(express.static('admin/build'))
}

app.listen(port, () => {
    try {
        connectDB()
    } catch (error) {
        console.log('error connect mongoDB');
    }
    console.log(`Backend Server working well on port ${port}`)
})



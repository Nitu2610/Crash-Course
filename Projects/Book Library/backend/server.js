import express from 'express';
import mongoose from 'mongoose'; 
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import myBookRoutes from './routes/myBookRoutes.js';


dotenv.config();

const app=express();
const PORT=process.env.PORT || 5000;

app.use(cors({
    origin: 'http://localhost:5173',
    credentials:true
}))

app.use(express.json());
app.use(cookieParser());

app.use('/api/auth',authRoutes);
app.use('/api/mybooks', myBookRoutes);


mongoose.connect(process.env.MONGO_URI)
.then (()=>{
    console.log('✅ Connected to MongoDB');
    app.listen(PORT,()=> console.log((`🚀 Server running on http://localhost:${PORT}`)));
}).catch((err)=> console.log('MongoDB error:', err));

import express from 'express';
import mongoose from 'mongoose';
const app = express();
import cors from 'cors';
const port = 3000;
import authRoutes from './routes/auth';
import todoRoutes from './routes/todo';
app.use(cors());
app.use(express.json());
app.use("/auth", authRoutes);
app.use("/todo", todoRoutes);
app.listen(port, () => {
    console.log(`Server running at port:${port}`)
})
mongoose.connect('');
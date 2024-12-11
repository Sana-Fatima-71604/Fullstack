import express from"express";
import cors from 'cors';
const app = express();
import dotenv from"dotenv";
// import task from "./routes/taskRoutes.js";
import user from "./routes/userRoutes.js";
import movies from './routes/movieRoutes.js';
import course from './routes/couseRoutes.js'
import connectDB from'./config/db.js';
dotenv.config();
app.use(express.json());

app.use(cors());

connectDB();

// app.use('/api/task', task);

app.use('/api/user', user);

app.use('/api/course', course);

app.use('/api/movies', movies);

app.listen(process.env.PORT, ()=> {
    console.log("The server is running at the port number 4000")
})

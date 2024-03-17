import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { errorHandler } from './middlewares/ErrorHandler.js';
import './db/server.js';

import authRouter from './routes/authRouter.js';
import booksRouter from './routes/booksRouter.js';


const app = express();
const PORT = 4000;
app.use(cors({ origin: 'https://prismaticc.netlify.app/', credentials: true }));

app.use(express.json());
app.use(cookieParser());


app.use('/auth', authRouter);
app.use('/books', booksRouter);


app.use(errorHandler);
app.listen(PORT, () => console.log(`Server is running on port:${PORT}`));

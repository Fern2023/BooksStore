import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { errorHandler } from './middlewares/ErrorHandler.js';
import './db/server.js';

import authRouter from './routes/authRouter.js';
import booksRouter from './routes/booksRouter.js';


const app = express();
const PORT = 4000;

app.use(cors()); // Enable Cross-Origin-Resource Sharing
// app.use(cors({ origin: 'https://website.com' })); allow access only from prod. website
// app.use(cors({ origin: ['https://website.com', 'https://anotherwebsite.com'] }));
app.use(express.json()); // Parse incomming requests with JSON payloads
app.use(cookieParser()); // cookie-parser

// ROUTES
app.use('/auth', authRouter);
app.use('/books', booksRouter);


// Error Handler
app.use(errorHandler);
app.listen(PORT, () => console.log(`Server is running on port:${PORT}`));

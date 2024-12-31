// const express = require('express');
import dotenv from 'dotenv';
dotenv.config({
    path: '.env'
})

import express from 'express';
import dbConnection from './config/db.js';
import cookieParser from 'cookie-parser';
import userRoute from './routes/userRoute.js'

dbConnection();


const app = express();

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());


// api
app.use('/api/v1',userRoute)

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});

app.get('/', (req, res) => {
    res.send('Server is running!');
});

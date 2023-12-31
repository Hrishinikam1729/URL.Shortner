const express = require('express');
const app = express();
const urlRoute = require('./Routes/url');
const { connectToMongoDB } = require('./Connection');
const { Mongoose } = require('mongoose');
const PORT = 8001;


connectToMongoDB("mongodb://127.0.0.1:27017/NEWDB").then(() => { console.log("Connected to MongoDb") });
app.use(express.json());
app.use("/url", urlRoute);
app.listen(PORT, () => { console.log(`App listening on port ${PORT}..`) });
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();  
// #contains environment varibale in dotenv for mongodb atlas

const app = express();
const port = process.env.PORT || 5050;

app.use(cors());
// #cors is middleware
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri,{useNewUrlParser:true});
const connection = mongoose.connection;
connection.once('open',() => {console.log("mongo successful");
})
const exerciseRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use('/exercises',exerciseRouter);
app.use('/users',usersRouter);

app.listen(port,() => {
    console.log(`Server is running on port ${port}`);
});
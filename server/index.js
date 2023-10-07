const express = require('express');
const app = express();
const cors = require('cors');
const userController = require('./controllers/userController');

require("dotenv").config(); 

const {PORT} = process.env;
app.use(express.json());
app.use(cors());

app.post('/register', userController.register);
app.post('/login', userController.login);


app.listen(PORT, console.log(`Running on port ${PORT}`));
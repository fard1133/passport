require("dotenv").config();
require('./src/db');
const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.json());

app.use(express.urlencoded({ extended: true }));


app.use(cors())


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server started at port: ${process.env.PORT}`)
})

module.exports= {app}







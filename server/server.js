//Importera alla nödvändiga moduler
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const cors = require('cors');

//Skapar en express app

const app = express();

//Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

//Metoder med axios
//GET


//Lyssna på porten 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servern lyssnar på port ${PORT}`)
})

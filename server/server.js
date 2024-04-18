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
app.get('/cities', async (req, res) => {
    try {
        //vi testar att göra ett axios anrop till vår adress
        const response = await axios.get('https://avancera.app/cities');
        res.json(response.data);
    } catch (error) {
        //Om det uppstår ett fel, skicka tillbaka nedan som svar
        res.status(500).json({ error: error.message });
    }
});

//POST, vi skickar in en ny stad till avancera
app.post('/cities', async (req, res) => {
    try {
        const { name, population } = req.body;
        const response = await axios.post('https://avancera.app/cities', {
            name,
            population
        });
        //Skicka tillbaka det nya objektet som JSON
        res.json(response.data);
    } catch (error) {
        //Om det uppstår ett fel, skicka tillbaka nedan som svar
        res.status(500).json({ error: error.message });
    }
});

//Lyssna på porten 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servern lyssnar på port ${PORT}`);
});

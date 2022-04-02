//Definicja modułów
const bodyParser = require("body-parser");
const express = require("express");

const sequelize = require('./db/database');
const Client = require ('./db/Client');

sequelize.sync().then(() => console.log('db is ready'));

const app = express();

//Wykorzystywane rozszerzenia
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

// Informacja przy wejsciu na adres serwera
app.get('/', (req_name, res_name) =>{
    console.log(req_name);
    res_name.send('Serwer XevaApp działa!');
});

//API dla formularza 1 dla klienta
app.post('/clients', async (req, res) => {
    await Client.create(req.body);
    res.send('Client is insreted in DB');
})

app.get('/clients', async (req, res) => {
    const clients = await Client.findAll();
    res.send(clients);
})

app.get('/clients/:id', async (req, res) => {
    const reqID = req.params.id;
    const client = await Client.findOne({ where: { id: reqID}});
    res.send(client);
})

// Ustawienie portu nasłuchiwania serwera
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Serwer wystartował na porcie ${PORT}.`);
});
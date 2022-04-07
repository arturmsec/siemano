// Definicja modułów
const bodyParser = require('body-parser');
const express = require('express');
var cors = require('cors');

const sequelize = require('../db/database');
const Client = require('../db/Client');

sequelize.sync().then(() => console.log('db is ready'));

const app = express();

// Wykorzystywane rozszerzenia
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Informacja przy wejsciu na adres serwera
app.get('/', (reqName, resName) => {
  console.log(reqName);
  resName.send('Serwer XevaApp działa!');
});

// API dla formularza dla klienta
app.post('/clients', async (req, res) => {
  console.log('body request', req.body);

  await Client.create(req.body);
  res.send('Client is insreted in DB');
});

app.get('/clients', async (req, res) => {
  const clients = await Client.findAll();
  res.send(clients);
});

app.get('/clients/:id', async (req, res) => {
  const reqID = req.params.id;
  const client = await Client.findOne({ where: { id: reqID } });
  res.send(client);
});

// Ustawienie portu nasłuchiwania serwera
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Serwer wystartował na porcie ${PORT}.`);
});

const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const db = require("./db/clients");

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());


//Dane klientów do testu
//const clients = [
//    { id: 1, name: 'Jonh Doe', telephone: '111 222 333', mail: 'john.doe@xyz.com', product: 'window'},
//    { id: 2, name: 'Taco Bell', telephone: '999 998 997', mail: 'taco.bell@xyz.com', product: 'window'},
//    { id: 3 , name: 'Jade Smith', telephone: '555 555 555', mail: 'jade.smith@xyz.com', product: 'window'}
//]

// Informacja przy wejsciu na adres serwera
app.get('/', (req_name, res_name) =>{
    console.log(req_name);
    res_name.send('Serwer XevaApp działa!');
});

// POST do bazy danych
app.post("/clients", async (req, res) => {
    const results = await db.createClient(req.body);
    res.status(201).json({ id:results[0] });
})

//Bez wykorzystania DB
//API for client_form_1 - PUT methods
app.post('/api/clients', (req,res) => {
    //Reqest value validation - do walidacji lepiej korzystać z modułu joy
    if (!req.body.name || req.body.name.length < 3) {
        // 400 - Bad Request
        res.status(400).send('Imię wymaga conajmniej trzech znaków.');
        return;
    }
    const client = {
        id: clients.length + 1,
        name: req.body.name,
        telephone: req.body.telephone,
        mail: req.body.mail,
        product: req.body.product
    };
    clients.push(client);
    res.send(client);
});

//GET commands - tests 
app.get('/api/clients', (req, res) => {
    res.send(clients);
});

app.get('/api/clients/:id', (req, res) => {
    const client = clients.find(c => c.id === parseInt(req.params.id));
    if (!client) res.status(404).send('Nie znaleziono klienta o takim ID'); //Zwrocenie błędu o nieistniejacym ID
    res.send(client);
});

// Ustawienie portu nasłuchiwania serwera
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Serwer wystartował na porcie ${PORT}.`);
});
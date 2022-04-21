// Definicja modułów
const bodyParser = require('body-parser');
const express = require('express');
const { body,validationResult } = require('express-validator'); //wymaga instalacji: npm install --save express-validator
var cors = require('cors');
const bcrypt = require('bcrypt');
const session = require('express-session');

const sequelize = require('../db/database');
const Client = require('../db/Client');
const User = require('../db/User');

sequelize.sync().then(() => console.log('db is ready'));

const app = express();

// Wykorzystywane rozszerzenia
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
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
app.post('/clients',
body('name').isLength({ min: 1 }), //obsluga bledow
body('phone').isLength({ min: 1 }),
body('nmail').isEmail(),
body('product').isLength({ min: 1 }),
body('postCode').isLength({ min: 1 }),
body('city').isLength({ min: 1 }),
body('street').isLength({ min: 1 }),
async (req, res) => {
  const errors = validationResult(req);
  console.log('body request', req.body);
  if(!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() }); //jesli wystapia bledy, to zwraca jsona z informacjami o bledach; jsona trzeba bedzie odpowiednio pokazac po stronie klienta
  }
  
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

// PANEL ADMINISTRATORA

//REJESTRACJA - zapisuje nie hashuje hasła

app.post('/users/registration', async (req, res) => {
  console.log('body request', req.body);
  await User.create(req.body);
  res.send('User has been registered.');

  // Proba hashowania hasła
  /*try {
    console.log('body request', req.body);
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    await User.create(req.body);
    res.send('User has been registered.');
  } catch {
    res.status(500).send();
  }*/

});

//LOGOWANIE
app.post('/users/login', async (req, res) => {
  
  let login = req.body.login;
  let pass = req.body.password

  //Sprawdzenie poprawności danych
  if (login && pass){
    //odwołanie do bazy danych
    const user = await User.findByPk(login);

    if (pass == user.password){
        //Autentykacja użytownika
        req.session.loggedin = true;
        req.session.username = login;

        //Przeniesienie do strony panelu admina/uzytkownika
        res.redirect('/home');
    } else {
      res.send('Niepoprawny login lub hasło!');
    }
    res.end();
  } else {
    res.send('Proszę podać login oraz hasło!');
    res.end();
  }
});

// Komunikat po wejściu na panel admina/uzytkownika (roboczo domena /home)
app.get('/home', function(req, res) {
	// Jesli uzytkownik jest zalogowany
	if (req.session.loggedin) {
		// Output username
		res.send('Witaj ponownie, ' + req.session.username + '!');
	} else {
		// Jeśli nie jest zalogowany
		res.send('Proszę się zalogowć aby wyświetlić tą stronę!');
	}
	res.end();
});


// Ustawienie portu nasłuchiwania serwera
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Serwer wystartował na porcie ${PORT}.`);
});

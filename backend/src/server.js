// Definition of modules
const bodyParser = require('body-parser');
const express = require('express');
const { body,validationResult } = require('express-validator'); //wymaga instalacji: npm install --save express-validator
var cors = require('cors');
const bcrypt = require('bcrypt');
const session = require('express-session');
const serveStatic = require('serve-static'); //used for Heroku online serving
const path = require('path'); //used for Heroku online serving
const sequelize = require('../db/database');
const Client = require('../db/Client');
const User = require('../db/User');

sequelize.sync().then(() => console.log('db is ready'));

const app = express();

app.use('/', serveStatic(path.join(__dirname, '../../vue/dist'))); // frontend source code for heroku
// Extensions
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Information after entering the server address
app.get('/', (reqName, resName) => {
  console.log(reqName);
  resName.send('Serwer XevaApp działa!');
});

// Client API - form for the client

// Adding a client
app.post('/clients',
body('name').isLength({ min: 1 }), // Error handling
body('phone').isLength({ min: 1 }),
body('mail').isEmail(),
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

// Getting all clients
app.get('/clients', async (req, res) => {
  const clients = await Client.findAll();
  res.send(clients);
});

// Getting client with specified ID
app.get('/clients/:id', async (req, res) => {
  const reqID = req.params.id;
  const client = await Client.findOne({ where: { id: reqID } });
  res.send(client);
});

// ADMINISTRATOR PANEL

// Registration - saves but does not hashes passwords

app.post('/users/registration', async (req, res) => {
  console.log('body request', req.body);

  if(req.body.login.length > 255 || req.body.login.length < 3)
    {
        res.status(400);
        res.send('Login must be between 3 and 255 characters');
        return;
    }
  if(req.body.password.length > 255 || req.body.password.length < 5)
    {
        res.status(400);
        res.send('Password must be between 5 and 255 characters');
        return;
    }
    const existingUser = await User.findOne({ where: { login: req.body.login } });
    if(existingUser !== null)
    {
       res.status(400);
       res.send('User with this login exists')
    }
  await User.create(req.body);
  res.send('User has been registered.');

  // Attempt to secure a password

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

// Login API 
app.post('/users/login', async (req, res) => {
  
  let login = req.body.login;
  let pass = req.body.password

  // Data validation
  if (login && pass){
    // DB reference
    const user = await User.findByPk(login);

    if (pass == user.password){
        // User auth
        req.session.loggedin = true;
        req.session.username = login;

        // Redirect to admin/user panel
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

// Message after entering the user/admin panel (for tests /home domain)
app.get('/home', function(req, res) {
	// User logged in
	if (req.session.loggedin) {
		// Message with username
		res.send('Witaj ponownie, ' + req.session.username + '!');
	} else {
		// User do not logged in
		res.send('Proszę się zalogowć aby wyświetlić tą stronę!');
	}
	res.end();
});


// Setting server listening port
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Serwer wystartował na porcie ${PORT}.`);
});


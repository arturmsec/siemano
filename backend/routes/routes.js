const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../db/User');
const userData = require('../db/userData');


  // Registration
router.post('/register', async (req, res) => {
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
         res.send('User with this login exists');
         return;
      }

    // add new user with hashed password to db
    try {
      const{login, password} = req.body;
      //const hash = await bcrypt.hash(password, 10);
      const user = await User.create({ login: login, password: password, });

    // Creating new userData record assosiated to User
      await userData.create( { userId: user.id } );
      res.send('User has been registered.');

    
    } catch(e) {
      console.log(e);
      res.status(500).send("Something goes wrong")
    }

  });

  
  // Login with implemented JWT Auth
router.post('/login', async (req, res) => {
    
    let login = req.body.login;
    let pass = req.body.password;
    console.log(login, pass)
    
    // Data validation
    if (login && pass){
      // DB reference
      const user = await User.findOne({ where: { login: login } });

      // Checking if the given user exists in the DB
      try {
        // Checking if the given password matches that in the DB
        if (pass == user.password){
          // User auth

          const token = jwt.sign( { login: login }, "secret"); 

          //res.send(token)

          res.cookie('auth-jwt', token, {
              httpOnly: true,
              maxAge: 24 * 60 * 60 * 1000 // 1 Day - value in miliseconds
          });
        
          res.send({
            message: 'success'
          });

        } else {
          return res.status(401).send({
            message: 'Niepoprawny login lub hasło!'
          });
        }
      } catch (error)
      {
        return res.status(401).send({
          message: 'Niepoprawny login lub hasło!'
        });
      }

    } else {
      return res.status(406).send({
          message: 'Proszę podać login oraz hasło!'}
          );
    }
  });

// Getting the user data to validate cookie and privileges
router.get ('/user', async(req, res) => {
    try {
      const cookie = req.cookies['auth-jwt'];

      const claims = jwt.verify(cookie, 'secret');

      if (!claims){
        return res.status(401).send({
            message: 'unauthenticated'
        })
      }
    
      const login = claims.login;
      const user = await User.findOne({ where: { login: login } }); // User values
      const user_data = await userData.findOne({ where: { userId: user.id } }); // userData values
      const {password, ...data} = await user.toJSON();

      res.send({ data, user_data });
    } catch (e)
    {
        return res.status(401).send({
            message: 'unauthenticated'
        })
    }
})

// Logout - creating new cookie that expires immediately
router.post('/logout', (req, res) => {
    res.cookie('auth-jwt', '', {maxAge: 0});

    res.send({
        message: 'success'
    })
})



module.exports = router
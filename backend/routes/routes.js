const router = require('express').Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../db/User');

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
         res.send('User with this login exists')
      }

    // const salt = await bcrypt.genSalt(10);
    // const hashedPassword = await bcrypt.hash(req.body.password, salt);
    /*
    const user = new User({
        login: req.body.login,
        password: hashedPassword
    })
    */

    await User.create(req.body);
    res.send('User has been registered.');
  
  
  });
  
  // Login with implemented JWT Auth
router.post('/login', async (req, res) => {
    
    let login = req.body.login;
    let pass = req.body.password;
    console.log(login, pass)
    // Data validation
    if (login && pass){
      // DB reference
      const user = await User.findByPk(login);
  
      if (pass == user.password){
          // User auth
          //req.session.loggedin = true;
          //req.session.username = login;

          const token = jwt.sign( { login: login }, "secret");

          //res.send(token)

          res.cookie('jwt', token, {
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

    } else {
      return res.status(406).send({
          message: 'Proszę podać login oraz hasło!'}
          );
    }
  });

// Getting the user data to validate cookie and privileges
router.get ('/user', async(req, res) => {
    try {
    const cookie = req.cookies['jwt'];

    const claims = jwt.verify(cookie, 'secret');

    if (!claims){
        return res.status(401).send({
            message: 'unauthenticated'
        })
    }
    
    const login = claims.login;
    const user = await User.findByPk(login);
    const {password, ...data} = await user.toJSON();

    res.send(data);
    } catch (e)
    {
        return res.status(401).send({
            message: 'unauthenticated'
        })
    }
})

// Logout - creating new cookie that expires immediately
router.post('/logout', (req, res) => {
    res.cookie('jwt', '', {maxAge: 0});

    res.send({
        message: 'success'
    })
})


module.exports = router
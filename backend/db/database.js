const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('XevaApp_db', 'user', 'pass', {
    dialect: 'sqlite',
    host: './xevaapp.sqlite3'
})

module.exports = sequelize;
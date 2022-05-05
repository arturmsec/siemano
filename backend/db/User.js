const { Model, DataTypes} = require('sequelize');
const sequelize = require('./database');
//const Privilige = require('./Privilege');

class User extends Model {}

User.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    login: {
        type: DataTypes.STRING,
        unique: true
    },
    password: {
        type: DataTypes.STRING
    },
    privilige: {
        type: DataTypes.BOOLEAN
    },
}, {
    sequelize,
    modelName: 'user',
    timestamps: false
})

//User.hasOne(Privilige);

module.exports = User;
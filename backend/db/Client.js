const { Model, DataTypes} = require('sequelize');
const sequelize = require('./database');

class Client extends Model {}

Client.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING
    },
    phone: {
        type: DataTypes.INTEGER
    },
    mail: {
        type: DataTypes.STRING
    },
    product: {
        type: DataTypes.STRING
    },
    postCode: {
        type: DataTypes.STRING
    },
    city: {
        type: DataTypes.STRING
    },
    street: {
        type: DataTypes.STRING
    },
    homeNumber: {
        type: DataTypes.STRING
    },
    localNumber: {
        type: DataTypes.STRING
    },
    message: {
        type: DataTypes.STRING
    },
}, {
    sequelize,
    modelName: 'client',
    timestamps: false
})

module.exports = Client;
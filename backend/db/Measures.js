const { Model, DataTypes} = require('sequelize');
const sequelize = require('./database');

class Measures extends Model {}

Measures.init({
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
    worker: {
        type: DataTypes.STRING
    },
}, {
    sequelize,
    modelName: 'measures',
    timestamps: false
})

module.exports = Measures;
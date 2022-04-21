const { Model, DataTypes} = require('sequelize');
const sequelize = require('./database');

class Privilige extends Model {}

Privilige.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    privilige: {
        type: DataTypes.STRING,
        unique: true
    },
}, {
    sequelize,
    modelName: 'privilige',
    timestamps: false
})

module.exports = Privilige;
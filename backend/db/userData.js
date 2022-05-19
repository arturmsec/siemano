const { Model, DataTypes} = require('sequelize');
const sequelize = require('./database');

class userData extends Model {}

userData.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    privilige: {
        type: DataTypes.STRING,
        defaultValue: 'admin'
    },
    firsname: {
        type: DataTypes.STRING,
        defaultValue: 'John'
    },
    lastname: {
        type: DataTypes.STRING,
        defaultValue: 'Doe'
    },
}, {
    sequelize,
    modelName: 'user_data',
    timestamps: false
})


module.exports = userData;
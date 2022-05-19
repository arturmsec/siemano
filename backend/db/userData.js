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
        unique: true
    },
    firsname: {
        type: DataTypes.STRING,
        unique: true
    },
    lastname: {
        type: DataTypes.STRING,
        unique: true
    },
}, {
    sequelize,
    modelName: 'user_data',
    timestamps: false
})


module.exports = userData;
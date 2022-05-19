const { Model, DataTypes} = require('sequelize');
const sequelize = require('./database');
//const userData = require('./userData');

class User extends Model {}

User.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true
    },
    login: {
        type: DataTypes.STRING,
        unique: true,
        require:true
    },
    password: {
        type: DataTypes.STRING,
        require:true
    },
    /*user_data_id: {
        // FK in userData table
        type: DataTypes.INTEGER,
        require:true,
        //allowNull:false
    },*/
}, {
    sequelize,
    modelName: 'user',
    timestamps: false
});

class Data extends Model {}

Data.init({
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
    modelName: 'data',
    timestamps: false
})

Data_User = Data.hasOne(User);
User_Data = User.belongsTo(Data);

module.exports = User;
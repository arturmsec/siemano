//const knex = require("./knex");
const { Model, DataTypes} = require('sequelize');
const sequelize = require('./database');

class Client extends Model {}

Client.init({
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
    }
}, {
    sequelize,
    modelName: 'client',
    timestamps: false
})

module.exports = Client;

/* KNEX
function createClient(client) {
    return knex("clients").insert(client);
}

function getAllClients() {
    return knex("clients").select("*");
}

function deleteClient(id) {
    return knex("clients").where("id", id).del();
}

function updateClient(id, client) {
    return knex("clients").where("id", id).update(client);
}

module.exports = {
    createClient,
    getAllClients,
    deleteClient,
    updateClient
}
*/
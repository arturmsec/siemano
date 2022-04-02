const knex = require("knex");

const connectedKnex = knex({
    client: "sqlite3",
    connection: {
        filename: "xevaapp.sqlite3"
    }
});

module.exports = connectedKnex;
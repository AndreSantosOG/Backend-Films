const sqliteConnection = require("../../sqlite");
const createUsers = require("./createUsers");

async function migrationsRun(){
   const schemas = [
    createUsers
   ].join('');//colocando oq vai separar no caso nada

   sqliteConnection()
   .then(db => db.exec(schemas)) //promessa
   .catch(error =>console.log(error));//caso dar erro
}

module.exports = migrationsRun;
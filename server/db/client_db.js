const sqlite = require("sqlite3").verbose();
const {
  CREATE_TABLE_FAVORITE_IMAGES,
  CREATE_TABLE_SEARCH_HISTORY,
} = require("./sql_queries");

const clientDB = new sqlite.Database("./sqliteDB");
process.on("SIGINT", () => clientDB.close());

//Creating tables
clientDB.run(CREATE_TABLE_SEARCH_HISTORY);
clientDB.run(CREATE_TABLE_FAVORITE_IMAGES);

module.exports = clientDB;

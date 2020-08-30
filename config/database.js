const util = require("util");
const mysql = require("mysql");

module.exports = {
  makeDb: () => {
    const connection = mysql.createConnection(
      {
        host: process.env.DB_SERVER,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        port: process.env.DB_PORT,
        database: process.env.DB_DATA_BASE,
        connectTimeout: 0,
      },
      "single"
    );

    return {
      query(sql, args) {
        return util.promisify(connection.query).call(connection, sql, args);
      },
      close() {
        return util.promisify(connection.end).call(connection);
      },
      beginTransaction() {
        return util.promisify(connection.beginTransaction).call(connection);
      },
      commit() {
        return util.promisify(connection.commit).call(connection);
      },
      rollback() {
        return util.promisify(connection.rollback).call(connection);
      },
    };
  },
  async Transaction(db, callback) {
    try {
      await db.beginTransaction();
      await callback();
      await db.commit();
      return db.commit();
    } catch (err) {
      await db.rollback();
      return err;
    }
  },

  testConection: mysql.createConnection(
    {
      host: process.env.DB_SERVER,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      port: process.env.DB_PORT,
      database: process.env.DB_DATA_BASE,
    },
    "single"
  ),
};

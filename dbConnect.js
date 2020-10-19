const path = require("path");
require("dotenv").config(path.join(__dirname, "server/.env"));

const { Pool } = require("pg");

const devConfig = {
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
};
const proConfig = {
  connectionString: process.env.DATABASE_URL,
};

const pool = new Pool(
  process.env.node_ENV === "production" ? proConfig : devConfig
);
module.exports = pool;

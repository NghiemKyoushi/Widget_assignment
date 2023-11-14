import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT;
const sequelize = new Sequelize(
  process.env.MYSQL_DATABASE,
  process.env.MYSQL_USER,
  process.env.MYSQL_PASSWORD,
  {
    host: "localhost",
    dialect: "mysql",
    port: process.env.MYSQL_PORT,
  }
);

export { port, sequelize };

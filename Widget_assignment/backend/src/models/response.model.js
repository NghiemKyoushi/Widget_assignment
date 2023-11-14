import { DataTypes } from "sequelize";
import { sequelize } from "../config";

const Response = sequelize.define("responses", {
  questionId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  response: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

sequelize
  .sync()
  .then(() => {
    console.log("Response table created successfully!");
  })
  .catch((error) => {
    console.error("Unable to create table : ", error);
  });

export { Response };

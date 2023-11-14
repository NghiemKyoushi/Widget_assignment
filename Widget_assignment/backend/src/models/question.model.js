import { DataTypes } from "sequelize";
import { sequelize } from "../config";

const Question = sequelize.define("questions", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  placeHolder: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  isRequired: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
});

sequelize
  .sync()
  .then(() => {
    console.log("Question table created successfully!");
  })
  .catch((error) => {
    console.error("Unable to create table : ", error);
  });

export { Question };

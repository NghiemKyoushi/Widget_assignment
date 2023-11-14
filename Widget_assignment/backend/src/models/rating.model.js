import { DataTypes } from "sequelize";
import { sequelize } from "../config";

const Rating = sequelize.define("rating", {
  numberRate: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

sequelize
  .sync()
  .then(() => {
    console.log("Rate table created successfully!");
  })
  .catch((error) => {
    console.error("Unable to create table : ", error);
  });

export { Rating };

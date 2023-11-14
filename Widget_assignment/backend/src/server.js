import express from "express";
import bodyParser from "body-parser";
import router from "./routes/index.js";
import { port, sequelize } from "./config/index.js";
import cors from "cors";
const app = express();
app.use(cors());
app.all("/*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database: ", error);
  });

app.use(bodyParser.json());

app.use("/feedback", router);

app.get("/check", (req, res) => {
  res.send(res);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});

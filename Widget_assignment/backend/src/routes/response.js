import express from "express";
import { responseController } from "../controllers/response.controller";

const responseRouter = express.Router();

responseRouter
  .get("", (req, res) => {
    res.send("get all");
  })
  .post("", (req, res) => {
    try {
      responseController.insertMany(req.body);
      res.send(200);
    } catch (error) {
      res.send(400);
    }
  });

export default responseRouter;

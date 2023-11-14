import express from "express";
import { ratingController } from "../controllers/rating.controller";
const ratingRouter = express.Router();

ratingRouter.get("", ratingController.getAll).post("", (req, res) => {
  try {
    const { numberRate } = req.body;
    ratingController.insertOne({
      numberRate: numberRate,
    });
    res.sendStatus(200)
  } catch (error) {
    res.send(400);
  }
});

export default ratingRouter;

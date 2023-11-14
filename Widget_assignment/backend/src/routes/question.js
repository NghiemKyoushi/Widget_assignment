import express from "express";
import { questionController } from "../controllers/question.controller";

const questionRouter = express.Router();

questionRouter.get("", questionController.getAll).post("", (req, res) => {
  try {
    const { title, type, placeHolder, isRequired } = req.body;
    questionController.insertOne({
      title,
      type,
      placeHolder,
      isRequired,
    });
    res.send(200);
  } catch (error) {
    res.send(400);
  }
});

questionRouter
  .patch("/:id", (req, res) => {
    try {
      const { title, type, id } = req.body;
      const bodySend = {
        title,
        type,
        placeHolder,
        isRequired,
        id,
      };
      questionController.updateQuestion(bodySend);
      res.send(200);
    } catch (error) {
      res.send(400);
    }
  })
  .delete("/:id", (req, res) => {
    try {
      const { id } = req.params;
      questionController.deleteQuestion(id);
      res.sendStatus(200);
    } catch (error) {
      res.send(400);
    }
  });

export default questionRouter;

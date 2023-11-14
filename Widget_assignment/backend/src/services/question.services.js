import { Question } from "../models";

const getAll = async (req, res) => {
  const questions = await Question.findAll();
  return questions;
};
const getOne = async (req, res) => {
  const question = await Question.findOne({ where: { title: "He" } });
  return question;
};
const insertOne = async (req, res) => {
  const question = await Question.create({
    type: req.type,
    title: req.title,
    placeHolder: req.placeHolder,
    isRequired: req.isRequired,
  });
  return question;
};
const updateQuestion = async (req, res) => {
  const question = await Question.findOne({ where: { id: req.id } });
  question.title = req.title;
  question.type = req.type;
  question.placeHolder = req.placeHolder;
  (question.isRequired = req.isRequired), question.save();
};
const deleteQuestion = async (req, res) => {
  await Question.destroy({
    where: {
      id: req,
    },
  });
};
export const questionServices = {
  getAll,
  getOne,
  insertOne,
  updateQuestion,
  deleteQuestion,
};

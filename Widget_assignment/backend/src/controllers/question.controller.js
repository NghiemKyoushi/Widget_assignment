import { questionServices } from "../services/question.services";

const getAll = async (req, res) => {
  try {
    const questions = await questionServices.getAll();
    if (questions.length > 0) {
      let formatResponse = [];
      questions.map((item) => {
        formatResponse.push({
          id: item.id,
          type: item.type,
          title: item.title,
          placeHolder: item.placeHolder,
          isRequired: item.isRequired,
        });
      });
      res.send(formatResponse);
    } else {
      res.send([]);
    }
  } catch (error) {
    res.send(400);
  }
};

const getOne = async (req, res) => {
  const question = await questionServices.findOne({ where: { title: "He" } });
  res.send(question);
};
const insertOne = async (req, res) => {
  const question = await questionServices.insertOne(req);
};

const updateQuestion = async (req, res) => {
  const question = await questionServices.updateQuestion(req);
};
const deleteQuestion = async (req, res) => {
  const question = await questionServices.deleteQuestion(req);
};

export const questionController = {
  getAll,
  getOne,
  insertOne,
  updateQuestion,
  deleteQuestion,
};

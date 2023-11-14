import { Rating } from "../models";

const insertOne = async (req, res) => {
  const rating = await Rating.create({
    numberRate: req.numberRate,
  });
  return rating;
};
const getAll = async (req, res) => {
  const rating = await Rating.findAll();
  return rating;
};
export const ratingServices = { getAll, insertOne };

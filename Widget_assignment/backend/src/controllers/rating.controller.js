import { ratingServices } from "../services/rating.services";
const insertOne = async (req, res) => {
  const response = await ratingServices.insertOne(req);
};

const getAll = async (req, res) => {
  const rating = await ratingServices.getAll();
  let formatRating = [];
  if (rating) {
    rating.map((item) => {
      formatRating.push({
        id: item.id,
        numberRate: item.numberRate,
      });
    });
  }
  res.send(formatRating);
};

export const ratingController = { getAll, insertOne };

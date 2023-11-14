import { responseServices } from "../services/response.services";


const insertMany = async (req, res) => {
  const response = await responseServices.insertMany(req);
};

export const responseController = {insertMany };

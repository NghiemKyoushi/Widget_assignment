import { Response } from "../models";

const insertMany = async (req, res) => {
  const response = await Response.bulkCreate(req);
  return response;
};

export const responseServices = { insertMany };

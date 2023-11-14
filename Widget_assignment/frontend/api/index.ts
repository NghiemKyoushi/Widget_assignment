import axios from "axios";
import { QuestionsType, QuestionsTypeParams, RateType } from "../model";

const BASE_URL = "http://localhost:3030/feedback";

export const authApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    // "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
    "Access-Control-Allow-Headers":
      "Content-Type, Authorization, X-Requested-With",
  },
});

export const getAllQuestion = async () => {
  return authApi.get("/question");
};
export const getRate = async () => {
  return authApi.get("/rating");
};
export const sendRate = async (params: RateType) => {
  return authApi.post("/rating", { ...params });
};
export const createResponse = async (params: QuestionsTypeParams[]) => {
  return authApi.post("/response", params);
};

import express from "express";
import questionRouter from "./question";
import ratingRouter from "./rating";
import responseRouter from "./response";

const router = express.Router();

const routes = [
  {
    path: "/question",
    route: questionRouter,
  },
  {
    path: "/rating",
    route: ratingRouter,
  },
  {
    path: "/response",
    route: responseRouter,
  },
];

routes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;

import { create } from "../api/create";
import express from "express";

const routes = express.Router();

routes.post("/users", create);

routes.get("/users");

routes.put("/users/:id");

routes.delete("/users/:id");

export { routes };

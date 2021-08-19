import { Router } from "express";
import students from "./students/router.js";

const services = Router();

services.use("/authors", students);

export default services;
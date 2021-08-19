import { Router } from "express";
import authors from "./authors/router.js";

const services = Router();

services.use("/authors", authors);

export default services;
import { Router } from "express";
import authors from "./authors/router.js";
import blogs from "./blogs/router.js";

const services = Router();

services.use("/authors", authors);
services.use("/blogs", blogs);

export default services;
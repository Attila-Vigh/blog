import { Router } from "express";
import authorsHandler from "./handler.js";
const route = Router();

route.post  ('/', authorsHandler.add    )
route.get   ('/', authorsHandler.list   )
route.get   ('/:id', authorsHandler.single )
route.put   ('/:id', authorsHandler.update )
route.delete('/:id', authorsHandler.delete )

export default route;

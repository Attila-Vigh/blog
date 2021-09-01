import { Router } from "express";
import blogsHandler from "./handler.js";

const router = Router();

router.route( "/" )
    .get( blogsHandler.getAll )
    .post( blogsHandler.add );

// router.route( "/:search" ).get( blogsHandler.searchByTitle );

router.route( '/:id' )
    .get( ( req, res, next ) => blogsHandler.findById( req, res, next) )
    .put   ( blogsHandler.update )
    .delete( blogsHandler.delete );

export default router;

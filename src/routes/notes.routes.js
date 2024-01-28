const { Router } = require("express");

const NotesController = require("../controllers/NotesControllers");


const notesRoutes = Router();

const notesController = new NotesController ();

notesRoutes.post("/:users_id", notesController.create);


module.exports = notesRoutes;
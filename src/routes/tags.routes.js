const { Router } = require("express");

const TagsController = require("../controllers/TagsController");


const tagsRoutes = Router();

const tagsController = new TagsController ();

tagsRoutes.get("/:users_id", tagsController.index);


module.exports = tagsRoutes;
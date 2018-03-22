const router = require("express").Router();
const articleController = require("../../controllers/articleController.js");

router.get("/", articleController.gatherArticles);

module.exports = router;
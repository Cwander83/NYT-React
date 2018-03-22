const router = require("express").Router();
const articleController = require("../../controllers/articleController.js");

router.route("/")
    .get(articleController.findAll)
    .post(articleController.create);

router.route("/:id")
    .get(articleController.findbyId)
    .put(articleController.update)
    .delete(articleController.remove)

module.exports = router;
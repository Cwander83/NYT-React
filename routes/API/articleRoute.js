const router = require("express").Router();
const articleController = require("../../controllers/articleController.js");

router.route("/").get(articleController.find);
router.route("/").post(articleController.create);

router.route("/:id")

    .delete(articleController.remove);

module.exports = router;
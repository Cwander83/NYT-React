const router = require("express").Router();
const articleRoute = require("./articleRoute");

router.use("/articles", articleRoute);

module.exports = router;

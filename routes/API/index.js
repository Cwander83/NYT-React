const router = require("express").Router();
const articleRoute = require("./articleRoute");

router.use("/saved", articleRoute);

module.exports = router;

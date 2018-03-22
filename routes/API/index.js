const router = require("express").Router();
const apiRoutes = require("./apiRoutes");

router.use("/articles", apiRoutes);

module.exports = router;

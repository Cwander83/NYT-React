const path = require("path");
const router = require("express").Router();
const articleRoute = require("./API");


router.use("/api", articleRoute);

router.use(function (req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});



module.exports = router;
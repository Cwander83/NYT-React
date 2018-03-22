const router = require("express").Router();
const articleRoutes = require("./API");


router.use("/api", articleRoutes);

router.use(function (req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});



module.exports = router;
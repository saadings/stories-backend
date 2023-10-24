var express = require("express");
var router = express.Router();
const storiesController = require("../controllers/stories");

/* GET home page. */
router.get("/", storiesController.fetchStories);

module.exports = router;

const router = require("express").Router();
const {
  getSearchHistory,
  addSearchHistory,
} = require("../controllers/search_history");

router.get("/", getSearchHistory);
router.post("/", addSearchHistory);

module.exports = router;

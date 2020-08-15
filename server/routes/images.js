const router = require("express").Router();
const {
  getImages,
  getFavoriteImages,
  addFavoriteImage,
} = require("../controllers/images");

router.get("/", getImages);
router.get("/favorite", getFavoriteImages);
router.post("/favorite", addFavoriteImage);

module.exports = router;

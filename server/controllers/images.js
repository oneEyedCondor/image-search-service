const Joi = require("@hapi/joi");
const Flickr = require("flickr-sdk");
const flickr = new Flickr(process.env.FLICKR_API_KEY);
const clientDB = require("../db/client_db");
const {
  SELECT_ALL_FROM_FAVORITE_IMAGES,
  INSERT_INTO_FAVORITE_IMAGES,
} = require("../db/sql_queries");

//Creating the validation schema
const addFavoriteImageValidation = (data) => {
  const schema = Joi.object({
    id: Joi.number().required(),
    description: Joi.string().required(),
    url: Joi.string().required(),
  });

  return schema.validate(data);
};

//Receiving data from a third-party service
const flickrSearchImages = async (text) => {
  const result = await flickr.photos.search({ text });
  //   https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg

  //Conversion the data
  return result.body.photos.photo.map((p) => ({
    id: p.id,
    description: p.title,
    url: `https://farm${p.farm}.staticflickr.com/${p.server}/${p.id}_${p.secret}.jpg`,
  }));
};

module.exports.getImages = async (req, res) => {
  try {
    const findedImages = await flickrSearchImages(req.query.search);
    res.json(findedImages);
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports.getFavoriteImages = (req, res) => {
  clientDB.all(SELECT_ALL_FROM_FAVORITE_IMAGES, (err, favoriteImages) => {
    if (err) res.status(500).send(err);

    res.json(favoriteImages);
  });
};

module.exports.addFavoriteImage = (req, res) => {
  //Validation the data
  const { error } = addFavoriteImageValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  clientDB.run(INSERT_INTO_FAVORITE_IMAGES, Object.values(req.body), (err) => {
    if (err) res.status(500).send(err);

    res.sendStatus(201);
  });
};

const Joi = require("@hapi/joi");
const clientDB = require("../db/client_db");
const {
  SELECT_ALL_FROM_SEARCH_HISTORY,
  INSERT_INTO_SEARCH_HISTORY,
} = require("../db/sql_queries");

//Creating the validation schema
const addSearchHistoryValidation = (data) => {
  const schema = Joi.object({
    date: Joi.string().required(),
    time: Joi.string().required(),
    value: Joi.string().required(),
  });

  return schema.validate(data);
};

module.exports.getSearchHistory = (req, res) => {
  clientDB.all(SELECT_ALL_FROM_SEARCH_HISTORY, (err, searchHistory) => {
    if (err) res.status(500).send(err);

    res.json(searchHistory);
  });
};

module.exports.addSearchHistory = (req, res) => {
  //Validation the data
  const { error } = addSearchHistoryValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  clientDB.run(INSERT_INTO_SEARCH_HISTORY, Object.values(req.body), (err) => {
    if (err) res.status(500).send(err);

    res.sendStatus(201);
  });
};

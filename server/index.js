require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const imagesRoute = require("./routes/images");
const searchHistoryRoute = require("./routes/search_history");

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Routing
app.use("/api/images", imagesRoute);
app.use("/api/search-history", searchHistoryRoute);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

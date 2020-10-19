const express = require("express");
const app = express();

const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/*/routes*/

app.use(require("./routes/index"));

const listener = app.listen(5000, () => {
  console.log("Server listening on port " + listener.address().port);
});

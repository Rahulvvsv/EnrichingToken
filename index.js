const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.post("/api", (req, res) => {
  console.log(req.body);
  res.status(200).json({
    version: "1.0.0",
    action: "Continue",
    postalCode: "12349",
    "extension_<extensions-app-id>_CustomAttribute": "value",
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

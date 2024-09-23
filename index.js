const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const cors = require("cors"); // Add this line

app.use(cors());
app.use(bodyParser.json());

app.post("/api", (req, res) => {
  console.log(req.body);
  res.status(200).json({
    version: "1.0.0",
    action: "Continue",
    postalCode: "12349",
    extension_fb13cfd083a04d37aec60d86bae18705_role: "adminTesting",
    extension_fb13cfd083a04d37aec60d86bae18705_customTest: "adminTesting2",
  });
});

app.listen(3008, () => {
  console.log("Server is running on port 3008");
});

const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const cors = require("cors"); // Add this line

app.use(cors());
app.use(bodyParser.json());

// app.post("/api", (req, res) => {
//   console.log(req.body);
//   res.status(200).json({
//     version: "1.0.0",
//     action: "Continue",
//     postalCode: "12349",
//     extension_fb13cfd083a04d37aec60d86bae18705_role: "adminTesting",
//     extension_fb13cfd083a04d37aec60d86bae18705_customTest: "adminTesting2",
//   });
// });
app.post("/api", (req, res) => {
  console.log(req.body);

  if (req.body.step === "PostAttributeCollection") {
    // Check if the email already exists in the database (pseudo-code)
    // const emailExists = checkEmailInDatabase(req.body.email); // Implement this function
    const emailExists = req.body.email === "rahulwork120@gmail.com";
    if (emailExists) {
      return res.status(400).json({
        version: "1.0.0",
        action: "ShowBlockPage",
        userMessage: "Email already exists",
      });
    }
  }
  let roleValue = "";
  if (req.body.step === "PreTokenIssuance") {
    // Add additional role parameter
    roleValue = "adminTestingRahul";
  }

  res.status(200).json({
    version: "1.0.0",
    action: "Continue",
    postalCode: "12349",
    extension_fb13cfd083a04d37aec60d86bae18705_role: roleValue,
  });
});

app.listen(3008, () => {
  console.log("Server is running on port 3008");
});

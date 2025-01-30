require("dotenv").config( );
const express = require("express");

const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
  return res.json({ message: "API OK" });
});

app.listen(process.env.PORT || 3000 , () => {
  return console.log(`Server is running on port ${process.env.PORT || 3000}`);
});

require("dotenv").config();
const knex = require("./conection");
const express = require("express");

const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
  try {
    const carros = await knex("carros");

    return res.json(carros);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on port ${process.env.PORT || 3000}`);
});

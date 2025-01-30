require("dotenv").config();
const knex = require("./conection");
const express = require("express");

const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
  try {
    const carros = await knex('carros');


  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

app.post("/", async (req, res) => {
  try {
    const tableExists = await knex.schema.hasTable('carros');

    if(tableExists) {
      return res.status(400).json({ message: 'Table already exists' });
    }

    const createTable = await knex.schema.createTable('carros', (table) => {
      table.increments('id');
      table.string('modelo');
    });

    return res.status(201).json({ createTable });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
})

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on port ${process.env.PORT || 3000}`);
});

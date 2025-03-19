require('dotenv').config();
const express = require("express");
const CoffeeShopsRoutes = require("./routes/coffeeShops");

const app = express();
const PORT = process.env.SERVER_PORT;

app.use(express.json());
app.use('/api', CoffeeShopsRoutes);

app.get("/", (req, res) => {
  res.send("Simple api request app");
})

app.listen(PORT, (req, res) => {
  console.log(`App is running on port ${PORT}`);
})
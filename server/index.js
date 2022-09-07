const express = require("express");
const app = express();
const fs = require("fs");
const cors = require("cors");
require("dotenv").config();
const { PORT, BACKEND_URL } = process.env;
const inventories = require('./data/inventories.json')
const warehouses = require('./data/warehouses.json')
const warehousesRoutes = require("./routes/warehousesRoutes");

//cors middleware
app.use(cors());

//middleware to give us access to req.body
app.use(express.json());

app.get('/inventories', (req, res) => {
  res.send(inventories)
})

app.get('/warehouses', (req, res) => {
  res.send(warehouses)
})

app.get('/warehouses/:id', (req, res) => {
  res.send(warehouses.find((obj) => {
    return obj.id === `${req.params.id}`
  }))
})


//listener
app.listen(PORT, () => {
  console.log("We are live!✈️");
});

app.use("/warehouses", warehousesRoutes);

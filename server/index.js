const express = require("express");
const app = express();
const fs = require("fs");
const cors = require("cors");
require("dotenv").config();
const { PORT, BACKEND_URL } = process.env;
const warehousesRoutes = require("./routes/warehousesRoutes");
const inventoryRoutes = require("./routes/inventoryRoutes");

//cors middleware
app.use(cors());

//middleware to give us access to req.body
app.use(express.json());

//listener
app.listen(PORT, () => {
  console.log("We are live!✈️");
});

app.use("/warehouses", warehousesRoutes);

app.use("/inventories", inventoryRoutes);

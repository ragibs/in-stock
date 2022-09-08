const express = require("express");
const app = express();
const fs = require("fs");
const cors = require("cors");
app.use(cors());
const router = express.Router({ mergeParams: true });
app.use(express.json());

const readFile = (fileName) => {
  const fileContent = JSON.parse(fs.readFileSync(`./data/${fileName}.json`));
  return fileContent;
};

router.get("/", function (req, res) {
  const warehouses = readFile("warehouses");
  res.json(warehouses);
});

const warehouseData = JSON.parse(fs.readFileSync(`./data/warehouses.json`));
router.get("/", function (req, res) {
  const warehouses = readFile("warehouses");
  res.json(warehouses);
});

//router delete
router.delete("/:id", (req, res) => {
  console.log(req.params.id);
  let warehouseID = warehouseData.find(
    (warehouse) => warehouse.id === req.params.id
  );
  if (warehouseID) {
    let index = warehouseData.indexOf(warehouseID);
    console.log(index);
    warehouseData.splice(index, 1);
    fs.writeFileSync("./data/warehouses.json", JSON.stringify(warehouseData));
    res.json(warehouseData); //sendback updated json
  } else {
    res.status(404).send(" requested warehouse not found");
  }
});

module.exports = router;

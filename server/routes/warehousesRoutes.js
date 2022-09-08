const express = require("express");
const app = express();
const fs = require("fs");
const cors = require("cors");
app.use(cors());
const router = express.Router();
app.use(express.json());



const readFile = (fileName) => {
    const fileContent = JSON.parse(fs.readFileSync(`./data/${fileName}.json`));
    return fileContent;
};

const warehouseData = JSON.parse(fs.readFileSync(`./data/warehouses.json`));
router.get("/", function (req, res) {
    const warehouses = readFile("warehouses");
    res.json(warehouses);
});


router.get("/:id", (req, res) => {
    let warehouseID = warehouseData.find((warehouse) => warehouse.id === req.params.id);
    if (warehouseID) {
        res.json(warehouseID);
    } else {
        res.status(404).send(" requested warehouse not found");
    }
});

module.exports = router;
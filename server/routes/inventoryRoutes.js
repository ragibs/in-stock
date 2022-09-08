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

router.get("/", function (req, res) {
    const inventories = readFile("inventories");
    res.json(inventories);
});


const inventoryData = JSON.parse(fs.readFileSync(`./data/inventories.json`));
router.get("/", function (req, res) {
    const inventories = readFile("inventories");
    res.json(inventories);
});

//gets list of all of the inventory data based on warehouse ID

router.get("/:id", (req, res) => {
    let inventory = inventoryData.filter((inventory) => inventory.warehouseID === req.params.id);
    if (inventory) {
        res.json(inventory);
    } else {
        res.status(404).send(" requested inventory not found");
    }
});

module.exports = router;
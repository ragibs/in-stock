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

const { v4: uuidv4 } = require("uuid");

const readFile = (fileName) => {
  const fileContent = JSON.parse(fs.readFileSync(`./data/${fileName}.json`));
  return fileContent;
};

// Write File
const writeFile = (data, filename) => {
  fs.writeFileSync(
    `./data/${filename}.json`,
    JSON.stringify(data),
    function (error) {
      console.error(error);
    }
  );
  return data;
};

router.get("/", function (req, res) {
  const inventories = readFile("inventories");
  res.json(inventories);
});

// POST: Create new Inventory Item
router.post("/", (req, res) => {
  const {
    warehouseID,
    warehouseName,
    itemName,
    description,
    category,
    status,
    quantity,
  } = req.body;

  try {
    if (
      (warehouseID !== "",
      warehouseName !== "",
      itemName !== "",
      description !== "",
      category !== "",
      status !== "",
      quantity !== "")
    ) {
      const inventories = readFile("inventories");
      const newItem = {
        id: uuidv4(),
        warehouseID: warehouseID,
        warehouseName: warehouseName,
        itemName: itemName,
        description: description,
        category: category,
        status: status,
        quantity: quantity,
      };
      const newData = [...inventories, newItem];
      writeFile(newData, "inventories");
      return res
        .status(201)
        .json({ message: "New Item created successfully", data: newData });
    } else {
      return res.status(400).json({ message: "Error: Invalid request data" });
    }
  } catch (error) {
    res.status(400).json({ message: "Error creating new inventory item" });
  }
});

module.exports = router;


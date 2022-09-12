const express = require("express");
const app = express();
const fs = require("fs");
const cors = require("cors");
app.use(cors());
const router = express.Router();
app.use(express.json());
const { v4: uuidv4 } = require("uuid");

//Helper Functions
const readFile = (fileName) => {
  const fileContent = JSON.parse(fs.readFileSync(`./data/${fileName}.json`));
  return fileContent;
};

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

//Routes
router.get("/", function (req, res) {
  const inventories = readFile("inventories");
  res.json(inventories);
});

//json data
const inventoryData = JSON.parse(fs.readFileSync(`./data/inventories.json`));

//gets list of all of the inventory data based on warehouse ID
router.get("/:id", (req, res) => {
  let inventory = inventoryData.filter(
    (inventory) => inventory.warehouseID === req.params.id
  );
  if (inventory) {
    res.json(inventory);
  } else {
    res.status(404).send(" requested inventory not found");
  }
});


//gets item details from inventory json

router.get("/item/:id", (req, res) => {
  let item = inventoryData.find(
    (inventory) => inventory.id === req.params.id
  );
  if (item) {
    res.json(item);
  }
  else {
    res.status(404).send(" requested item not found");
  }
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

//router delete inventory
router.delete("/:id", (req, res) => {
  let inventoryID = inventoryData.find(
    (inventory) => inventory.id === req.params.id
  );
  if (inventoryID) {
    let index = inventoryData.indexOf(inventoryID);
    inventoryData.splice(index, 1);
    fs.writeFileSync("./data/inventories.json", JSON.stringify(inventoryData));
    res.json(inventoryData); //sendback updated json
  } else {
    res.status(404).send(" requested warehouse not found");
  }
});

module.exports = router;

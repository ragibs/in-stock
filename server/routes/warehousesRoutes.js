const express = require("express");
const app = express();
const fs = require("fs");
const cors = require("cors");
app.use(cors());
const router = express.Router({ mergeParams: true });
app.use(express.json());

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

const warehouseData = JSON.parse(fs.readFileSync(`./data/warehouses.json`));
router.get("/", function (req, res) {
  const warehouses = readFile("warehouses");
  res.json(warehouses);
});

// POST: New Warehouse
router.post("/new", (req, res) => {
  // Validate Phone Number, thanks Google
  const validatePhone = (phone) => {
    const regEx = /^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$/im;
    const isValid = regEx.test(phone);
    return isValid;
  };

  try {
    const {
      warehouseName,
      street,
      city,
      country,
      contactName,
      position,
      phone,
      email,
    } = req.body;

    if (
      warehouseName !== "" &&
      street !== "" &&
      city !== "" &&
      country !== "" &&
      contactName !== "" &&
      position !== "" &&
      phone !== "" &&
      validatePhone(phone) &&
      email !== "" &&
      email.includes("@")
    ) {
      const warehouses = readFile("warehouses");
      const newWarehouse = {
        id: uuidv4(),
        name: warehouseName,
        address: street,
        city: city,
        country: country,
        contact: {
          name: contactName,
          position: position,
          phone: phone,
          email: email,
        },
      };
      const newData = [...warehouses, newWarehouse];
      writeFile(newData, "warehouses");
      return res
        .status(201)
        .json({ message: "Warehouse created successfully", data: newData });
      //Do the write thing
    } else {
      return res.status(400).json({ message: "Error: Invalid request data" });
    }
  } catch (error) {
    console.error(error);
    return res
      .status(400)
      .json({ message: "Error: Failed to create warehouse" });
  }
});

//router delete
router.delete("/:id", (req, res) => {
  let warehouseID = warehouseData.find(
    (warehouse) => warehouse.id === req.params.id
  );
  if (warehouseID) {
    let index = warehouseData.indexOf(warehouseID);
    warehouseData.splice(index, 1);
    fs.writeFileSync("./data/warehouses.json", JSON.stringify(warehouseData));
    res.json(warehouseData); //sendback updated json
  } else {
    res.status(404).send(" requested warehouse not found");
  }
});

module.exports = router;

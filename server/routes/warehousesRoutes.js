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
    const warehouses = readFile("warehouses");
    res.json(warehouses);
});

module.exports = router;
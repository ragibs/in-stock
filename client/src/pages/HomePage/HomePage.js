import "./HomePage.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import Warehouse from "../../components/Warehouse/Warehouse";

function HomePage() {
  const warehousesAPIURL = "http://localhost:8080/warehouses";
  const [warehousesData, setWarehousesData] = useState([]); //state for all warehouse list

  useEffect(() => {
    // setting warehouses data
    axios
      .get(warehousesAPIURL)
      .then((response) => {
        setWarehousesData(response.data);
      })
      .catch((err) => console.error(err));
  }, [warehousesData]);

  return (
    <>
      <Warehouse warehousesData={warehousesData} />
    </>
  );
}

export default HomePage;

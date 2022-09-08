import "./InventoryPage.scss";
import axios from 'axios';
import { useState, useEffect} from "react";
import Inventory from "../../components/Inventory/Inventory"


function InventoryPage() {

  const inventoriesAPIURL = "http://localhost:8080/inventories";

  const [inventoriesData, setInventoriesData] = useState([]);

  useEffect(() => { // setting inventories data
    axios.get(inventoriesAPIURL)
        .then(response => {
            setInventoriesData(response.data);
        })
        .catch(err => console.error(err));
  }, [])  

  return (
    <>
      <Inventory 
        inventoriesData={inventoriesData}
      />
    </> 
  ); 
};

export default InventoryPage;
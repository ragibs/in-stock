import "./Warehouse-details.scss";
import backArrow from "../../assets/Icons/arrow_back-24px.svg"
import editButton from "../../assets/Icons/edit-24px.svg"
import sortButton from "../../assets/Icons/sort-24px.svg"
import trashButton from "../../assets/Icons/delete_outline-24px.svg";
import rightChevron from "../../assets/Icons/chevron_right-24px.svg";
import axios from "axios";
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from "react";


function WarehouseDetails() {

  const { warehouseID } = useParams();
  console.log(warehouseID)

  let warehouseURL = `http://localhost:8080/warehouses/${warehouseID}`;
  let inventoryURL = `http://localhost:8080/inventories/${warehouseID}`;

  const [currentWarehouse, setCurrentWarehouse] = useState();
  const [currentInventory, setCurrentInventory] = useState();

  useEffect(() => {
    axios.get(warehouseURL)
      .then((response) => {
        setCurrentWarehouse(response.data)
        console.log(response.data)
      })
      .catch((error) => { console.log(error) })
  }, [warehouseURL])


  useEffect(() => {
    axios.get(inventoryURL)
      .then((response) => {
        setCurrentInventory(response.data)
        console.log(response.data)
      })
      .catch((error) => { console.log(error) })
  }, [warehouseURL])


  if ((currentWarehouse === null || currentWarehouse === undefined) || (currentInventory === null || currentInventory === undefined)) {
    return <h1>Loading...</h1>
  }
  return <div className="page-body">
    <header className="Header">
      <h1 className="Header__title"><Link to="/"><img src={backArrow} alt="arrow_back" /></Link>{currentWarehouse?.name}</h1>
      <button className="Header__edit-button__mobile"><img className="Header__edit-icon" src={editButton} alt="edit" /></button>
      <button className="Header__edit-button"><img className="Header__edit-icon" src={editButton} alt="edit" />Edit</button>

    </header>
    <section className="warehouse-details">
      <div className="warehouse-details__address">
        <h2 className="warehouse-details__title">WAREHOUSE ADDRESS:</h2>
        <p className="warehouse-details__info">{currentWarehouse?.address} {currentWarehouse.city}, {currentWarehouse.country}</p>
      </div>
      <div className="warehouse-details__container">
        <div className="warehouse-details__name">
          <h2 className="warehouse-details__title">CONTACT NAME:</h2>
          <p className="warehouse-details__info">{currentWarehouse?.contact.name}</p>
          <p className="warehouse-details__info">{currentWarehouse?.contact.position}</p>
        </div>
        <div className="warehouse-details__contact">
          <h2 className="warehouse-details__title">CONTACT INFORMATION:</h2>
          <p className="warehouse-details__info">{currentWarehouse?.contact.phone}</p>
          <p className="warehouse-details__info">{currentWarehouse?.contact.email}</p>
        </div>
      </div>
    </section>




    <section className="Inventory">
      <ul className="Inventory__header">
        <div className="Inventory__header-gp1">
          <li className="Inventory__item-title">INVENTORY ITEM <img src={sortButton} alt="sortButton" /></li>
          <li className="Inventory__item-title">CATEGORY <img src={sortButton} alt="sortButton" /></li>
        </div>
        <div className="Inventory__header-gp2">
          <li className="Inventory__item-title">STATUS <img src={sortButton} alt="sortButton" /></li>
          <li className="Inventory__item-title">QTY <img src={sortButton} alt="sortButton" /></li>
        </div>
        <div className="Inventory__header-gp3">
          <li className="Inventory__item-title">ACTIONS <img src={sortButton} alt="sortButton" /></li>
        </div>
      </ul>
      {/* populate this with details from the inventories array */}

      {currentInventory?.map((inventory) => {
        console.log(inventory.itemName)
        return <div className="Inventory__items-grouping">
          <ul className="Inventory__items">
            <div className="Inventory__items-container">
              <div className="Inventory__items-name">
                <li className="Inventory__items-title">INVENTORY ITEM</li>
                <li ><Link className="Inventory__items-item" to={`/inventory/${inventory.id}`}>{inventory.itemName} <img className="Inventory__items-chevron" src={rightChevron} alt="" /> </Link></li>
              </div>
              <div className="Inventory__items-category">
                <li className="Inventory__items-title">CATEGORY</li>
                <li className="Inventory__items-category-details">{inventory.category}</li>
              </div>
            </div>
            <div className="Inventory__items-container">
              <div className="Inventory__items-status">
                <li className="Inventory__items-title">STATUS</li>
                <li className={inventory.status === "In Stock" ? "Inventory__statusTagGreen" : "Inventory__statusTagRed"}>{inventory.status}</li>
              </div>
              <div className="Inventory__items-quantity">
                <li className="Inventory__items-title">QTY</li>
                <li>{inventory.quantity}</li>
              </div>
            </div>
            <li className="Inventory__items-actions"><img src={trashButton} alt="delete" /><img src={editButton} alt="edit" /></li>
          </ul>
        </div>
      })}
    </section>
  </div>;
}

export default WarehouseDetails;

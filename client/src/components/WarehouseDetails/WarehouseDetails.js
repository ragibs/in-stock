import "./WarehouseDetails.scss";
import backArrow from "../../assets/Icons/arrow_back-24px.svg"
import editButton from "../../assets/Icons/edit-24px.svg"
import sortButton from "../../assets/Icons/sort-24px.svg"
import trashButton from "../../assets/Icons/delete_outline-24px.svg";
import axios from "axios";
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";


function WarehouseDetails() {


  // NEED PARAMS TO BE ABLE TO TEST THIS
  // let params = useParams();
  // const warehouseURL = `http://localhost:8080/warehouses/${params.id}`;
  // const inventoryURL = `http://localhost:8080/inventory/${params.id}`;

  const [currentWarehouse, setCurrentWarehouse] = useState([]);


  useEffect(() => {
    axios.get(`http://localhost:8080/warehouses/`)
      .then((response) => {
        setCurrentWarehouse(response.data)
        console.log(response.data)
      })
      .catch((error) => { console.log(error) })
  }, [])


  return <div>
    <header className="Header">
      <h1 className="Header__title"><img src={backArrow} alt="arrow_back" />Washington</h1>
      {/* Populate this with details from the warehouses array */}
      {/* need to find a way to change the icon to white */}
      <button className="Header__edit-button__mobile"><img className="Header__edit-icon" src={editButton} alt="edit" /></button>
      <button className="Header__edit-button"><img className="Header__edit-icon" src={editButton} alt="edit" />Edit</button>

    </header>
    <section className="warehouse-details">
      <div className="warehouse-details__address">
        <h2 className="warehouse-details__title">WAREHOUSE ADDRESS:</h2>
        <p className="warehouse-details__info">33 Pearl Street SW Washington, USA</p>
      </div>
      <div className="warehouse-details__container">
        <div className="warehouse-details__name">
          <h2 className="warehouse-details__title">CONTACT NAME:</h2>
          <p className="warehouse-details__info">Graeme Lyon</p>
          <p className="warehouse-details__info">Warehouse Manager</p>
        </div>
        <div className="warehouse-details__contact">
          <h2 className="warehouse-details__title">CONTACT INFORMATION:</h2>
          <p className="warehouse-details__info">+1-647-504-0911</p>
          <p className="warehouse-details__info">glyon@instock.com</p>
        </div>
      </div>
    </section>
    <section className="Inventory">
      <ul className="Inventory__header">
        <li className="Inventory__item-title">INVENTORY ITEM <img src={sortButton} alt="sortButton" /></li>
        <li className="Inventory__item-title">CATEGORY <img src={sortButton} alt="sortButton" /></li>
        <li className="Inventory__item-title">STATUS <img src={sortButton} alt="sortButton" /></li>
        <li className="Inventory__item-title">QTY <img src={sortButton} alt="sortButton" /></li>
        <li className="Inventory__item-title">ACTIONS <img src={sortButton} alt="sortButton" /></li>
      </ul>
      {/* populate this with details from the inventories array */}
      <div className="Inventory__items-grouping">
        <ul className="Inventory__items">
          <div className="Inventory__items-container">
            <div className="Inventory__items-name">
              <li className="Inventory__items-title">INVENTORY ITEM</li>
              <li>Item name</li>
            </div>
            <div className="Inventory__items-category">
              <li className="Inventory__items-title">CATEGORY</li>
              <li>Electronics</li>
            </div>
          </div>
          <div className="Inventory__items-container">
            <div className="Inventory__items-status">
              <li className="Inventory__items-title">STATUS</li>
              <li>Stock-status</li>
            </div>
            <div className="Inventory__items-quantity">
              <li className="Inventory__items-title">QTY</li>
              <li>Amt number</li>
            </div>
          </div>
          <li className="Inventory__items-actions"><img src={trashButton} alt="delete" /><img src={editButton} alt="edit" /></li>
        </ul>
      </div>
    </section>
  </div>;
}

export default WarehouseDetails;

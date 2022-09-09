import "./InventoryItemsDetails.scss";
import backArrow from "../../assets/Icons/arrow_back-24px.svg"
import editButton from "../../assets/Icons/edit-24px.svg"
import axios from "axios";
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from "react";

function InventoryItemsDetails() {

    let itemID = useParams().id;
    console.log(itemID)
    let inventoryURL = `http://localhost:8080/inventories/item/${itemID}`;

    const [currentItem, setCurrentItem] = useState();

    useEffect(() => {
        axios.get(inventoryURL)
            .then((response) => {
                setCurrentItem(response.data)
                console.log(response.data)
            })
            .catch((error) => { console.log(error) })
    }, [inventoryURL])



    if ((currentItem === null || currentItem === undefined)) {
        return <h1>Loading...</h1>
    }
    return <div className="page-body">
        <header className="inventory-header">
            <h1 className="inventory-header__itemName"><Link to={`/warehouses/${currentItem.warehouseID}`}><img src={backArrow} alt="back" /></Link>{currentItem.itemName}</h1>
            <button className="inventory-header__editButton-mobile"><img className="editButton-image" src={editButton} alt="editButton" /></button>
            <button className="inventory-header__editButton"><img className="editButton-image" src={editButton} alt="editButton" />Edit</button>
        </header>
        <section className="inventory-body">
            <div className="inventory-container-description-category">
                <div className="inventory-container">
                    <h2 className="info-title">Item Description</h2>
                    <p className="info-details">{currentItem.description}</p>
                </div>
                <div className="inventory-container">
                    <h2 className="info-title">Category</h2>
                    <p className="info-details">{currentItem.category}</p>
                </div>
            </div>
            <div className="inventory-container-status-quantity-warehouse">
                <div className="inventory-container-status-quantity">
                    <div className="inventory-container">
                        <h2 className="info-title">Status</h2>
                        <p className="info-details">{currentItem.status}</p>
                    </div>
                    <div className="inventory-container">
                        <h2 className="info-title">Quantity</h2>
                        <p className="info-details">{currentItem.quantity}</p>
                    </div>
                </div>
                <div>
                    <h2 className="info-title">Warehouse</h2>
                    <p className="info-details">{currentItem.warehouseName}</p>
                </div>
            </div>
        </section>
    </div>;
}

export default InventoryItemsDetails;

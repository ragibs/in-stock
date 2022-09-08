import "./InventoryItemsDetails.scss";
import backArrow from "../../assets/Icons/arrow_back-24px.svg"
import editButton from "../../assets/Icons/edit-24px.svg"
import axios from "axios";
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";


function InventoryItemsDetails() {

    return <div>
        <header className="inventory-header">
            <h1 className="inventory-header__itemName"> <img src={backArrow} alt="back" /> Item-Name</h1>
            <button className="inventory-header__editButton-mobile"><img className="editButton-image" src={editButton} alt="editButton" /></button>
            <button className="inventory-header__editButton"><img className="editButton-image" src={editButton} alt="editButton" />Edit</button>
        </header>
        <section className="inventory-body">
            <div className="inventory-container-description-category">
                <div className="inventory-container">
                    <h2 className="info-title">Item Description</h2>
                    <p className="info-details">Sample description</p>
                </div>
                <div className="inventory-container">
                    <h2 className="info-title">Category</h2>
                    <p className="info-details">Sample category</p>
                </div>
            </div>
            <div className="inventory-container-status-quantity-warehouse">
                <div className="inventory-container-status-quantity">
                    <div className="inventory-container">
                        <h2 className="info-title">Status</h2>
                        <p className="info-details">Sample Status</p>
                    </div>
                    <div className="inventory-container">
                        <h2 className="info-title">Quantity</h2>
                        <p className="info-details">Sample Quantity</p>
                    </div>
                </div>
                <div>
                    <h2 className="info-title">Warehouse</h2>
                    <p className="info-details">Sample warehouse</p>
                </div>
            </div>
        </section>
    </div>;
}

export default InventoryItemsDetails;

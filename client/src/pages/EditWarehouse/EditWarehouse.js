import "./EditWarehouse.scss";
import React from "react";
import backArrowIcon from "../../assets/Icons/arrow_back-24px.svg";
import { Link } from "react-router-dom";

function EditWarehouse () {
    
    return (
        <>
        <div className = "edit-warehouse">
            <div className = "edit-warehouse__title-container">
                <Link to= "/"><img className = "edit-warehouse__back-arrow" src = {backArrowIcon} alt = "back-arrow"></img></Link>
                <h1 className = "edit-warehouse__header-title">Edit Warehouse</h1>
            </div>
            <div className = "edit-warehouse__warehouse-container">
                <h2 className = "edit-warehouse__title">Warehouse Details</h2>
                <form className = "edit-warehouse__form" action = "" method = "GET">
                    <label htmlFor = "edit-warehouse__form---name" className = "edit-warehouse__form--name-label">Warehouse Name</label>
                    <input type = "text" className = "edit-warehouse__form--name" placeholder = "Warehouse Name"></input>
                    <label htmlFor = "edit-warehouse__form--street" className = "edit-warehouse__form--street-label">Street Address</label>
                    <input type = "text" className = "edit-warehouse__form--street" placeholder = "Warehouse Street"></input>
                    <label htmlFor = "edit-warehouse__form--city" className = "edit-warehouse__form--city-label">City</label>
                    <input type = "text" className = "edit-warehouse__form--city" placeholder = "Warehouse City"></input>
                    <label htmlFor = "edit-warehouse__form--country" className = "edit-warehouse__form--country-label">Country</label>
                    <input type = "text" className = "edit-warehouse__form--country" placeholder = "Warehouse Country"></input>
                </form>
            </div>
            <div className = "edit-warehouse__contact-container">
                <h2 className = "edit-warehouse__title">Contact Details</h2>
                <form className = "edit-warehouse__form" action = "" method = "GET">
                    <label htmlFor = "edit-warehouse__form--name" className = "edit-warehouse__form--name-label">Contact Name</label>
                    <input type = "text" className = "edit-warehouse__form--name" placeholder = "Contact Name"></input>
                    <label htmlFor = "edit-warehouse__form--position" className = "edit-warehouse__form--position-label">Position</label>
                    <input type = "text" className = "edit-warehouse__form--position" placeholder = "Position"></input>
                    <label htmlFor = "edit-warehouse__form--number" className = "edit-warehouse__form--number-label">Phone Number</label>
                    <input type = "text" className = "edit-warehouse__form--number" placeholder = "Phone number"></input>
                    <label htmlFor = "edit-warehouse__form--email" className = "edit-warehouse__form--email-label">Email</label>
                    <input type = "text" className = "edit-warehouse__form--email" placeholder = "Email"></input>
                    <div className = "edit-warehouse__buttons-container">
                        <button className = "edit-warehouse__cancel-button" type = "submit">Cancel</button>
                        <button className = "edit-warehouse__save-button" type = "submit">Save</button>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}

export default EditWarehouse;
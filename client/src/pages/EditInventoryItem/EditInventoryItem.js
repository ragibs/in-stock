import "./EditInventoryItem.scss";
import React, { useState, useEffect } from "react";
import axios from "axios"
import { Link, useParams } from "react-router-dom";
import backArrowIcon from "../../assets/Icons/arrow_back-24px.svg";
import arrowDropDown from "../../assets/Icons/arrow_drop_down-24px.svg";
import error from "../../assets/Icons/error-24px.svg";

function EditInventoryItem (props) {

    const [itemDetails, setItemDetails] = useState({
        warehouseId: "",
        warehouseName: "",
        itemName: "",
        description: "",
        category: "",
        status: "",
        quantity: 0,
    }); 
    
   
    useEffect(() => {
        
        axios.get(`http://localhost:8080/inventories/${props.match.params.id}/${props.match.params.warehouseName}`)
        .then(response => {
            console.log(response.data); 
            setItemDetails(
                {
                    warehouseId: response.data.id,
                    warehouseName: response.data.warehouseName,
                    itemName: response.data.itemName,
                    description: response.data.description,
                    category: response.data.category,
                    status: response.data.status,
                    quantity: response.data.quantity  
                }
            ); 
        
        });
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();

        const updatedInventoryItem = {
            warehouseName: event.target.warehouseName.value,
            itemName: event.target.itemName.value, 
            description: event.target.description.value, 
            category: event.target.category.value, 
            status: event.target.status.value, 
            quantity: event.target.quantity.value,
        };

    axios.put("http://localhost:8080/inventories", updatedInventoryItem)
        .then(response => {
            setItemDetails = {
                warehouseName: "",
                itemName: "",
                description: "",
                category: "",
                status: "",
                quantity: 0,
            }
        })
        .catch(error => console.log(error));
    };


    if ((itemDetails === null || itemDetails === undefined)) {
    return <h1>Loading...</h1>
    }

    return (
        <>
        <div className = "edit-item">
            <div className = "edit-item__title-container">
                <Link to= "/"><img className = "edit-item__back-arrow" src = {backArrowIcon} alt = "back-arrow"></img></Link>
                <h1 className = "edit-item__header-title">Edit Inventory Item</h1>
            </div> 
            <form onSubmit = {handleSubmit} className = "edit-item__form">
            <div className = "edit-item__form--item-container">
                <h2 className = "edit-item__form--item-title">Item Details</h2>
                <label htmlFor = "edit-item__form-input" className = "edit-inventory__form-label">Item Name</label>
                <input type = "text" className = "edit-item__form-input" placeholder = "Item Name" defaultValue = {itemDetails.itemName}></input>
                {itemDetails.itemName === "" && (
                <div className = "edit-item__form--error-box">
                    <img className = "edit-item__form--error-img" src = {error} alt = "error message"/>
                    <div className = "edit-item__form--error-message">This field is required</div>
                </div> 
                )}
                <label htmlFor = "edit-item__form-textarea" className = "edit-inventory__form-label">Description</label>
                <textarea type = "text" className = "edit-item__form-textarea" placeholder = "Description" defaultValue = {itemDetails.description}></textarea>
                {itemDetails.description === "" && (
                <div className = "edit-item__form--error-box">
                    <img className = "edit-item__form--error-img" src = {error} alt = "error message"/>
                    <div className = "edit-item__form--error-message">This field is required</div>
                </div> 
                )}
                <label htmlFor = "edit-item__form-select" className = "edit-warehouse__form-label">Category</label>
                <select type = "text" className = "edit-item__form-select" style={arrowDropDown} name = "category" defaultValue = {itemDetails.category}>
                <option type = "text" value = "Electronics">Electronics</option>
                <option type = "text" value = "Gear">Gear</option>
                <option type = "text" value = "Apparel">Apparel</option>
                <option type = "text" value = "Accessories">Accessories</option>
                <option type = "text" value = "Health">Health</option> 
                </select>
                {itemDetails.category === "" && (
                <div className = "edit-item__form--error-box">
                    <img className = "edit-item__form--error-img" src = {error} alt = "error message"/>
                    <div className = "edit-item__form--error-message">This field is required</div>
                </div> 
                )}
            </div>
            <div className = "edit-item__form--availability-container">
                <h2 className = "edit-item__form--availability-title">Item Availability</h2>
                <label htmlFor = "edit-item__form-radio" className = "edit-warehouse__form-label">Status</label>
                
                <input type = "radio" className = "edit-item__form-radio" name = "status" defaultValue = "In Stock"/>
                <p className = "edit-item__form--status-text">Out of stock</p>
                
                
                <input type = "radio" className = "edit-item__form-radio" name = "status" defaultValue = "Out of Stock"/>
                <p className = "edit-item__form--status-text">In stock</p>
                {itemDetails.status === "" && (
                <div className = "edit-item__form--error-box">
                    <img className = "edit-item__form--error-img" src = {error} alt = "error message"/>
                    <div className = "edit-item__form--error-message">This field is required</div>
                </div> 
                )}
                <label htmlFor = "edit-item__form-select" className = "edit-item__form-label">Warehouse</label>
                <select type = "text" className = "edit-item__form-select" name = "warehouse" defaultValue = {itemDetails.warehouseName}>
                <option type = "text" value = "Manhattan">Manhattan</option>
                <option type = "text" value = "Washington">Washington</option>
                <option type = "text" value = "Jersey">Jersey</option>
                <option type = "text" value = "San Fran">San Fran</option>
                <option type = "text" value = "Santa Monica">Santa Monica</option>
                <option type = "text" value = "Seattle">Seattle</option>
                <option type = "text" value = "Miami">Miami</option>
                </select>
                {itemDetails.warehouseName === "" && (
                <div className = "edit-item__form--error-box">
                    <img className = "edit-item__form--error-img" src = {error} alt = "error message"/>
                    <div className = "edit-item__form--error-message">This field is required</div>
                </div> 
                )}
            <div className = "edit-warehouse__buttons-container">
                <Link to="/"><button className = "edit-warehouse__cancel-button" type = "submit">Cancel</button></Link>
                <button className = "edit-warehouse__save-button" type = "submit">Save</button>
            </div>
            </div>
            </form>
        </div>
        </>
    )
}

export default EditInventoryItem;
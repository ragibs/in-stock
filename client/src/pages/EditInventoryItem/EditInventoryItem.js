import "./EditInventoryItem.scss";
import React, { useState, useEffect } from "react";
import axios from "axios"
import { Link, useParams } from "react-router-dom";
import backArrowIcon from "../../assets/Icons/arrow_back-24px.svg";
import arrowDropDown from "../../assets/Icons/arrow_drop_down-24px.svg";
import error from "../../assets/Icons/error-24px.svg";

function EditInventoryItem () {

    const [itemDetails, setItemDetails] = useState({
        warehouseID: "",
        warehouseName: "",
        itemName: "",
        description: "",
        category: "",
        status: "",
        quantity: 0,
    }); 

    const {warehouseId} = useParams();
    console.log(inventoryId)

    let inventoryURL = `http://localhost:8080/inventories/${warehouseId}`;
    let inventoryItemURL = `http://localhost:8080/inventories/${warehouseId}/params.warehouseName`;
    useEffect(() => {

        axios.get(inventoryURL).then(response => {
        if(response.data.status === 200) {
            console.log(response.data); 
            setItemDetails(response.data); 
        }
        });
    }, [inventoryURL]);

    const handleChange = (event) => {
        setItemDetails({
        ...itemDetails, 
        [event.target.name]: event.target.value,
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const updatedInventoryItem = {
        itemName: itemDetails.itemName, 
        description: itemDetails.description, 
        category: itemDetails.category, 
        status: itemDetails.status, 
        quantity: itemDetails.quantity
    };

    axios.put(`http://localhost:8080/warehouses/${inventoryId}`, updatedInventoryItem)
    .then(response => {
    console.log(response.data)
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
            <label htmlFor = "edit-item__form--name" className = "edit-inventory__form--name-label">Item Name</label>
            <input type = "text" className = "edit-item__form--name" placeholder = "Item Name" required value = {itemDetails.itemName} onChange = {handleChange}></input>
            {itemDetails.itemName === "" && (
            <div className = "edit-item__form--error-box">
            <img className = "edit-item__form--error-img" src = {error} alt = "error message"/>
            <div className = "edit-item__form--error-message">This field is required</div>
            </div> 
            )}
            <label htmlFor = "edit-item__form--description" className = "edit-inventory__form--description-label">Description</label>
            <textarea type = "text" className = "edit-item__form--description" placeholder = "Description" required value = {itemDetails.description} onChange = {handleChange}></textarea>
            {itemDetails.description === "" && (
            <div className = "edit-item__form--error-box">
            <img className = "edit-item__form--error-img" src = {error} alt = "error message"/>
            <div className = "edit-item__form--error-message">This field is required</div>
            </div> 
            )}
            <label htmlFor = "edit-item__form--category" className = "edit-warehouse__form--category-label">Category</label>
            <select type = "text" className = "edit-item__form--dropdown" style={arrowDropDown} name = "category" required value = {itemDetails.category}>
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
            <label htmlFor = "edit-item__form--status" className = "edit-warehouse__form--status-label">Status</label>
            <div className = "edit-item__form--status-container">
            <div className = "edit-item__form--status-container1">
            <input type = "radio" className = "edit-item__form--status-input" name = "status" required value = "In Stock" onChange = {handleChange}/>
            <p className = "edit-item__form--status-text">Out of stock</p>
            </div>
            <div className = "edit-item__form--status-container2">
            <input type = "radio" className = "edit-item__form--status-input" name = "status" required value = "Out of Stock" onChange = {handleChange}/>
            <p className = "edit-item__form--status-text">In stock</p>
            </div>
            </div>
            {itemDetails.status === "" && (
            <div className = "edit-item__form--error-box">
            <img className = "edit-item__form--error-img" src = {error} alt = "error message"/>
            <div className = "edit-item__form--error-message">This field is required</div>
            </div> 
            )}
            <label htmlFor = "edit-item__form--warehouse" className = "edit-item__form--warehouse-label">Warehouse</label>
            <select type = "text" className = "edit-item__form--dropdown" name = "warehouse" required value = {itemDetails.warehouseName}>
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
import "./EditWarehouse.scss";
import React, { useState, useEffect } from "react";
import axios from "axios"
import { Link, useParams } from "react-router-dom";
import backArrowIcon from "../../assets/Icons/arrow_back-24px.svg";


function EditWarehouse () {

    const [warehouseDetails, setWarehouseDetails] = useState({
        warehouseName: "",
        street: "",
        city: "",
        country: "",
        contactName: "",
        position: "",
        phone: "",
        email: "",
    }); 

    const {warehouseId} = useParams();

    useEffect(() => {

        axios.get(`http://localhost:8080/warehouses/${warehouseId}`).then(response => {
            if(response.data.status === 200) {
                console.log(response.data); 
                setWarehouseDetails(response.data);  
            }
        });
    }, []);
    

    const updatedWarehouse = (event) => {
        setWarehouseDetails({
        ...warehouseDetails, 
        [event.target.name]: event.target.value,
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        
        const updatedWarehouse = {
            warehouseName: warehouseDetails.name, 
            street: warehouseDetails.address, 
            city: warehouseDetails.city, 
            country: warehouseDetails.country, 
            contactName: warehouseDetails.contact.name, 
            position: warehouseDetails.contact.position, 
            phone: warehouseDetails.contact.phone, 
            email: warehouseDetails.contact.email
        };

        axios.put(`http://localhost:8080/warehouses${warehouseId}`, updatedWarehouse)
        .then(response => {
            console.log(response.data)
        })
        .catch(error => console.log(error));
    };

    return (
        <>
        <div className = "edit-warehouse">
            <div className = "edit-warehouse__title-container">
                <Link to= "/"><img className = "edit-warehouse__back-arrow" src = {backArrowIcon} alt = "back-arrow"></img></Link>
                <h1 className = "edit-warehouse__header-title">Edit Warehouse</h1>
            </div> 
             
            <form onSubmit = {handleSubmit} className = "edit-warehouse__form">
                <div className = "edit-warehouse__warehouse-container">
                    <h2 className = "edit-warehouse__title">Warehouse Details</h2>
                    <label htmlFor = "edit-warehouse__form---name" className = "edit-warehouse__form--name-label">Warehouse Name</label>
                    <input type = "text" className = "edit-warehouse__form--name" placeholder = "Warehouse Name" value = {warehouseDetails.warehouseName}></input>
                    <label htmlFor = "edit-warehouse__form--street" className = "edit-warehouse__form--street-label">Street Address</label>
                    <input type = "text" className = "edit-warehouse__form--street" placeholder = "Warehouse Street" value = {warehouseDetails.street}></input>
                    <label htmlFor = "edit-warehouse__form--city" className = "edit-warehouse__form--city-label">City</label>
                    <input type = "text" className = "edit-warehouse__form--city" placeholder = "Warehouse City" value = {warehouseDetails.city}></input>
                    <label htmlFor = "edit-warehouse__form--country" className = "edit-warehouse__form--country-label"value = {warehouseDetails.country}>Country</label>
                    <input type = "text" className = "edit-warehouse__form--country" placeholder = "Warehouse Country" ></input>
                </div>
                <div className = "edit-warehouse__contact-container">
                    <h2 className = "edit-warehouse__title">Contact Details</h2>
                    <label htmlFor = "edit-warehouse__form--name" className = "edit-warehouse__form--name-label">Contact Name</label>
                    <input type = "text" className = "edit-warehouse__form--name" placeholder = "Contact Name" value = {warehouseDetails.contact.name}></input>
                    <label htmlFor = "edit-warehouse__form--position" className = "edit-warehouse__form--position-label">Position</label>
                    <input type = "text" className = "edit-warehouse__form--position" placeholder = "Position" value = {warehouseDetails.contact.position}></input>
                    <label htmlFor = "edit-warehouse__form--number" className = "edit-warehouse__form--number-label">Phone Number</label>
                    <input type = "text" className = "edit-warehouse__form--number" placeholder = "Phone number" value = {warehouseDetails.contact.phone}></input>
                    <label htmlFor = "edit-warehouse__form--email" className = "edit-warehouse__form--email-label">Email</label>
                    <input type = "text" className = "edit-warehouse__form--email" placeholder = "Email" value = {warehouseDetails.contact.email}></input>
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

export default EditWarehouse;
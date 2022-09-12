import "./EditWarehouse.scss";
import React, { useState, useEffect } from "react";
import axios from "axios"
import { Link, useParams } from "react-router-dom";
import backArrowIcon from "../../assets/Icons/arrow_back-24px.svg";
import error from "../../assets/Icons/error-24px.svg";

function EditWarehouse () {
    const [errorMessage, setErrorMessage] = useState("")
    const [warehouseDetails, setWarehouseDetails] = useState({
        warehouseName: "",
        street: "",
        city: "",
        country: "",
        contact : {
                    name: "",
                    position: "",
                    phone: "",
                    email: "",
                }
    }); 

    const {warehouseId} = useParams();
    console.log(warehouseId)

    let warehouseURL = `http://localhost:8080/warehouses/${warehouseId}`;

    useEffect(() => {

        axios.get(warehouseURL).then(response => {
            console.log(response)
            if(response.status === 200) {
            
                console.log(response.data); 
                setWarehouseDetails(response.data);  
            }
        });
    }, [warehouseURL]);
    

    // const handleChange = (event) => {
    //     setWarehouseDetails({
    //     ...warehouseDetails, 
    //     [event.target.name]: event.target.value,
    //     });
    // }

    const handleSubmit = (event) => {
        event.preventDefault();
        const updatedWarehouse = {
            warehouseName: event.target.warehouseName.value, 
            street: event.target.street.value, 
            city: event.target.city.value, 
            country: event.target.country.value, 
            contact: {
                        name: event.target.name.value, 
                        position: event.target.position.value, 
                        phone: event.target.phone.value, 
                        email: event.target.email.value
                    }
        };
        
        axios.put(`http://localhost:8080/warehouses/${warehouseId}`, updatedWarehouse)
        .then(response => {
            console.log(response.data)
        })
        .catch(error => console.log(error));
    };

    if ((warehouseDetails === null || warehouseDetails === undefined)) {
        return <h1>Loading...</h1>
      }

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
                    <label htmlFor = "edit-warehouse__form--warehouse-name" className = "edit-warehouse__form--warehouse-name-label">Warehouse Name</label>
                    <input type = "text" className = "edit-warehouse__form--warehouse-name" placeholder = "Warehouse Name" name = "warehouseName" defaultValue = {warehouseDetails.name}></input>
                    {warehouseDetails.name === "" && (
                        <div className = "edit-item__form--error-box">
                            <img className = "edit-item__form--error-img" src = {error} alt = "error message"/>
                            <div className = "edit-item__form--error-message">This field is required</div>
                        </div>    
                    )}
                    <label htmlFor = "edit-warehouse__form--street" className = "edit-warehouse__form--street-label">Street Address</label>
                    <input type = "text" className = "edit-warehouse__form--street" placeholder = "Warehouse Street" name = "street" defaultValue = {warehouseDetails.address}></input>
                    {warehouseDetails.address === "" && (
                        <div className = "edit-item__form--error-box">
                            <img className = "edit-item__form--error-img" src = {error} alt = "error message"/>
                            <div className = "edit-item__form--error-message">This field is required</div>
                        </div>    
                    )}
                    <label htmlFor = "edit-warehouse__form--city" className = "edit-warehouse__form--city-label">City</label>
                    <input type = "text" className = "edit-warehouse__form--city" placeholder = "Warehouse City" name = "city" defaultValue = {warehouseDetails.city}></input>
                    {warehouseDetails.city === "" && (
                        <div className = "edit-item__form--error-box">
                            <img className = "edit-item__form--error-img" src = {error} alt = "error message"/>
                            <div className = "edit-item__form--error-message">This field is required</div>
                        </div>    
                    )}
                    <label htmlFor = "edit-warehouse__form--country" className = "edit-warehouse__form--country-label">Country</label>
                    <input type = "text" className = "edit-warehouse__form--country" placeholder = "Warehouse Country" name = "country" defaultValue = {warehouseDetails.country}></input>
                    {warehouseDetails.country === "" && (
                        <div className = "edit-item__form--error-box">
                            <img className = "edit-item__form--error-img" src = {error} alt = "error message"/>
                            <div className = "edit-item__form--error-message">This field is required</div>
                        </div>    
                    )}
                </div>
                <div className = "edit-warehouse__contact-container">
                    <h2 className = "edit-warehouse__title">Contact Details</h2>
                    <label htmlFor = "edit-warehouse__form--contact-name" className = "edit-warehouse__form--contact-name-label">Contact Name</label>
                    <input type = "text" className = "edit-warehouse__form--contact-name" placeholder = "Contact Name" name = "name" defaultValue = {warehouseDetails.contact.name}></input>
                    {warehouseDetails.contact.name === "" && (
                        <div className = "edit-item__form--error-box">
                            <img className = "edit-item__form--error-img" src = {error} alt = "error message"/>
                            <div className = "edit-item__form--error-message">This field is required</div>
                        </div>    
                    )}
                    <label htmlFor = "edit-warehouse__form--position" className = "edit-warehouse__form--position-label">Position</label>
                    <input type = "text" className = "edit-warehouse__form--position" placeholder = "Position" name = "position" defaultValue = {warehouseDetails.contact.position}></input>
                    {warehouseDetails.contact.position === "" && (
                        <div className = "edit-item__form--error-box">
                            <img className = "edit-item__form--error-img" src = {error} alt = "error message"/>
                            <div className = "edit-item__form--error-message">This field is required</div>
                        </div>    
                    )}
                    <label htmlFor = "edit-warehouse__form--number" className = "edit-warehouse__form--number-label">Phone Number</label>
                    <input type = "text" className = "edit-warehouse__form--number" placeholder = "Phone number" name = "phone" defaultValue = {warehouseDetails.contact.phone}></input>
                    {warehouseDetails.contact.phone === "" && (
                        <div className = "edit-item__form--error-box">
                            <img className = "edit-item__form--error-img" src = {error} alt = "error message"/>
                            <div className = "edit-item__form--error-message">This field is required</div>
                        </div>    
                    )}
                    <label htmlFor = "edit-warehouse__form--email" className = "edit-warehouse__form--email-label">Email</label>
                    <input type = "text" className = "edit-warehouse__form--email" placeholder = "Email" name = "email" defaultValue = {warehouseDetails.contact.email}></input>
                    {warehouseDetails.contact.email === "" && (
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

export default EditWarehouse;
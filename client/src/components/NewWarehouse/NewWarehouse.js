import React, { useState } from "react";

import "./NewWarehouse.scss";

import ArrowBack from "../../assets/Icons/ArrowBack-24px.svg";

function NewWarehouse() {
  const [warehouseDetails, setWarehouseDetails] = useState({
    name: "",
    street: "",
    city: "",
    country: "",
  });

  const [contactDetails, setContactDetails] = useState({
    name: "",
    position: "",
    phone: "",
    email: "",
  });

  // Update state for input in Warehouse Section - keep all other fields as-is
  const handleWarehouseChange = (e) => {
    setWarehouseDetails({
      ...warehouseDetails,
      [e.target.name]: e.target.value,
    });
  };

  // Update state for input in Contact Section - keep all other fields as-is
  const handleContactChange = (e) => {
    setContactDetails({
      ...contactDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Warehouse Details: ", warehouseDetails);
    console.log("Contact Details: ", contactDetails);
  };

  return (
    <section className="new-warehouse">
      <form onSubmit={handleSubmit} className="new-warehouse__form">
        <h1 className="new-warehouse__header">
          <img src={ArrowBack} alt="Back Arrow Icon" />
          Add New Warehouse
        </h1>
        <div className="new-warehouse__form-section">
          <h2 className="new-warehouse__details-header">Warehouse Details</h2>
          <label htmlFor="warehouse-name">
            Warehouse Name
            <input
              name="warehouse-name"
              placeholder="Warehouse Name"
              value={warehouseDetails.name}
              onChange={handleWarehouseChange}
            />
          </label>
          <label htmlFor="warehouse-street">
            Street Address
            <input
              name="warehouse-street"
              placeholder="Street Address"
              value={warehouseDetails.street}
              onChange={handleWarehouseChange}
            />
          </label>
          <label htmlFor="warehouse-city">
            City
            <input
              name="warehouse-city"
              placeholder="City"
              value={warehouseDetails.city}
              onChange={handleWarehouseChange}
            />
          </label>
          <label htmlFor="warehouse-country">
            Country
            <input
              name="warehouse-email"
              placeholder="Email"
              value={warehouseDetails.country}
              onChange={handleWarehouseChange}
            />
          </label>
        </div>
        <div className="new-warehouse__form-section">
          <h2 className="new-warehouse__details-header">Contact Details</h2>
          <label htmlFor="contact-name">
            Contact Name
            <input
              name="contact-name"
              placeholder="Contact Name"
              value={contactDetails.name}
              onChange={handleContactChange}
            />
          </label>
          <label htmlFor="contact-position">
            Position
            <input
              name="contact-position"
              placeholder="Position"
              value={contactDetails.position}
              onChange={handleContactChange}
            />
          </label>
          <label htmlFor="contact-phone">
            Phone Number
            <input
              name="contact-phone"
              placeholder="Phone Number"
              value={contactDetails.phone}
              onChange={handleContactChange}
            />
          </label>
          <label htmlFor="warehouse-email">
            Email
            <input
              name="warehouse-email"
              placeholder="Email"
              value={warehouseDetails.country}
              onChange={handleContactChange}
            />
          </label>
        </div>
        <div className="new-warehouse__button-container"></div>
      </form>
    </section>
  );
}

export default NewWarehouse;

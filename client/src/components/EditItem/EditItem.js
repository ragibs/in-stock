import React from "react";

const EditItem = () => {
  return (
    <section className="new-warehouse">
      <form onSubmit={handleSubmit} className="new-warehouse__form">
        <h1 className="new-warehouse__header">
          <Link to="/" className="new-warehouse__header-link">
            <img src={ArrowBack} alt="Back Arrow Icon" />
          </Link>
          Add New Inventory Item
        </h1>
        <div className="new-warehouse__form-container">
          <div className="new-warehouse__form-section new-warehouse__form-section--warehouse">
            <h2 className="new-warehouse__details-header">Item Details</h2>
            <label
              htmlFor="warehouseName"
              className="new-warehouse__form-label"
            >
              Warehouse Name
              <input
                name="warehouseName"
                placeholder="Warehouse Name"
                value={warehouseDetails.warehouseName}
                onChange={handleWarehouseChange}
                className={`new-warehouse__form-input ${
                  errorWarehouseName ? " new-warehouse__form-input--error" : ""
                }`}
              />
              {errorWarehouseName && <ErrorMessage />}
            </label>
            <label htmlFor="street" className="new-warehouse__form-label">
              Street Address
              <input
                name="street"
                placeholder="Street Address"
                value={warehouseDetails.street}
                onChange={handleWarehouseChange}
                className={`new-warehouse__form-input ${
                  errorStreet ? " new-warehouse__form-input--error" : ""
                }`}
              />
              {errorStreet && <ErrorMessage />}
            </label>
            <label htmlFor="city" className="new-warehouse__form-label">
              City
              <input
                name="city"
                placeholder="City"
                value={warehouseDetails.city}
                onChange={handleWarehouseChange}
                className={`new-warehouse__form-input ${
                  errorCity ? " new-warehouse__form-input--error" : ""
                }`}
              />
              {errorCity && <ErrorMessage />}
            </label>
            <label htmlFor="country" className="new-warehouse__form-label">
              Country
              <input
                name="country"
                placeholder="Country"
                value={warehouseDetails.country}
                onChange={handleWarehouseChange}
                className={`new-warehouse__form-input ${
                  errorCountry ? " new-warehouse__form-input--error" : ""
                }`}
              />
              {errorCountry && <ErrorMessage />}
            </label>
          </div>
          <div className="new-warehouse__form-section new-warehouse__form-section--contact">
            <h2 className="new-warehouse__details-header">Contact Details</h2>
            <label htmlFor="contactName" className="new-warehouse__form-label">
              Contact Name
              <input
                name="contactName"
                placeholder="Contact Name"
                value={warehouseDetails.contactName}
                onChange={handleWarehouseChange}
                className={`new-warehouse__form-input ${
                  errorContactName ? " new-warehouse__form-input--error" : ""
                }`}
              />
              {errorContactName && <ErrorMessage />}
            </label>
            <label htmlFor="position" className="new-warehouse__form-label">
              Position
              <input
                name="position"
                placeholder="Position"
                value={warehouseDetails.position}
                onChange={handleWarehouseChange}
                className={`new-warehouse__form-input ${
                  errorPosition ? " new-warehouse__form-input--error" : ""
                }`}
              />
              {errorPosition && <ErrorMessage />}
            </label>
            <label htmlFor="phone" className="new-warehouse__form-label">
              Phone Number
              <input
                name="phone"
                placeholder="Phone Number"
                value={warehouseDetails.phone}
                onChange={handleWarehouseChange}
                className={`new-warehouse__form-input ${
                  errorPhone ? " new-warehouse__form-input--error" : ""
                }`}
              />
              {errorPhone && <ErrorMessage />}
            </label>
            <label htmlFor="email" className="new-warehouse__form-label">
              Email
              <input
                name="email"
                placeholder="Email"
                value={warehouseDetails.email}
                onChange={handleWarehouseChange}
                className={`new-warehouse__form-input ${
                  errorEmail ? " new-warehouse__form-input--error" : ""
                }`}
              />
              {errorEmail && <ErrorMessage />}
            </label>
          </div>
        </div>
        <div className="new-warehouse__button-container">
          <Link
            className="new-warehouse__button new-warehouse__button--cancel"
            to="/"
          >
            Cancel
          </Link>
          <button className="new-warehouse__button">+ Add Warehouse</button>
        </div>
      </form>
    </section>
  );
};

export default EditItem;

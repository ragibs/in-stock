import "./Inventory.scss";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import deleteIcon from "../../assets/Icons/delete_outline-24px.svg";
import editIcon from "../../assets/Icons/edit-24px.svg";
import rightArrow from "../../assets/Icons/chevron_right-24px.svg";
import sortArrow from "../../assets/Icons/sort-24px.svg";
import InventoryDelModal from "../InventoryDelModal/InventoryDelModal";

function Inventory(props) {
  const [deleteInvModal, setDeleteInvModal] = useState(false);
  const [deleteInventory, setDeleteInventory] = useState([""]);

  const delHandle = (name, id) => {
    setDeleteInventory([name, id]);
    setDeleteInvModal(true);
  };
  return (
    <div className="inventory__container">
      {deleteInvModal && (
        <InventoryDelModal
          setDeleteInvModal={setDeleteInvModal}
          deleteInventory={deleteInventory}
        />
      )}
      <div className="inventory__top">
        <h1 className="inventory__title">Inventory</h1>
        <div className="inventory__topright">
          <input
            type="text"
            className="inventory__search"
            placeholder="Search..."
          ></input>
          <Link to="/inventory/new" className="inventory__button">
            + Add New Item
          </Link>
        </div>
      </div>
      <div className="inventory__categories">
        <div className="inventory__categoryAndArrow--left">
          <span className="inventory__category">INVENTORY ITEM</span>
          <img src={sortArrow} className="inventory__sortArrow" />
        </div>
        <div className="inventory__categoryAndArrow">
          <span className="inventory__category">CATEGORY</span>
          <img src={sortArrow} className="inventory__sortArrow" />
        </div>
        <div className="inventory__categoryAndArrow">
          <span className="inventory__category">STATUS</span>
          <img src={sortArrow} className="inventory__sortArrow" />
        </div>
        <div className="inventory__categoryAndArrow">
          <span className="inventory__category">QTY</span>
          <img src={sortArrow} className="inventory__sortArrow" />
        </div>
        <div className="inventory__categoryAndArrow">
          <span className="inventory__category">WAREHOUSE</span>
          <img src={sortArrow} className="inventory__sortArrow" />
        </div>
        <span className="inventory__category--right">ACTIONS</span>
      </div>
      {props.inventoriesData.map((thumb) => (
        <div className="warehouse" key={thumb.id}>
          <div className="inventory__text">
            <div className="inventory__left">
              <Link to={`/warehouses/${thumb.id}`} className="inventory__link">
                <div className="inventory__nameAndArrow">
                  <p className="inventory__name">{thumb.itemName}</p>
                  <img src={rightArrow} className="inventory__rightArrow" />
                </div>
              </Link>
              <p className="inventory__address">{thumb.category}</p>
            </div>
            <div className="inventory__right">
              <p className="inventory__contact">
                <span
                  className={
                    thumb.status === "In Stock"
                      ? "inventory__statusTagGreen"
                      : "inventory__statusTagRed"
                  }
                >
                  {thumb.status}
                </span>
              </p>
              <p className="inventory__contactinfo">{thumb.quantity}</p>
              <p className="inventory__warehouseName">{thumb.warehouseName}</p>
            </div>
          </div>
          <div className="inventory__icons">
            <img
              onClick={() => delHandle(thumb.itemName, thumb.id)} //passing both name and id of selected wh
              src={deleteIcon}
              className="inventory__deleteicon"
            />
            <img src={editIcon} className="inventory__editicon" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Inventory;

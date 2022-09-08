
import "./Warehouse.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import deleteIcon from "../../assets/Icons/delete_outline-24px.svg";
import editIcon from "../../assets/Icons/edit-24px.svg";
import rightArrow from "../../assets/Icons/chevron_right-24px.svg";
import DeleteModal from "../DeleteModal/DeleteModal";
import sortArrow from "../../assets/Icons/sort-24px.svg"

   
function Warehouse({ warehousesData }) {
  const [deleteModal, setDeleteModal] = useState(false); //state to control delete modal
  const [deleteWarehouse, setDeleteWarehouse] = useState([""]); //to pass id to deletemodal to send API delete request

  //delete request handler
  const delHandle = (name, id) => {
    setDeleteWarehouse([name, id]);
    setDeleteModal(true);
  };
    return (  

        <>
            <div className="warehouse__top">
                <h1 className="warehouse__title">Warehouses</h1>
                <div className="warehouse__topright">
                    <input type="text" className="warehouse__search" placeholder='Search...'></input>
                    <button className="warehouse__button">+ Add New Warehouse</button>
                </div>
            </div>

            {props.warehousesData.map((thumb) =>
                <div className="warehouse" key={thumb.id}>
                    <div className="warehouse__text">
                        <div className="warehouse__left">
                            <Link to={`/warehouses/${thumb.id}`} className="warehouse__link">
                                <div className="warehouse__nameAndArrow">
                                    <p className="warehouse__name">{thumb.name}</p>
                                    <img src={rightArrow} className="warehouse__rightArrow" />
                                </div>
                            </Link>
                            <p className="warehouse__address">{thumb.address}, {thumb.city}, {thumb.country}</p>
                        </div>
                        <div className="warehouse__right">
                            <p className="warehouse__contact">{thumb.contact.name}</p>
                            <p className="warehouse__contactinfo">{thumb.contact.phone}<p>{thumb.contact.email}</p></p>
                        </div>
                    </div>
                    <div className="warehouse__icons">
                        <img src={deleteIcon} className="warehouse__deleteicon" />
                        <img src={editIcon} className="warehouse__editicon" />
                    </div>
                </div>
            )}
        </>
    );

        </div>  {deleteModal && (
        <DeleteModal
          setDeleteModal={setDeleteModal}
          deleteWarehouse={deleteWarehouse}
        />
      )}
      {/* if deleteModal is set to true, the modal will render */}
        <div className='warehouse__categories'>
            <div className='warehouse__categoryAndArrow'>
                <span className='warehouse__category'>WAREHOUSE</span>
                <img src={sortArrow} className="warehouse__sortArrow"/>
            </div>
            <div className='warehouse__categoryAndArrow'>
                <span className='warehouse__category'>ADDRESS</span>
                <img src={sortArrow} className="warehouse__sortArrow"/>
            </div>
            <div className='warehouse__categoryAndArrow'>
                <span className='warehouse__category'>CONTACT NAME</span>
                <img src={sortArrow} className="warehouse__sortArrow"/>
            </div>
            <div className='warehouse__categoryAndArrow'>
                <span className='warehouse__category'>CONTACT INFORMATION</span>
                <img src={sortArrow} className="warehouse__sortArrow"/>
            </div>
            <span className='warehouse__category--right'>ACTIONS</span>
        </div>       
        {warehousesData.map((warehouse) =>
            <div className="warehouse" key={warehouse.id}>
                <div className="warehouse__text">
                    <div className="warehouse__left">
                        <Link to={`/warehouses/${warehouse.id}`} className="warehouse__link">
                            <div className="warehouse__nameAndArrow">
                                <p className="warehouse__name">{warehouse.name}</p>
                                <img src={rightArrow} className="warehouse__rightArrow"/>
                            </div>                            
                        </Link>
                        <p className="warehouse__address">{warehouse.address}, {warehouse.city}, {warehouse.country}</p>
                    </div>
                    <div className="warehouse__right">
                        <p className="warehouse__contact">{warehouse.contact.name}</p>
                        <p className="warehouse__contactinfo">{warehouse.contact.phone}<p>{warehouse.contact.email}</p></p>
                    </div>
                     </div>
          <div className="warehouse__icons">
            <img
              onClick={() => delHandle(warehouse.name, warehouse.id)} //passing both name and id of selected wh
              src={deleteIcon}
              className="warehouse__deleteicon"
            />
            <img src={editIcon} className="warehouse__editicon" />
          </div>
        </div>
      ))}
    </>
  );

}

export default Warehouse;


import './Inventory.scss';
import { Link } from 'react-router-dom';
import deleteIcon from "../../assets/Icons/delete_outline-24px.svg"
import editIcon from "../../assets/Icons/edit-24px.svg"
import rightArrow from "../../assets/Icons/chevron_right-24px.svg"
import sortArrow from "../../assets/Icons/sort-24px.svg"

function Inventory(props) {     
    return (   
        <>
        <div className="warehouse__top">
            <h1 className="warehouse__title">Inventory</h1>
            <div className="warehouse__topright">
                <input type="text" className="warehouse__search" placeholder='Search...'></input>
                <button className="warehouse__button">+ Add New Item</button>
            </div>
        </div>
        <div className='warehouse__categories'>
            <div className='warehouse__categoryAndArrow'>
                <span className='warehouse__category'>INVENTORY ITEM</span>
                <img src={sortArrow} className="warehouse__sortArrow"/>
            </div>
            <div className='warehouse__categoryAndArrow'>
                <span className='warehouse__category'>CATEGORY</span>
                <img src={sortArrow} className="warehouse__sortArrow"/>
            </div>
            <div className='warehouse__categoryAndArrow'>
                <span className='warehouse__category'>STATUS</span>
                <img src={sortArrow} className="warehouse__sortArrow"/>
            </div>
            <div className='warehouse__categoryAndArrow'>
                <span className='warehouse__category'>QTY</span>
                <img src={sortArrow} className="warehouse__sortArrow"/>
            </div>
            <div className='warehouse__categoryAndArrow'>
                <span className='warehouse__category'>WAREHOUSE</span>
                <img src={sortArrow} className="warehouse__sortArrow"/>
            </div>
            <span className='warehouse__category--right'>ACTIONS</span>
        </div>       
        {props.inventoriesData.map((thumb) =>
            <div className="warehouse" key={thumb.id}>
                <div className="warehouse__text">
                    <div className="warehouse__left">
                        <Link to={`/warehouses/${thumb.id}`} className="warehouse__link">
                            <div className="warehouse__nameAndArrow">
                                <p className="warehouse__name">{thumb.itemName}</p>
                                <img src={rightArrow} className="warehouse__rightArrow"/>
                            </div>                            
                        </Link>
                        <p className="warehouse__address">{thumb.category}</p>
                    </div>
                    <div className="warehouse__right">
                        <p className="warehouse__contact">{thumb.status}</p>
                        <p className="warehouse__contactinfo">{thumb.quantity}</p>
                        <p className="warehouse__warehouseName">{thumb.warehouseName}</p>
                    </div>
                </div>
                <div className="warehouse__icons">
                    <img src={deleteIcon} className="warehouse__deleteicon"/>
                    <img src={editIcon} className="warehouse__editicon"/>
                </div>                
            </div>              
        )}
        </>        
    );
}

export default Inventory
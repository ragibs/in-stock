import './Warehouse.scss';
import { Link } from 'react-router-dom';
import deleteIcon from "../../assets/Icons/delete_outline-24px.svg"
import editIcon from "../../assets/Icons/edit-24px.svg"
import rightArrow from "../../assets/Icons/chevron_right-24px.svg"
import sortArrow from "../../assets/Icons/sort-24px.svg"

function Warehouse(props) {     
    return (   
        <>
        <div className="warehouse__top">
            <h1 className="warehouse__title">Warehouses</h1>
            <div className="warehouse__topright">
                <input type="text" className="warehouse__search" placeholder='Search...'></input>
                <button className="warehouse__button">+ Add New Warehouse</button>
            </div>
        </div>
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
        {props.warehousesData.map((thumb) =>
            <div className="warehouse" key={thumb.id}>
                <div className="warehouse__text">
                    <div className="warehouse__left">
                        <Link to={`/warehouses/${thumb.id}`} className="warehouse__link">
                            <div className="warehouse__nameAndArrow">
                                <p className="warehouse__name">{thumb.name}</p>
                                <img src={rightArrow} className="warehouse__rightArrow"/>
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
                    <img src={deleteIcon} className="warehouse__deleteicon"/>
                    <img src={editIcon} className="warehouse__editicon"/>
                </div>                
            </div>              
        )}
        </>        
    );
}

export default Warehouse



import './Warehouse.scss';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Warehouse(props) {     
    return (   
        <>       
        {props.warehousesData.map((thumb) =>
            <div className="warehouse" key={thumb.id}>
                <div className="warehouse__left">
                    <p className="warehouse__name"><Link to={`/${thumb.id}`}>{thumb.name}</Link></p>
                    <p className="warehouse__address">{thumb.address}</p>
                </div>
                <div className="warehouse__right">
                    <p className="warehouse__contact">{thumb.contact.name}</p>
                    <p className="warehouse__contactinfo">{thumb.contact.phone}<p>{thumb.contact.email}</p></p>
                </div>                
            </div>  
        )}
        </>        
    );
}

export default Warehouse

//Link to={`/${thumb.id}`}


import React , {useEffect,useContext} from 'react'
import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';

//Items 
import items from './items/ItemsMenuBarra'


const ManuBarra = ()=>{    
    //const usuario = null    
    const usuario = {nombre: "Sofía"}

    const itemsMenu = items(usuario)

    const start = <img alt="logo" src="showcase/images/logo.png" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} height="40" className="p-mr-2"></img>;
    const end = <InputText placeholder="Search" type="text" />;

    return (
        <div >
            <div className="primary" >
                <Menubar model={itemsMenu} start={start} end={end} />
            </div>
        </div>
    );
}

export default ManuBarra
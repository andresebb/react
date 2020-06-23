import React from 'react';
import Navbar from '../components/Navbar';

//Estamos creando un layout para el navbaar
function Layout(props){
    //const children = props.children;
        return (
            //React.Fragment sirve con un div, solo que este no se ven en el html
            <React.Fragment>
                <Navbar/>
                {props.children};
            </React.Fragment>
        )
}

export default Layout;
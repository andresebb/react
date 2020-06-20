import React from 'react';

import confLogo from '../images/badge-header.svg';

import "./styles/Badge.css";


class Badge extends React.Component{
    
    /*Todos los componenten necesitan por lo menos un metodo,
    y ese es el render, que define el resultado que veremos
    en pantalla*/

     /* En react no se usa class, se usa className en el html */

    render() {
        return(
            <div className="Badge"> 
                <div className="Badge__header">
                    <img src={confLogo}></img>
                </div>

                <div className="Badge__section-name">
                    <img className="Badge__avatar" src="https://s.gravatar.com/avatar/484479aae5659fd266b2864a69b7c7cd?s=80
" alt="avatar"></img>
                    <h1>Andres <br/> Betancourt</h1>
                </div>

                <div className="Badge__section-info">
                    <h3>Frontend Developer</h3>
                    <div>@andresebbe</div>
                </div>

                <div className="Badge__footer">#platziconf</div>
            </div>
        )
    }
}

export default Badge; //Aqui estamos exportando es la clase, no el archivo

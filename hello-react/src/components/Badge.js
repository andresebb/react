import React from 'react';

import confLogo from '../images/badge-header.svg';

class Badgee extends React.Component{
    
    /*Todos los componenten necesitan por lo menos un metodo,
    y ese es el render, que define el resultado que veremos
    en pantalla*/

    render() {
        return(
            <div>
                <div>
                    <img src={confLogo}></img>
                </div>

                <div>
                    <img src="https://www.gravatar.com/avatar?d=identicon" alt="avatar"></img>
                    <h1>Andres <br/> Betancourt</h1>
                </div>

                <div>
                    <p>Frontend Developer</p>
                    <p>@andresebb</p>
                </div>

                <div>#platziconf</div>
            </div>
        )
    }
}

export default Badgee; //Aqui estamos exportando es la clase, no el archivo

//Esta es la forma de hacerlo solo con js

/* const element = document.createElement('h1');
element.innerText = 'Hello, Platzi Badges!';

const container = document.getElementById('app');

container.appendChild(element);
 */

//Esta es la forma de hacerlo con react



import React from 'react';
import ReactDOM from 'react-dom';

const name = 'Eduardo';

//Aca trabajamos con jsx y react.createElement este ultimo no se utiliza casi;

/* const element = React.createElement('a', {href: 'https://platzi.com'}, 'Ir a platzi' ); */
/* const element = React.createElement('h1', {}, `Hola soy ${name}`); */
/* const element = React.createElement(
    'div',
    {},
    React.createElement('h1', {}, 'Hola soy andre'),
    React.createElement('p', {}, 'Esta es el parrado de reactcreateelemet'),
);



/* const jsx = <h1>Hello, Platzi Badges soy react!</h1>; */
/* const jsx = <h1>Hola soy, {name}</h1>; */

const jsx = (
    <div>
        <h1>Hola soy andres</h1>
        <p>Asi insertamos codigo a traves de jsx</p>
    </div>
);




const container = document.getElementById('app');

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(jsx, container);
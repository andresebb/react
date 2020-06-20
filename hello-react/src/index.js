//Esta es la forma de hacerlo solo con js

/* const element = document.createElement('h1');
element.innerText = 'Hello, Platzi Badges!';

const container = document.getElementById('app');

container.appendChild(element);
 */

//Esta es la forma de hacerlo con react

import React from 'react';
import ReactDOM from 'react-dom';

const element = <h1>Hello, Platzi Badges soy react!</h1>;

const container = document.getElementById('app');

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(element, container);
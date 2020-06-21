import React from 'react';
import ReactDOM from 'react-dom';

import BadgeNew from './pages/BadgeNew';
import 'bootstrap/dist/css/bootstrap.css'; //Como es un archivo de npm se le pasa asi

import './global.css';


const container = document.getElementById('app');

ReactDOM.render(<BadgeNew />, container);
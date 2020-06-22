import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css'; //Como es un archivo de npm se le pasa asi
import './global.css';


import BadgeNew from './pages/BadgeNew';
import Badges from './pages/Badges';



const container = document.getElementById('app');

ReactDOM.render(<Badges />, container);
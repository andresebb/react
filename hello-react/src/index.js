import React from 'react';
import ReactDOM from 'react-dom';

import Badge from './components/Badge';
import 'bootstrap/dist/css/bootstrap.css'; //Como es un archivo de npm se le pasa asi

import './global.css';


const container = document.getElementById('app');

ReactDOM.render(<Badge firstName="Andrese" lastName="Betancourte" jobTitle="Frontend deve" twitter="andresebbe" avatar="https://s.gravatar.com/avatar/484479aae5659fd266b2864a69b7c7cd?s=80" />, container);
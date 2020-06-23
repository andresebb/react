import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import BadgeNew from '../pages/BadgeNew';
import Badges from '../pages/Badges';
import NotFound from '../pages/NotFound';

import Layout from './Layout';

//Cambiamos en la pagina badge.js la a    a  Link, para que asi la pagina no se recargue

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/badges" component={Badges} />
          <Route exact path="/badges/new" component={BadgeNew} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

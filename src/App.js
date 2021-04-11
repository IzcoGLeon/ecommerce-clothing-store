import React from 'react';
import { Route, Switch } from 'react-router-dom'; //Para hacer uso de funcionalidades importamos componentes
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';

//El componente Route toma una serie de  argumentos, siendo principales 'exact'(con valor true por default, solo se coincidirá para renderizado si el path coincide con el location.pathname, o path, de manera precisa), 'path' (el string que será equivalente al path mismo del lugar en el que nos encontraremos), 'component' (el componente que queremos renderizar)
function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage}/>
      </Switch>
    </div>
  );
}

//Switch es otro componente que renderiza el primer hijo <Route> o <Redirect> que coincide con la localización. Switch es unico ya que renderiza una ruta (Route) de manera exclusiva, al momento que Switch ve que algo coincide con path (de cada ruta) entonces solo renderizará esa Route.

export default App;

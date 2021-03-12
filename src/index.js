import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'; //Ya que instalamos react-router-dom, para comenzar a utilizarlo debemos importar el componente BrowserRouter en index.js. Este es un componente que usaremos para envolver nuestra aplicación 

import './index.css';
import App from './App';

//Lo que este componente hace es que proporciona a la aplicación (envuelta entre este componente) toda la funcionalidad de routing de la que esta libreria dispone 
ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);



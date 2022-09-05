import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import Frutas from './pages/frutas';
// import Contar from './pages/botao';
// import MudarTitulo from './pages/ex4';
// import Focar from './pages/ex5';
// import Exercicio6 from './pages/ex6';
import DownloadBarra from './pages/barra';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Frutas /> */}
    {/* <Contar /> */}
    {/* <MudarTitulo /> */}
    {/* <Focar /> */}
    {/* <Exercicio6 /> */}
    <DownloadBarra />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

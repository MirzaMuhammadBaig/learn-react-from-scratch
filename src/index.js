import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

//////////////////imperative way /////////////////////////
// const h1 = document.createElement('h1')
// h1.textContent = "This is an imperative way to program"
// h1.className = 'header'
// document.getElementById('root').append(h1);

// ReactDOM.render(<h1 className = 'header' >Hello React!</h1>, document.getElementById('root'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

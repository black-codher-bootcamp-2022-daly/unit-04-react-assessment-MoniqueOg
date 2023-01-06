import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
/*import React, { useState, Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import data from './models/headphones.json';
import GadgetList from './components/GadgetList';
import ClickCounter from './components/ClickCounter';

const mainStyle = { "fontFamily": "Arial" };

const App = () => {
  const headphones = [{ "title": "Headphones 1" }, { "title": "Headphones 2" }, { "title": "Headphones 3" }, { "title": "Headphones 4" },];
  const [headphonesList] = useState(headphones);
  // useState used to be able to update gadget list without having to update whole page

  return <section style={mainStyle}>
    <h1>Electronics Store</h1>
    <GadgetList items={headphonesList} color="yellow" />
    <ClickCounter />
  </section>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);*/

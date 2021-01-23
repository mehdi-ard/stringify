import React from 'react';
import ReactDOM from 'react-dom';
import {} from '../dist';
import { stringifyRials, stringifyFa, stringifyTomans } from '../dist';
import './index.css';

const App = () => {
  const priceToman = 120000000;
  const priceRial = 116223854;
  const number = 125948;

  return (
    <>
      <h4>{stringifyFa(number)}</h4>

      <h4>{stringifyRials(priceRial)}</h4>

      <h4>{stringifyTomans(priceToman)}</h4>
    </>
  );
};
ReactDOM.render(<App />, document.getElementById('container'));

import React from 'react';

let formatter = new Intl.NumberFormat('en-GB', {
  style: 'currency',
  currency: 'GBP'
});

const BasketTotal = (props) => {
  return (
    /*<div id="baskettotal">
      {formatter.format(Math.abs(props.basketTotal))}
    </div>*/
    <div>{((props.basketTotal))}</div>
  );
}

export default BasketTotal;
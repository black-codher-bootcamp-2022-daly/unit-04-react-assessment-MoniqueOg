import React  from 'react';
import PropTypes from 'prop-types';
import Product from './Product';
import BasketTotal from './BasketTotal';
import BasketCount from './BasketCount';

const Basket = ({basket,basketTotal,...props}) => {
  const count = basket.length;
  return (
    <div id="basket">
        <h2>Basket</h2>
        <BasketCount basketCount={count}/>
        { 
          (count > 0 ? 
          basket.map(item => <Product key={item.trackId} item={item} {...props}/>) : 
          <div className="empty">Sorry, no items in basket...</div>)
        }
        <BasketTotal basketTotal={basketTotal}/>
    </div>
  );
}

Basket.propTypes = {
  basket: PropTypes.array.isRequired
}

export default Basket;
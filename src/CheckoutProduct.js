import React from 'react';
import './CheckoutProduct.css';
import {useStateValue} from './StateProvider';

function CheckoutProduct({id,title,image,price,rating}) {
  const [{basket},dispatch]=useStateValue();
    console.log(id ,title, image, price, rating);
    
   const removeFromBasket= ()=>{
    // remove item from basket...
      dispatch({
        type:"REMOVE_FROM_BASKET",
        id:id,
      });
   }
  
  
  return (
    <div className='checkoutProduct'>
      <img className='checkout-product-image' src={image} alt=""/>
      <div className="checkout-product-info">
        <p className='checkout-product-title'> {title}</p>
        
        <p className="checkout-product-price">
            <small>$</small>
            <strong>{price}</strong>
        </p>
        
        <div className="checkout-product-rating">
            {
                Array(rating)
                .fill()
                .map((_)=>(
                    <p>⭐</p>
                ))
            }
            
        </div>

        <button onClick={removeFromBasket}>Remove from Basket</button>

      </div>


    </div>
  )
}

export default CheckoutProduct
import React from 'react';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
import './Checkout.css';

const Checkout = () => {
    const [{ basket }] = useStateValue();

    return (
        <div className='checkout'>

          <div className="checkout-left">
            <img className='checkout-ad' src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/SingleTitle/SamratPrithviraj/3000x1200_Hero-Tall_P._CB633864038_.jpg" alt="" />
       
            {basket?.length===0 ?(
            <div>
                <h2>your shopping Basket is empty</h2>
            </div>
        ) : (
            <div>
                <h2 className='checkout-title'>your shopping basket contains : </h2>
                
                { basket?.map((item) =>(
                        
                        <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                        />
                        
                ))
                }

            </div>
        )}
       </div>
       {basket.length >0 && (
         <div className='checkout-right'>
            
            <Subtotal />
        </div>
        )}
        </div>
      
    );
}

export default Checkout;

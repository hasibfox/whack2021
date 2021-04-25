import React from 'react';
import './Checkout.css';
import CurrencyFormat from "react-currency-format"
import { useStateValue } from '../state-api-folder/StateProvider';
import {getBasketTotal} from '../state-api-folder/Reducer';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import CheckoutProduct from './CheckoutProduct';


function Checkout(){
    const [{basket}, dispatch] = useStateValue();
    const value = getBasketTotal(basket);
    
    console.log(value)
    return (
        <div className="checkout-container">
            <h1 style={{marginTop:'3vh'}}>Confirm Now</h1>
            <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* Part of the homework */}
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <div className="subtotal">
                    <h3 className="i1">
                    <div>
                                                
                        {basket.map( item => (
                           <div>{item.title}</div> 
                        ))} 
                    </div>
                    </h3>
                    <div>
                                                
                    {basket.map( item => (
                        <div style={{display:'flex'}}>${item.price} <CheckoutProduct id={item.id}/> </div> 
                    ))} 
                    </div>
                    <p>Subtotal ({basket.length} items): </p> 
                    <div style={{display:'flex'}}>
                    <strong>$</strong>{value}
                    </div>
                    
                    <p>tax</p>
                    <span>-</span>
                    <span style={{color:'white'}}>-</span>
                    <div style={{display:'flex', fontSize:'17px'}}>
                    <h3>Total $</h3> <div style={{
                        fontSize:'20px'
                    }}>
                    {value}
                    </div>
                    </div>         
                </div>
            
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)} // Part of the homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button>Proceed to Checkout</button>
                
                
        </div>
    )
    
}
export default Checkout;
